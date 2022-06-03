const mongoose = require("mongoose");

const fscoreSchema = new mongoose.Schema({
  player: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  fscore: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  }
});

const Fscore = mongoose.model("Fscore", fscoreSchema);

module.exports = Fscore;
