import Twit from 'twit';
// import natural from 'natural';
import NaturalSynaptic from 'natural-synaptic';

// require('dotenv').config();

// connect to twitter
const T = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
});

// get ready to do some text classification
const classifier = new NaturalSynaptic();

// MAPS training data
classifier.addDocument(
  'Hand Coloured Map of the settlement at Sydney Cove Port Jackson 1788. Cartographic material. Cartography. Map-making. Orienteering. Map reading. Latitude, longitude, terrain, contours. Navigation. Circumnavigate. Geo-tagging. Compas. North South East West. WOEID. Googlemaps.',
  'Maps',
);

// TRAVEL training data
classifier.addDocument(
  'traveled, traveling; travelled, travelling. Make a journey. driving excursion flying movement ride sailing sightseeing tour trek trip biking cruising drive expedition junket passage  ramble riding seafaring touring trekking voyage voyaging walk wandering wanderlust wayfaring globe-trotting overnight ',
  'Travel',
);

// PORTRAITS traning data
classifier.addDocument(
  'Portrait: a painting, drawing, photograph, or engraving of a person, especially one depicting only the face or head and shoulders. Effigy, still life, watercolour, oil painting, likeness, photograph, miniature, rubbings, locket, lookalike, dead ringer, stand-in. Likeness, statue, silhouette.',
  'Portraits',
);

// CURIOS traning data
classifier.addDocument('Cartier hairpin box belonging to Nellie Melba, 1918. Objects. 1 hairpin box.', 'Curios');
classifier.addDocument(
  'Donor\'s letter of offer (undated, received 1953) states the hairpin box was "presented to me by my friend the late Dame Nellie Melba".',
  'Curios',
);
classifier.addDocument(
  'Inscribed. Jewellery, jewelry, boxes & cases, gold, diamonds, decorative art, treasures, museum, coins, stamps, numismatics, antiques, scrimshaw',
  'Curios',
);

// LOVE traning data
// classifier.addDocument(
//  'Miss Paterson and Miss Taylor reading Valentine’s Day cards, c1875 / American & Australasian Photographic Company.',
//  'Love',
// );
classifier.addDocument('Adult Females, greetings cards, love letters, Valentine’s Day.', 'Love');
classifier.addDocument('Love. romance. sex. gender. Physical attraction. Romantic.', 'Love');

// ANIMALS traning data
classifier.addDocument(
  'Doge LOLcats LOL cats. Dogs, horses, unicorn, pets, animal lover, vegan, PETA, RSPCA, ASPCA, birds, budgie, fish, fish tank, aquarium, squirrel, hamster, mouse, rat, pet store, puppy, kitten, falconry, Attenborough, nature, ferret, turtle, tortoise, lizard, herp, Herpetology, frog, amphibian, zoology, zoo.',
  'Animals',
);

// QUOTES traningdata
classifier.addDocument(
  'Quote: "In books lies the soul of the whole past time / The articulate and audible voice of the past / When the body and material of it has altogether / Vanished like a dream"',
  'Quotes',
);
classifier.addDocument('Quotes, quotable quotes. Quotations, citations', 'Quotes');

// GO!
classifier.train();

// twitter params (from .env file)
const twitterHandle = `@${process.env.TWITTER_HANDLE}`;
const hashTag = process.env.HASHTAG;

// the seven subjects are:
// Curios, Love, Maps, Travel, Portraits, Animals, Quotes
const subjects = {
  0: 'Curios',
  1: 'Love',
  2: 'Maps',
  3: 'Travel',
  4: 'Portraits',
  5: 'Animals',
  6: 'Quotes',
};

// names of the columns in the vending machine:
const columns = {
  0: '1',
  1: '2',
  2: '3',
  3: '4',
  4: '5',
  5: '6',
  6: '7',
  7: '8',
};

// numbers of the rows, as referenced by subject:
const rowNums = {
  Curios: 0,
  Love: 1,
  Maps: 2,
  Travel: 3,
  Portraits: 4,
  Animals: 5,
  Quotes: 6,
};

