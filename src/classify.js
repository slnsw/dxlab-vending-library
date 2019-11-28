const Natural = require('natural');
const bookData = require('./bookData');

const classify = (content) => {
  const classifier = new Natural.BayesClassifier();

  bookData.forEach((book, i) => {
    // console.log(`adding dataset ${i}`);
    classifier.addDocument(book.text.slice(0, 140), i);
  });

  classifier.train();

  const index = classifier.classify(content);

  return index;

  // return new Promise((resolve, reject) => {
  //   Natural.BayesClassifier.load('neuralNet.json', null, (err, classifier) => {
  //     if (err) {
  //       reject();
  //     }

  //     const index = classifier.classify(content);

  //     resolve(index);
  //   });
  // });
};

module.exports = classify;
