const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const server = http.Server(app);
const path = require("path");
const cookieSession = require('cookie-session');
const admin = require("./routes/admin");
const authRoutes = require('./routes/auth-routes');
const bodyParser = require("body-parser");
const passport = require('passport');
const cors = require('cors');
const mongoose = require("mongoose");
const config = require("./config/database");
const passportSetup = require('./config/passport-setup');
const keys = require('./config/key');
// set up session cookies
app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(config.database);
mongoose.Promise = global.Promise;
mongoose.connection.on('connected',()=>{
    console.log("database connected");
});
mongoose.connection.on('error',(err)=>{
    console.log("database Error" + err);
});
app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));
app.use(express.static(path.join(__dirname,"public")));
app.use('/admin',admin);
app.use('/auth', authRoutes);
app.use('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
});
app.get('/', (req,res)=>{
    res.send("Invalid end point");
});
server.listen(port,() => {
    console.log("Server Started On Port " + port);
});