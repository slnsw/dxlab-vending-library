# DX Lab GraphQL Service

Based on aws-serverless-apollo-demo.

## Getting Started

```
$ npm install
$ npm start # Starts Webpack watch and node-dev
```

## Tests

```
$ npm run test
$ npm run test:watch
```

Based on https://medium.com/entria/testing-a-graphql-server-using-jest-4e00d0e4980e

## Code Linting

Uses ESLint, with AirBnb Javascript config.

## Webpack

https://hackernoon.com/hot-reload-all-the-things-ec0fed8ab0

## Serverless

https://medium.com/a-man-with-no-server/deploying-a-serverless-application-using-webpack-and-babel-to-support-es2015-to-aws-2f61cff8bafb

# aws-serverless-apollo-demo
Demo for AWS Lambda + GraphQL + DynamoDB

# Dependencies
* [apollostack/graphql-server] (https://github.com/apollostack/graphql-server)
* [serverless/serverless] (https://github.com/serverless/serverless)
* [awslabs/aws-serverless-express] (https://github.com/awslabs/aws-serverless-express)

# Run Locally
1. npm install
2. npm run local
3. open at http://localhost:3000/test

# Open Remotely
https://s1uxidaaib.execute-api.ap-northeast-1.amazonaws.com/dev/graphiql
