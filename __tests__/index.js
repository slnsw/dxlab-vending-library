// import Twit from 'twit';

import initTwit from '../src/initTwit';

import { handleTweet } from '../src/app';

const users = [];

users[999] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '902085743207636995',
    screen_name: 'dxlt0',
    description:
      'All things digital,I run an innovation lab in cultural heritage.Views mine.',
  },
};

users[0] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '20426239',
    screen_name: 'paulabray',
    description:
      'All things digital, (strategy, development, innovation and experimentation)-I run an innovation lab in cultural heritage.Views mine.',
  },
};

users[1] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '37849905',
    screen_name: 'unkleho',
    description: 'DX Lab Technical Lead at the State Library of NSW',
  },
};

users[2] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '15330960',
    screen_name: 'lukesnarl',
    description: '',
  },
};

users[3] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '15901309',
    screen_name: 'vaguelym',
    description: '',
  },
};

users[4] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '18965916',
    screen_name: 'hughriminton',
    description: '',
  },
};

users[5] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '45998106',
    screen_name: 'toddhillsley',
    description: '',
  },
};

users[6] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '117777690',
    screen_name: 'jeremycorbyn',
    description: '',
  },
};

users[7] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '386814685',
    screen_name: 'mikejonesphd',
    description: '',
  },
};

users[8] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '2896099018',
    screen_name: 'awwwwcats',
    description: '',
  },
};

users[9] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '14334974',
    screen_name: 'sebchan',
    description: '',
  },
};

users[10] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '2225408035',
    screen_name: 'erinsaltman',
    description: '',
  },
};

users[11] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '1427611926',
    screen_name: 'jkrasenberg',
    description: '',
  },
};

users[12] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '41090520',
    screen_name: 'robert_henke',
    description: '',
  },
};

users[13] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '20950479',
    screen_name: 'tony_surgeon',
    description: '',
  },
};

users[14] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '44170913',
    screen_name: 'david_ritter',
    description: '',
  },
};

users[15] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '20160621',
    screen_name: 'brettbiroartist',
    description: '',
  },
};

users[16] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '741053695',
    screen_name: 'pamayres',
    description: '',
  },
};

users[17] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '78905469',
    screen_name: 'chrisgpackham',
    description: '',
  },
};

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

describe('Set up Twitter connection and classify content', async () => {
  const twit = await initTwit({ testing: true });

  // await handleTweet(twit, users[0], '#dxtest');

  await handleTweet(twit, users[999], '#dxtest', true);

  // await handleTweet(twit, users[1], '#dxtest');
  // await handleTweet(twit, users[2], '#dxtest');
  // await handleTweet(twit, users[3], '#dxtest');
  // await handleTweet(twit, users[4], '#dxtest');
  // await handleTweet(twit, users[5], '#dxtest');
  // await handleTweet(twit, users[6], '#dxtest');
  // await handleTweet(twit, users[7], '#dxtest');
  // await handleTweet(twit, users[8], '#dxtest');
  // await handleTweet(twit, users[9], '#dxtest');
  // await handleTweet(twit, users[10], '#dxtest');
  // await handleTweet(twit, users[10], '#dxtest');
  // await handleTweet(twit, users[11], '#dxtest');
  // await handleTweet(twit, users[12], '#dxtest');
  // await handleTweet(twit, users[13], '#dxtest');
  // await handleTweet(twit, users[14], '#dxtest');
  // await handleTweet(twit, users[15], '#dxtest');
  // await handleTweet(twit, users[16], '#dxtest');
  // await handleTweet(twit, users[17], '#dxtest');
});
