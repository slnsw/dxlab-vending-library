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

        // console.log('Training tweets:', trainingTweets);

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

      const shURL = bookData[result].url; // shortURLs[btn];
      const title = bookData[result].title; // shortURLs[btn];
      const btn = bookData[result].button;

      // we have several variations in response to make the Bot seem less Bot-like.
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

      console.log(resp);
      console.log(tweet.user.screen_name);
      console.log(title);

      // return result;
      if (respond) {
        const image = bookData[result].image;

        const imageData = await axios.get(image, {
          responseType: 'arraybuffer',
        });
        const b64content = Buffer.from(imageData.data).toString('base64');

        // console.log(b64content);

        T.post(
          'media/upload',
          { media_data: b64content },
          (err, imgData, response) => {
            if (err) {
              console.log('ERROR:');
              console.log(err);
            } else {
              // console.log('Image uploaded!');
              // console.log('Now tweeting it...');

              T.post(
                'statuses/update',
                {
                  status: resp,
                  in_reply_to_status_id: tweetId,
                  media_ids: new Array(imgData.media_id_string),
                },
                (err2, data2, response2) => {
                  if (err2) {
                    console.log('ERROR:');
                    console.log(err2);
                  } else {
                    console.log(`REPLIED: ${resp}`);
                    console.log(`Length: ${resp.length} [${respno}]`);
                  }
                },
              );
            }
          },
        );

        // T.post(
        //   'statuses/update',
        //   {
        //     status: resp,
        //     in_reply_to_status_id: tweetId,
        //   },
        //   () => {
        //     console.log(`REPLIED: ${resp}`);
        //     console.log(`Length: ${resp.length} [${respno}]`);
        //   },
        // );
      } else {
        console.log(`WOULD HAVE REPLIED: ${resp}`);
      }
      // });
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }
};
