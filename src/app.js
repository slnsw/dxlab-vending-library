import axios from 'axios';
import classify from '../src/classify';

import bookData from './bookData';

export const handleTweet = async (T, tweet, hashTag, respond = false) => {
  console.log('--------------------------------------------------');
  console.log(`tweet ${Date.now()}`);

  // let clss;

  // check it isn't a re-tweet and does have the correct hash tag
  if (tweet.text.substring(0, 2) !== 'RT' && tweet.text.includes(hashTag)) {
    // log incoming tweet
    console.log(`ACTION: ${tweet.text}`);

    // get the user ID (as string)
    const userId = tweet.user.id_str; // for testing: Math.floor(Math.random() * 100000000) + 10000000;
    console.log('user_id', userId);

    const tweetId = tweet.id_str;
    // console.log(`Tweet ID: ${tweetId}`);

    try {
      const { data } = await T.get('statuses/user_timeline', {
        user_id: userId,
        count: 40,
      });

      const l = data.length;
      console.log(`Asked for 40 tweets and got: ${l}`);

      let trainingTweets = '';
      let result = null;

      if (l > 1) {
        data.forEach((d) => {
          if (Math.random() > 0.72) {
            // Randomly pick a subset of their previous tweets
            trainingTweets += `${d.text} `;
          }
        });

        if (tweet.user.description) {
          // add the user description for more text matching goodness
          trainingTweets += tweet.user.description;
        }

        // now classify them
        result = await classify(trainingTweets);
      } else {
        // zero tweets (might be set to private) - pick something random
        console.log('random selection... (private tweets)');
        result = Math.floor(Math.random() * bookData.length);
      }
      if (Math.random() > 0.66) {
        // one third of the time give a random answer
        console.log('answer randomised!');
        result = Math.floor(Math.random() * bookData.length);
      }
      const book = bookData[result];
      const { url, title, button } = book;

      // we have several variations in response to make the Bot seem less Bot-like.
      const responses = {
        0: `@${tweet.user.screen_name} your tweets suggest you might be interested in ${title}. Enter ${button} on keypad. More: ${url}`,
        1: `@${tweet.user.screen_name} based on your tweets, I think you might like ${title}. Press ${button} on keypad. More: ${url}`,
        2: `@${tweet.user.screen_name} we have analysed your tweets and think you are interested in ${title}. Type ${button} on keypad. More: ${url}`,
        3: `@${tweet.user.screen_name} from the look of your tweets you might be interested in ${title}. Enter ${button} on keypad. More: ${url}`,
        4: `@${tweet.user.screen_name} based on your previous tweets, you might be interested in ${title}. Press ${button} on keypad. More: ${url}`,
        5: `@${tweet.user.screen_name} from your previous tweets, you are probably interested in ${title}. Type ${button} on keypad. More: ${url}`,
      };

      const responseNum = Math.floor(
        Math.random() * Object.keys(responses).length,
      );
      const response = responses[responseNum];

      // return result;
      if (respond) {
        const image = bookData[result].image;

        const imageData = await axios.get(image, {
          responseType: 'arraybuffer',
        });
        const b64content = Buffer.from(imageData.data).toString('base64');

        // console.log(b64content);

        T.post('media/upload', { media_data: b64content }, (err, imgData) => {
          if (err) {
            console.log('ERROR:');
            console.log(err);
          } else {
            T.post(
              'statuses/update',
              {
                status: response,
                in_reply_to_status_id: tweetId,
                media_ids: new Array(imgData.media_id_string),
              },
              (updateError) => {
                if (updateError) {
                  console.log('ERROR:');
                  console.log(updateError);
                } else {
                  console.log(`REPLIED: ${response}`);
                  console.log(`Length: ${response.length} [${responseNum}]`);
                }
              },
            );
          }
        });
      } else {
        console.log(`WOULD HAVE REPLIED: ${response}`);
      }
      // });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }

  // /* Setup Server for Now - otherwise it stays on the BUILDING state */
};
