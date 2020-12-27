const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const middleware = require('./middlewares/middleware');
const control = require('./routes/control');
const connectDB = require('./db');
require('colors');


dotenv.config();

const app = express();
connectDB();
app.use(express.json());
app.use(morgan('common'));
app.use(helmet())
app.use(cors());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello every body. welcome to my website by ilfat izzat pratama 🚀🚀🚀🚀'
  })
});
app.use('/api/v1/control/gpio/', control)
app.use(middleware.notFoundPages);
app.use(middleware.errorHandler);

const PORT = process.env.PORT || 4949;

app.listen(PORT, () => console.log(`Application running on ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgCyan.bold));