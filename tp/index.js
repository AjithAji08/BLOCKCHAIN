const { TransactionProcessor } = require('sawtooth-sdk/processor');
const ArdsHandler = require('./handler');

const transactionProcessor = new TransactionProcessor('tcp://localhost:4004');

transactionProcessor.addHandler(new ArdsHandler());
transactionProcessor.start();

console.log(`Connecting to Sawtooth validator at Validator 0`);
