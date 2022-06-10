const mongoose = require("mongoose");

const filmgradeSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  filmgrade: {
    type: Number,
    required: true
  }
});

const Filmgrade = mongoose.model("Filmgrade", filmgradeSchema);

module.exports = Filmgrade;
