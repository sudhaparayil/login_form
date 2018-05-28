const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.Server(app);
const path = require("path");
const admin = require("./routes/admin");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/database");
mongoose.connect(config.database);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected', () => {
    console.log("database connected");
});
mongoose.connection.on('error', (err) => {
    console.log("database Error" + err);
});
app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use('/admin', admin);
app.get('/', (req, res) => {
    res.send("Invalid end point");
});
server.listen(port, () => {
    console.log("Server Started On Port " + port);
});