const mongoose = require("mongoose");
const colors = require("colors");

const url = process.env.MONGO_URI;
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://jyotikm:GIbplTgyN5DzgOYp@cluster0.roayuhz.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
