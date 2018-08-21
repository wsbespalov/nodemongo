var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StatsSchema = new Schema({
  number: {
    type: Number,
    min: [0, 'Too small number!'],
    required: [true, 'Where is the stats number?'],
  },
  name: {
    type: String,
    required: [true, 'What about stats name?'],
  },
  totalElements: {
    type: Number,
    min: [-1, 'Too small counter value!'],
    required: [true, 'What about counter?'],
  },
  newElements: {
    type: Number,
    min: [-1, 'Too small counter value!'],
    required: [true, 'What about counter?'],
  },
  modifiedElements: {
    type: Number,
    min: [-1, 'Too small counter value!'],
    required: [true, 'What about counter?'],
  },
});

module.exports = mongoose.model('DatabaseStats', StatsSchema, 'DatabaseStats');
