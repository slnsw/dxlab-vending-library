# DX Lab Vending Library

Twitter bot.

## Getting Started

```
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
```

## Tests

```
$ npm run test
$ npm run test:watch
```

## Deployment

Make sure you have `now` installed globally (`npm install now -g`), then run:
```
$ now
$ now scale dxlab-vending-library-XXXXXXXX 1 # Prevents instance from being FROZEN
# Remove old instance
$ now rm dxlab-vending-library-YYYYYYYY
```
