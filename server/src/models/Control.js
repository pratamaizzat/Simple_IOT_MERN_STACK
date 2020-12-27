const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const falseBoolean = {
  type: Boolean,
  default: false
}

const controlSchema = new Schema({
  gpio1: falseBoolean,
  gpio2: falseBoolean,
  gpio3: falseBoolean,
  gpio4: falseBoolean,
  gpio5: falseBoolean,
  gpio6: falseBoolean,
  gpio7: falseBoolean,
  gpio8: falseBoolean
}, {
  timestamps: true
});

module.exports = Control = mongoose.model('Control', controlSchema);