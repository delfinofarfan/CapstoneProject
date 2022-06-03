const mongoose = require("mongoose");

const filmgradeSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  filmgrade: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Filmgrade = mongoose.model("Filmgrade", filmgradeSchema);

module.exports = Filmgrade;
