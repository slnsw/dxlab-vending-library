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

let stream = T.stream('statuses/filter', { track: '@dxlabtest', language: 'en' });

stream.on('tweet', function (tweet) {
  console.log('tweet');

  if ((tweet.text.substring(0,2)!='RT')
    &&(tweet.text.includes('#suggest'))) {

    console.log('ACTION: '+tweet.text);
    var resp = 'Thanks @'+tweet.user.screen_name+' for the request.';
    T.post('statuses/update', { status: resp }, function(err, data, response) {

      console.log(classifier.classify('did the tests pass?')); // -> software

      console.log('REPLIED: '+resp);
    });
    // T.get('search/tweets', { q : '@'+tweet.user.screen_name, count: 20 }, function(err, data, response) {
    //  console.log(err);
    // });
  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }
});
