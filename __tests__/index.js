// import Twit from 'twit';

import initTwit from '../src/initTwit';

import { handleTweet } from '../src/app2';

const paulaTweet = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '20426239',
    screen_name: 'paulabray',
    description:
      'All things digital, (strategy, development, innovation and experimentation)-I run an innovation lab in cultural heritage.Views mine.',
  },
};

const kahoTweet = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '37849905',
    screen_name: 'unkleho',
    description: 'DX Lab Technical Lead at the State Library of NSW',
  },
};

const lukeTweet = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '15330960',
    screen_name: 'lukesnarl',
    description: '',
  },
};

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

describe('Set up Twitter connection and classify content', async () => {
  const twit = await initTwit();

  await handleTweet(twit, paulaTweet, '#dxtest');
  await handleTweet(twit, kahoTweet, '#dxtest');
  await handleTweet(twit, lukeTweet, '#dxtest');
});
