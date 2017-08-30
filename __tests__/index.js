import Twit from 'twit';

import { handleTweet } from '../src/app.js';

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

it('should post a tweet with suggested subject', () => {
  const tweet = {
    text: '@dxlabtest #dxtest',
    user: {
      id_str: "14334974",
      screen_name: "Test",
      description: "Test descriptions",
    }
  }
  handleTweet(tweet);
});
