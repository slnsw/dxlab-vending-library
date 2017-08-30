import Twit from 'twit';

import { handleTweet } from '../src/app.js';

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

it('should post a tweet with suggested subject', () => {
  const tweet = {
    text: '@dxlabtest #dxtest',
    user: {
      id_str: "15330960",
      screen_name: "LukeSnarl",
      description: "me still go on..",
    }
  }
  handleTweet(tweet,false); // 2nd parameter is whether to actually send responses (true/false)
});
