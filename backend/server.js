const express = require('express');
require('dotenv').config();
const { initializeDatabase } = require('./config/db')

const app = express();


initializeDatabase();





app.listen(process.env.PORT,()=>{
    console.log(`listening to port ${process.env.PORT}`);
});