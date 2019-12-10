# DX Lab Vending Library

A Twitter bot. (New version for 'Off The Shelf')

## Introduction

The Vending Library project involves two parts. The first is a physical vending machine sourced from eBay and filled with a curated selection of reproductions of items from the State Library's collection. The second is a Node.js based TwitterBot which is designed to help you choose which of the 56 items you should obtain from the Vending Library. This bot has now (Dec 2019) been updated to suggest collection items which are featured in the Off The Shelf in-gallery experience.

Previously there were seven themes and the TwitterBot tried to classify you as interested in one of those seven themes. Now however the bot has been trained with 56 items (books) using the text of their catalogue entries (title, author, publisher, subjects and more).

We used the [Twit](https://www.npmjs.com/package/twit) package to simplify interaction with the Twitter API and [Natural](https://www.npmjs.com/package/natural) as the NLP text classifier - NB previously we used [NaturalSynaptic](https://www.npmjs.com/package/natural-synaptic).

The bot listens to the Twitter firehose for tweets sent to its `@VendingLibrary` handle that contain the hashtag `#suggest`. At that point it then ingests the last 40 tweets from the user making the request (assuming their tweets aren't set to 'private'), assembles a random selection of about three quarters of those into a text string, adds the user description and then feeds that to the text classifier which returns a match to one of the 56 items.

Once the Bot has suggested and item it then tweets back to the user saying something along the lines of `From the look of your tweets you might be interested in [item]. Enter [code] on the keypad. [shortURL]`

In this new version the items are all books chosen for their interesting-looking covers, and so we thought it was a good idea to include the image of the cover in the tweet. So the bot now uploads the image via Twit before constructing the rest of the tweet.

Each of the printed collection items has a short URL on it which links back to the item's entry in the Library's catalogue. This allows people to find out more about their item. We thought it might be useful if the tweet you got back from the Bot also included that short URL, so it does. Less typing with one's thumbs. Of course this has the side effect that the items in each row must be placed in the correct order when the Vending Library is being stocked.

## Getting Started

```
# We are using Node v10.16.3 ~~Make sure you are running Node 6.10!!! Or else bad things will happen.~~
$ npm install
$ Set up .env file (see below)
$ npm run dev # Starts Webpack watch and node-dev
```

### Environment Variables

Create a file called `.env`:

```
CONSUMER_KEY=XXXXXXXXXXX
CONSUMER_SECRET=XXXXXXXXXXXXXXXXXXX
ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXX
ACCESS_TOKEN_SECRET=XXXXXXXXXXXXXXXXXXXXXX
TWITTER_HANDLE=XXXXXXXX # Don't add @ symbol
HASHTAG=#XXXXXXX
```

## Tests and testing

```
$ npm run test
$ npm run test:watch
```

There are two Twitter accounts for testing both local and deployed code without drawing attention to the production account or hashtag.
`@dxlt0` is the test 'user' that sends a request to the bot. `@dxlabtest` is the test bot account.
`@dxlt0` has a history of tweets copied from various real accounts and should tweet to `@dxlabtest` with the hashtag `#dxtest` and expect a result from `@dxlabtest` within a few seconds. Credentials for these accounts are in 1Password.

## Deployment

Make sure you have `now` installed globally (`npm install now -g`), then run:

```
# Remove old instance first
$ now scale dxlab-vending-library-YYYYYYYY 0 # Scale down app first, rm may not remove straight away
$ now rm dxlab-vending-library-YYYYYYYY # Remove old app
$ now # Deploy new app
$ now scale dxlab-vending-library-XXXXXXXX sfo 1 # Prevents instance from being FROZEN and makes sure only one is running (in SFO data centre)
```
