require('dotenv').config();

const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  return mongoose.connect(process.env.MONGODB_URI)
}

module.exports = connectDB