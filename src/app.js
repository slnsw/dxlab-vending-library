import Twit from 'twit';
// import natural from 'natural';
import NaturalSynaptic from 'natural-synaptic';

import bookData from 'bookData.js';

require('dotenv').config();

// console.log(bookData.length);

// connect to twitter
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

// get ready to do some text classification
// const classifier = new NaturalSynaptic();

const neuralNetFilename = 'neuralNet.json';

NaturalSynaptic.load(neuralNetFilename, (err, classifier) => {
  if (err) {
    console.log(err);
  }

  // twitter params (from .env file)
  const twitterHandle = `@${process.env.TWITTER_HANDLE}`;
  const hashTag = process.env.HASHTAG;

  // let rowName;
  let rowNum;
  // let column;
  let clss;

  // /////////////////////////////////////////////////////////////////////////

  // keep an eye out for people tweeting at us
  const stream = T.stream('statuses/filter', { track: twitterHandle });

  console.log('--------------------------------------------------');
  console.log(`TWITTER_HANDLE: ${twitterHandle}`);
  console.log(`HASHTAG: ${hashTag}`);
  console.log('--------------------------------------------------');

  // set up some connection monitoring
  stream.on('connect', () => {
    console.log(`Connection requested....${Date.now()}`);
  });
  stream.on('disconnect', (disconnectMessage) => {
    console.log(`_x_x_ disconnect _x_x_ ${disconnectMessage}`);
  });
  stream.on('connected', () => {
    console.log(`CONNECTED! ${Date.now()}`);
  });
  stream.on('reconnect', () => {
    console.log(`...re-connected ${Date.now()}`);
  });
  stream.on('warning', (warning) => {
    console.log(`### WARNING! ### ${warning}`);
  });
  stream.on('limit', (limitMessage) => {
    console.log(`**LIMIT MSG** ${limitMessage}`);
  });

  // /////////////////////////////////////////////////////////////////////////

  // we got one!
  stream.on('tweet', (tweet) => handleTweet(tweet, true));

  export function handleTweet(tweet, respond) {
    console.log('--------------------------------------------------');
    console.log(`tweet ${Date.now()}`);

    // check it isn't a re-tweet and does have the correct hash tag
    if (tweet.text.substring(0, 2) !== 'RT' && tweet.text.includes(hashTag)) {
      // log incoming tweet
      console.log(`ACTION: ${tweet.text}`);

      // get the user ID (as string)
      const uid = tweet.user.id_str;

      const tweetId = tweet.id_str;
      console.log(`Tweet ID: ${tweetId}`);

      // now get 40 of that user's tweets and classify them!
      T.get('statuses/user_timeline', { user_id: uid, count: 40 })
        .catch((err) => {
          console.log('caught error', err.stack);
        })
        .then((result) => {
          // `result` is an Object with keys "data" and "resp".

          const data = result.data;
          const l = data.length;
          console.log(`Asked for 40 tweets and got: ${l}`);
          let twts = '';
          if (l > 1) {
            /* eslint-disable */
            for (let i = 1; i < l; i++) {
              // skip first tweet as it is the request for suggestion
              if (Math.random() > 0.72) {
                // randomly pick a subset of their previous tweets
                twts += `${data[i].text} . `;
              }
            }
            if (tweet.user.description) {
              // add the user description for more text matching goodness
              twts += tweet.user.description;
            }
            console.log(twts);

            // now classify them
            clss = classifier.classify(twts);
            //          rowName = rowNames[clss];
            //          rowNum = rowNums[clss];
            console.log(clss);
          } else {
            // zero tweets (might be set to private) - pick something random
            console.log('random selection... (private tweets?)');
            rowNum = Math.floor(Math.random() * 7);
            clss = subjects[rowNum];
            rowName = rowNames[clss];
          }

          const shURL = bookData[clss].url; // shortURLs[btn];
          const title = bookData[clss].title; // shortURLs[btn];
          const btn = 'A1'; // bookData[clss].button;

          // we have several variantions in response to make the Bot seem less Bot-like.
          const resps = {
            0: `@${tweet.user.screen_name} your tweets suggest you might be interested in ${title}. Enter ${btn} on keypad. More: ${shURL}`,
            1: `@${tweet.user.screen_name} based on your tweets, I think you might like ${title}. Press ${btn} on keypad. More: ${shURL}`,
            2: `@${tweet.user.screen_name} we have analysed your tweets and think you are interested in ${title}. Type ${btn} on keypad. More: ${shURL}`,
            3: `@${tweet.user.screen_name} from the look of your tweets you might be interested in ${title}. Enter ${btn} on keypad. More: ${shURL}`,
            4: `@${tweet.user.screen_name} based on your previous tweets, you might be interested in ${title}. Press ${btn} on keypad. More: ${shURL}`,
            5: `@${tweet.user.screen_name} from your previous tweets, you are probably interested in ${title}. Type ${btn} on keypad. More: ${shURL}`,
          };

          const respno = Math.floor(Math.random() * Object.keys(resps).length);
          const resp = resps[respno];

          if (respond) {
            T.post(
              'statuses/update',
              {
                status: resp,
                in_reply_to_status_id: tweetId,
              },
              () => {
                console.log(`REPLIED: ${resp}`);
                console.log(`Length: ${resp.length} [${respno}]`);
              },
            );
          } else {
            console.log(`WOULD HAVE REPLIED: ${resp}`);
          }
        });
    } else {
      console.log(
        `DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`,
      );
    }
  }
  /* Setup Server for Now - otherwise it stays on the BUILDING state */

  const { createServer } = require('http');
  const server = createServer(() => {});

  server.listen(3000);
});
