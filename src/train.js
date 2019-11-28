// NOTE: Not used right now (kaho)

require('dotenv').config();

const Natural = require('natural');

const classifier = new Natural.BayesClassifier();

const bookData = require('./bookData.js');

const neuralNetFilename = 'neuralNet.json';

bookData.forEach((book, i) => {
  console.log(`adding dataset ${i}`);
  classifier.addDocument(book.text, i);
});

console.log('beginning training...');

classifier.events.on('trainedWithDocument', (obj) => {
  console.log(obj);
});

// GO!
classifier.train();

console.log('training complete, Saving JSON...');

classifier.save(neuralNetFilename, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('complete.');
  }
});
