const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const connectDB =function() {
    try{
        mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected')
    } catch(err){
        console.log('Failed to connect mongodb',err);
    }

}

module.exports = connectDB;