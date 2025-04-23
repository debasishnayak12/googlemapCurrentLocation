const express = require('express');
const route = require('./routes/route');
const connectDB = require('./config/db');
const http = require('http');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());
app.use("/api/",route);
connectDB();
const server = http.createServer(app);
server.listen(port,()=>{
    console.log('Server is running on port',port);
})