// names of the rows, as referenced by subject:
const rowNames = {
  Curios: 'A',
  Love: 'B',
  Maps: 'C',
  Travel: 'D',
  Portraits: '1.',
  Animals: '2.',
  Quotes: '3.',
};

// short URL for each item
const shortURLs = {
  A1: 'https://goo.gl/sPxBYS',
  A2: 'https://goo.gl/hgc7Qb',
  A3: 'https://goo.gl/1H9GLo',
  A4: 'https://goo.gl/rj65nz',
  A5: 'https://goo.gl/NACSMH',
  A6: 'https://goo.gl/t9ERsC',
  A7: 'https://goo.gl/seMNNH',
  A8: 'https://goo.gl/3ZmEE3',
  B1: 'https://goo.gl/YwxzKk',
  B2: 'https://goo.gl/ynX6J7',
  B3: 'https://goo.gl/E7mQto',
  B4: 'https://goo.gl/FBovgk',
  B5: 'https://goo.gl/TqPmaf',
  B6: 'https://goo.gl/cD8Amu',
  B7: 'https://goo.gl/W9ptWb',
  B8: 'https://goo.gl/qpJ5HM',
  2.1: 'https://goo.gl/hRNF7Q',
  2.2: 'https://goo.gl/cZ6rT5',
  2.3: 'https://goo.gl/nn5RqE',
  2.4: 'https://goo.gl/ryh4N1',
  2.5: 'https://goo.gl/YDnkwS',
  2.6: 'https://goo.gl/cEpCxy',
  2.7: 'https://goo.gl/ZRvNGN',
  2.8: 'https://goo.gl/9D8HH1',
  3.1: 'https://goo.gl/6ZAH1i',
  3.2: 'https://goo.gl/KdfmoU',
  3.3: 'https://goo.gl/RtJBN2',
  3.4: 'https://goo.gl/E7J1X2',
  3.5: 'https://goo.gl/dM28Hz',
  3.6: 'https://goo.gl/xq6EBe',
  3.7: 'https://goo.gl/ap9gpn',
  3.8: 'https://goo.gl/pKm6vz',
  C1: 'https://goo.gl/oYjNsG',
  C2: 'https://goo.gl/wuBY4a',
  C3: 'https://goo.gl/xrMPfC',
  C4: 'https://goo.gl/iyCgrA',
  C5: 'https://goo.gl/zc8f9P',
  C6: 'https://goo.gl/1uagNa',
  C7: 'https://goo.gl/fFwkF8',
  C8: 'https://goo.gl/BydCoq',
  D1: 'https://goo.gl/Phcv1b',
  D2: 'https://goo.gl/skz3zN',
  D3: 'https://goo.gl/hVp7wM',
  D4: 'https://goo.gl/5p5nVn',
  D5: 'https://goo.gl/sNFjdV',
  D6: 'https://goo.gl/HFXyC4',
  D7: 'https://goo.gl/7pvHvr',
  D8: 'https://goo.gl/rfwvkn',
  1.1: 'https://goo.gl/1TE49e',
  1.2: 'https://goo.gl/yY5uax',
  1.3: 'https://goo.gl/4T33oi',
  1.4: 'https://goo.gl/N5TJ9e',
  1.5: 'https://goo.gl/MX9Wbx',
  1.6: 'https://goo.gl/E4vehc',
  1.7: 'https://goo.gl/ViWEr9',
  1.8: 'https://goo.gl/WMBiRW',
};

let rowName;
let rowNum;
let column;
let clss;

// /////////////////////////////////////////////////////////////////////////

// keep an eye out for people tweeting at us
const stream = T.stream('statuses/filter', {
  track: twitterHandle,
  language: 'en',
});

console.log('--------------------------------------------------');
console.log(`TWITTER_HANDLE: ${twitterHandle}`);
console.log(`HASHTAG: ${hashTag}`);
console.log('--------------------------------------------------');

// set up some connection monitoring
stream.on('connect', () => {
  console.log(`Connection requested....${Date.now()}`);
});
stream.on('disconnect', disconnectMessage => {
  console.log(`_x_x_ disconnect _x_x_ ${disconnectMessage}`);
});
stream.on('connected', () => {
  console.log(`CONNECTED! ${Date.now()}`);
});
stream.on('reconnect', () => {
  console.log(`...re-connected ${Date.now()}`);
});
stream.on('warning', warning => {
  console.log(`### WARNING! ### ${warning}`);
});
stream.on('limit', limitMessage => {
  console.log(`**LIMIT MSG** ${limitMessage}`);
});

