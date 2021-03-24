const mongoose = require('mongoose');
const { Schema } = mongoose;

const wineSchema = new Schema({
  title: { type: String },
  country: { type: String },
  year: { type: Number },
  shelf: { type: Number },
  row: { type: Number},
  img: { type: String },
  rating: {type: String },
  vivinoUrl: {type: String },
})

const WineDataBase = mongoose.model("wines", wineSchema);

module.exports = WineDataBase;