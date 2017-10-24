# DX Lab Vending Library

Twitter bot.

## Introduction

The Vending Library project involves two parts. The first is a physical vending machine sourced from eBay and filled with a curated selection of reproductions of items from the State Library's collection. The second is a Node.js based TwitterBot which is designed to help you choose which of the 56 items you should obtain from the Vending Library.

The curators chose seven themes to inspire which collection items they would select. These were:
- Curios
- Love
- Maps
- Travel
- Portraits
- Animals
- Quotes 

In order to suggest an item, the TwitterBot tries to classify you as interested in one of those seven themes. 

We used the [Twit](https://www.npmjs.com/package/twit) package to simplify interaction with the Twitter API and we used [NaturalSynaptic](https://www.npmjs.com/package/natural-synaptic) as the NLP text classifier.

It listens to the Twitter firehose for tweets sent to its `@VendingLibrary` handle that contain the hashtag `#suggest`. At that point it then ingests the last 40 of your tweets, assembles a random selection of about three quarters of those into a text string, adds your user description and then feeds that to the text classifier which returns a theme.

At this point it is necessary to describe the vending machine a bit further. It contains 56 coils into each of which about 20 items can be slotted. The coil turns 360 degrees and the front-most item drops out for the lucky user. These 56 coils are arranged into seven rows of eight. So each row is dedicated to the items of one theme. Each theme has eight unique items.

One the Bot has determined your theme it knows which row to suggest, and to determine which of the eight items in that row it simply picks one at random. Then tweets back to you saying something along the lines of `From the look of your tweets you might be interested in [theme]. Enter [code] on the keypad. [shortURL]`

Each of the printed collection items has a short URL on it which links back to the item's entry in the Library's catalogue. This allows people to find out more about their item. We thought it might be useful if the tweet you got back from the Bot also included that short URL, so it does. Less typing with one's thumbs. Of course this has the side effect that the items in each row must be placed in the correct order when the Vending Library is being stocked.


## Getting Started

```
# Make sure you are running Node 6.10!!! Or else bad things will happen.
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

## Tests

```
$ npm run test
$ npm run test:watch
```

## Deployment

Make sure you have `now` installed globally (`npm install now -g`), then run:
```
# Remove old instance first
$ now scale dxlab-vending-library-YYYYYYYY 0 # Scale down app first, rm may not remove straight away
$ now rm dxlab-vending-library-YYYYYYYY # Remove old app
$ now # Deploy new app
$ now scale dxlab-vending-library-XXXXXXXX 1 # Prevents instance from being FROZEN
```
