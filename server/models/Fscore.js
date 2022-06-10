const mongoose = require("mongoose");

const fscoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  fscore: {
    type: Number,
    required: true
  }
});

const Fscore = mongoose.model("Fscore", fscoreSchema);

module.exports = Fscore;
