import Twit from 'twit';

import { handleTweet } from './app';

require('dotenv').config();

const initTwit = ({ testing = false } = {}) => {
  return new Promise((resolve) => {
    const T = new Twit({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token: process.env.ACCESS_TOKEN,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET,
      timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    });

    const twitterHandle = `@${process.env.TWITTER_HANDLE}`;
    const hashTag = process.env.HASHTAG;

    // keep an eye out for people tweeting at us
    const stream = T.stream('statuses/filter', { track: twitterHandle });

    console.log('--------------------------------------------------');
    console.log(`TWITTER_HANDLE: ${twitterHandle}`);
    console.log(`HASHTAG: ${hashTag}`);
    console.log('--------------------------------------------------');

    // set up some connection monitoring
    stream.on('connect', () => {
      console.log(`Connection requested....${Date.now()}`);

      resolve(T);
    });
    stream.on('error', () => {
      console.log(`Error....${Date.now()}`);
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
    if (!testing) {
      stream.on('tweet', (tweet) => handleTweet(T, tweet, hashTag, true));
    }
  });

  // stream.on('tweet', (tweet) => callback(T, tweet));
};

export default initTwit;
