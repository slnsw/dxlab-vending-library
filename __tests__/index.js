import Twit from 'twit';

import { handleTweet } from '../src/app.js';

/*
 * Test tweet user
 * -------------------------------------------------------------------------- */

it('should post a tweet with suggested subject', () => {
  const tweet = {
    text: '@dxlabtest #dxtest',
    user: {
      id_str: "17817926",
      screen_name: "RomanceWriter",
      description: "Witty. Charming. Smiles a lot. Writes romantic suspense.",
    }
  }
  handleTweet(tweet,false); // 2nd parameter is whether to actually send responses (true/false)
});
