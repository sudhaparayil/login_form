const mongoose = require("mongoose");
const config = require("../config/database");
// const bcrypt = require("bcryptjs");
var Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        require : true,
    },
    password : {
        type : String,
        require : true,
    },
    email : {
        type : String,
        require : true,
    },
    googleId:{
        type:String,
    },
    file_name : {
        type : String,
        require : true,
    },
    photo : { 
        data: Buffer,
        contentType: String
    },
    thumbnail: {type:String}
    
  
});

const User = module.exports = mongoose.model('User', UserSchema, 'user');