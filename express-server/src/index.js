import app from './app.js';

const PORT = 4500;

const start = async () => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
};

start();