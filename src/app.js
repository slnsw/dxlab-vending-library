import Twit from 'twit';
import natural from 'natural';

const T = new Twit({
  consumer_key: 'np5qK4gvGPPhj8WxZ77kkcsHB',
  consumer_secret: '2xIhrUORakh6RtG6PIGMJY0T0Lwy3NZRQn8JzZS9lFSSeD4doK',
  access_token: '902026514073395200-wPiitZ263vgwothAIia27ZvgP9aKj9N',
  access_token_secret: '9tkEBzY9QpMeFUw5mQ5qGwoEReVuYgZ3vwrhbiutFj3ZE',
  timeout_ms: 60*1000, // optional HTTP request timeout to apply to all requests.
});

const classifier = new natural.BayesClassifier();

// Training data
classifier.addDocument('my unit-tests failed.', 'software');
classifier.addDocument('tried the program, but it was buggy.', 'software');
classifier.addDocument('tomorrow we will do standup.', 'meeting');
classifier.addDocument('the drive has a 2TB capacity.', 'hardware');
classifier.addDocument('i need a new power supply.', 'hardware');
classifier.addDocument('can you play some new music?', 'music');

classifier.train();
///////////////////////////////////////////////////////////////////////////


let stream = T.stream('statuses/filter', { track: '@dxlabtest', language: 'en' });

stream.on('connect', function (request) {
  console.log('connection requested '+Date.now());
});

stream.on('disconnect', function (disconnectMessage) {
  console.log('_+_+_ disconnect _+_+_ '+disconnectMessage); 
});

stream.on('connected', function (response) {
  console.log('CONNECTED! '+Date.now()); 
});

stream.on('reconnect', function (request, response, connectInterval) {
  console.log('Re-connected... '+Date.now()); 
});

stream.on('warning', function (warning) {
  console.log('###WARNING!### '+warning); 
});

stream.on('limit', function (limitMessage) {
  console.log('**LIMIT MSG** '+limitMessage); 
})

stream.on('tweet', function (tweet) {
  console.log('tweet '+Date.now());

  if ((tweet.text.substring(0,2)!='RT')
    &&(tweet.text.includes('#suggest'))) {

    console.log('ACTION: '+tweet.text);

    var uid = tweet.user.id_str; //'902085743207636995'; //tweet.user.id; // 902085743207636995;
    var p = tweet.user.protected;
    if (p==false) {
      console.log(uid); 
      T.get('statuses/user_timeline', { user_id : uid , count: 20 }, function(err, data, response) {
        console.log(data.length);
        var l = data.length;
        var twts = '';
        if (l>1) {
          for (var i = 1; i < l; i++) { // skip first tweet as it is the request for suggestion
            twts += data[i].text+" . ";
          }
          if (tweet.user.description) {
            twts += tweet.user.description;            
          }
          console.log(twts);
          var clss = classifier.classify(twts);
          console.log(clss);

          var resp = 'Thanks @'+tweet.user.screen_name+' for the request. We suggest: '+clss;
          T.post('statuses/update', { status: resp }, function(err, data, response) {
            console.log('REPLIED: '+resp);
          });

        } else {
          // zero tweets - pick something random
          console.log('random selection...');
        }
      });
    } else {
      console.log('user has private tweets...');
    }

  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }
});
