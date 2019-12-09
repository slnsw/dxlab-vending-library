import http from 'http';
import initTwit from './initTwit';

const init = async () => {
  await initTwit();

  const { createServer } = http;
  const server = createServer(() => {});

  server.listen(3000);
};
init();
