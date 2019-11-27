// import natural from 'natural';
const NaturalSynaptic = require('natural-synaptic');

const bookData = require('./bookData.js');

require('dotenv').config();

// console.log(bookData.length);

// get ready to do some text classification
const classifier = new NaturalSynaptic();

const neuralNetFilename = 'neuralNet.json';

// train the thing
for (let i = 0; i < bookData.length; i++) {
  console.log(`adding dataset ${i}`);
  classifier.addDocument(bookData[i].text, i);
}

console.log('beginning training...');

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