// /////////////////////////////////////////////////////////////////////////

// we got one!
stream.on('tweet', tweet => handleTweet(tweet, true));

export function handleTweet(tweet, respond) {
  console.log('--------------------------------------------------');
  console.log(`tweet ${Date.now()}`);

  // check it isn't a re-tweet and does have the correct hash tag
  if (tweet.text.substring(0, 2) !== 'RT' && tweet.text.includes(hashTag)) {
    // log incoming tweet
    console.log(`ACTION: ${tweet.text}`);

    // get the user ID (as string)
    const uid = tweet.user.id_str;

    // now get 20 of that user's tweets and classify them!
    T.get('statuses/user_timeline', { user_id: uid, count: 20 })
      .catch(err => {
        console.log('caught error', err.stack);
      })
      .then(result => {
        // `result` is an Object with keys "data" and "resp".

        const data = result.data;
        const l = data.length;
        console.log(`Asked for 20 tweets and got: ${l}`);
        let twts = '';
        if (l > 1) {
          /* eslint-disable */
          for (let i = 1; i < l; i++) {
            // skip first tweet as it is the request for suggestion
            if (Math.random() > 0.45) {
              // randomly pick about half their previous 20 tweets
              twts += `${data[i].text} . `;
            }
          }
          if (tweet.user.description) {
            // add the user description for more matching goodness
            twts += tweet.user.description;
          }
          console.log(twts);

          // now classify them
          clss = classifier.classify(twts);
          rowName = rowNames[clss];
          rowNum = rowNums[clss];
          console.log(clss);

          // spin the wheeel!
          if (Math.random() > 0.7) {
            rowNum = Math.floor(Math.random() * 7);
            clss = subjects[rowNum];
            rowName = rowNames[clss];
            console.log(`BINGO!!!!! random selection!! ${clss}`);
          }
        } else {
          // zero tweets (might be set to private) - pick something random
          console.log('random selection... (private tweets?)');
          rowNum = Math.floor(Math.random() * 7);
          clss = subjects[rowNum];
          rowName = rowNames[clss];
        }

        // OK do something with the results
        column = Math.floor(Math.random() * 8);
        const btn = rowName + columns[column];

        const shURL = shortURLs[btn];

        const resps = {
          0: `OK @${tweet.user.screen_name} from the look of your tweets you might be interested in ${clss}. Select item ${btn} from the keypad. Read about it: ${shURL}`,
          1: `Hi @${tweet.user.screen_name}, based on your tweets, I think you are interested in ${clss}. Select item ${btn} from the keypad. More info: ${shURL}`,
          2: `Greetings @${tweet.user.screen_name}, we have analysed your tweets and concluded that you are interested in ${clss}. Select item ${btn} from the keypad. Collection link: ${shURL}`,
          3: `Hello @${tweet.user.screen_name}, from the look of your tweets you might be interested in ${clss}. Select item ${btn} from the keypad. Catalogue url: ${shURL}`,
          4: `Hi @${tweet.user.screen_name}, based on your previous tweets, you might be interested in ${clss}. Select item ${btn} from the keypad. Find out more: ${shURL}`,
          5: `Hey @${tweet.user.screen_name}, from your previous tweets, you are probably interested in ${clss}. Select item ${btn} from the keypad. Read more: ${shURL}`,
        };

        const respno = Math.floor(Math.random() * Object.keys(resps).length);
        const resp = resps[respno];

        if (respond) {
          T.post('statuses/update', { status: resp }, () => {
            console.log(`REPLIED: ${resp}`);
          });
        } else {
          console.log(`WOULD HAVE REPLIED: ${resp}`);
        }
      });
  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }
}

/* Setup Server for Now - otherwise it stays on the BUILDING state */

const { createServer } = require('http');
const server = createServer(() => {});

server.listen(3000);
