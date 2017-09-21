import Twit from 'twit';

import { handleTweet } from '../src/app.js';

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

it('should post a tweet with suggested subject', () => {
  const tweet = {
    text: '@dxlabtest #suggest',
    user: {
      id_str: "20426239",
      screen_name: "paulabray",
      description: "All things digital, (strategy, development, innovation and experimentation)-I run an innovation lab in cultural heritage.Views mine.",
    }
  }
  handleTweet(tweet,false); // 2nd parameter is whether to actually send responses (true/false)
});
