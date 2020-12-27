const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DATABASE_HOST, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(`Database connected on ${conn.connection.host} MongoDB`.bold.yellow);
  } catch (err) {
    console.error(`Error: ${err.message}`.bgRed.bold);

    process.exit(1);
  }
}

module.exports = connectDB;