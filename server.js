const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
// const socketIo = require("socket.io");
const server = http.Server(app);
// const io = socketIo(server);
const path = require("path");
// const superadmin = require("./routes/superadmin")(io);
// const admin = require("./routes/admin");
// const user = require("./routes/user")(io);
const bodyParser = require("body-parser");
// var session = require('express-session');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/database");

mongoose.connect(config.database);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected',()=>{
    console.log("database connected");
});
mongoose.connection.on('error',(err)=>{
    console.log("database Error" + err);
});
// const config = require("./config/config");
app.use(cors());
app.use(bodyParser.json({limit:'50mb'}));
// app.use(express.static(path.join(__dirname, "public")));
// app.use('/superadmin', superadmin);
// app.use('/admin', admin);
// app.use('/user', user);
// app.use('*', (req, res) => {
    // res.sendFile(path.join(__dirname, 'public/index.html'));
// });
app.get('/', (req, res) => {
    res.send("Invalid end point");
});
server.listen(port,() => {
    console.log("Server Started On Port " + port);
});