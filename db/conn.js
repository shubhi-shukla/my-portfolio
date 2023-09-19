const mongoose = require('mongoose');

const DB = process.env.DATABASE;
const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DATABASE);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }