const mongoose = require("mongoose");

const metricSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  height: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  weight: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  age: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  classification: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  fourtytime: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  vertical: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  },
  shuttle: {
    type: String,
    required: false,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Metric = mongoose.model("Metric", metricSchema);

module.exports = Metric;
