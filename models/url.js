const { Schema, model } = require("mongoose");

const urlSchema = new Schema({
  short_url: {
    type: String,
    required: true,
    unique: true,
  },
  original_url: {
    type: String,
    required: true,
  }
})

const Url = model('URL', urlSchema)

module.exports = Url