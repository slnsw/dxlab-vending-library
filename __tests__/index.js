// import Twit from 'twit';

import initTwit from '../src/initTwit';

import { handleTweet } from '../src/app2';

import bookData from '../src/bookData';

const users = [];

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

users[18] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '73864214',
    screen_name: 'd_a_calf',
    description: '',
  },
};

users[19] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '27407226',
    screen_name: 'timshiel',
    description: '',
  },
};

users[20] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '14555983',
    screen_name: 'nirmala_shome',
    description: '',
  },
};

users[21] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '1587910915',
    screen_name: 'laetitianguyen',
    description: '',
  },
};

users[22] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '4757317174',
    screen_name: 'helen_and_erson',
    description: '',
  },
};

users[23] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '707502002339581952',
    screen_name: 'bizzlesmyking',
    description: '',
  },
};

users[24] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '1039431478088675328',
    screen_name: 'confusedvarmint',
    description: '',
  },
};

users[25] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '32279791',
    screen_name: 'giting',
    description: '',
  },
};

users[26] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '1010490424216047617',
    screen_name: 'thatcrazyjoey',
    description: '',
  },
};

users[27] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '25982348',
    screen_name: 'nifky',
    description: '',
  },
};

users[28] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '111787053',
    screen_name: 'tombrianson',
    description: '',
  },
};

users[29] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '882187636487503873',
    screen_name: 'rwbymaniac',
    description: '',
  },
};

users[30] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '868622180757655552',
    screen_name: 'jerryli41729272',
    description: '',
  },
};

users[31] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '1145991455254577152',
    screen_name: 'claudiamcdonnel',
    description: '',
  },
};

users[32] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '16430004',
    screen_name: 'meeena',
    description: '',
  },
};

users[33] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '274512437',
    screen_name: 'surferjoe66',
    description: '',
  },
};

users[34] = {
  text: '@dxlabtest #dxtest',
  user: {
    id_str: '15677011',
    screen_name: 'sammylionheart',
    description: '',
  },
};

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

describe('Set up Twitter connection and classify content', async () => {
  const twit = await initTwit();
  let x = 0;
  const stats = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
  ];

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[34], '#dxtest');
  // stats[x] += 1;

  // x = await handleTweet(twit, users[0], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[1], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[2], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[3], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[4], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[5], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[6], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[7], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[8], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[9], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[10], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[11], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[12], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[13], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[14], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[15], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[16], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[17], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[18], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[19], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[20], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[21], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[22], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[23], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[24], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[25], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[26], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[27], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[28], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[29], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[30], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[31], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[32], '#dxtest');
  // stats[x] += 1;
  // x = await handleTweet(twit, users[33], '#dxtest');
  // stats[x] += 1;

  const forLoop = async (_) => {
    for (let index = 0; index < 880; index++) {
      console.log('--------------------');
      console.log(`Count: ${index}`);
      x = await handleTweet(twit, users[34], '#dxtest');
      if (x) {
        stats[x] += 1;
      }
    }
    let tot = 0;
    for (let i = 0; i < 56; i++) {
      console.log(`${i}:${stats[i]}`); //  ${bookData[i].text.length}
      tot += stats[i];
    }
    console.log('', `Total: ${tot} classifications`);
  };
  forLoop();
});
