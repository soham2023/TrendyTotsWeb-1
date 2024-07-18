const express = require('express');
const app = express();
const connectToDatabase = require('./configs/dbConn');
connectToDatabase();
require('dotenv').config();


//routes
/*
const miscellaneousRoutes = require('./routes/miscellaneous.routes');
const paymentRoutes = require('./routes/payment.routes');
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/user.routes');
*/

module.exports =app;