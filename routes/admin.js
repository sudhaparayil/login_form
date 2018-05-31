const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/database');
const User = require("../model/user");

//-----------image b64--------------------------------------------------
function decodeBase64Image(dataString) {
    // console.log(dataString);
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    //   console.log(dataString);
    var response = {};

    if (matches.length !== 3) {
        return new Error('Invalid input string');
    }

    response.type = matches[1];
    ext = matches[1].split("/");
    response.ext = ext[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}
//-----------image b64------------------------------------------------------
//-----------register----------------------------------------------------------
router.post('/getregister', function (req, res) {
    // console.log(req.body)
    var photoName = '';
    if (req.body.photoSrc != '') {
        ext = ['gif', 'png', 'jpg', 'jpeg']
        var base64 = decodeBase64Image(req.body.photoSrc);

        // if (!isErr && ext.indexOf(base64.ext.toLowerCase()) < 0) {
        //     console.log("Failed, Invalid photo");

        // }
        // console.log(base64.type);
        // console.log(base64.ext);
        photoName = new String(new Date().getTime()) + '_' + (Math.floor(100000 + Math.random() * 900000) + '.' + base64.ext);
        var newUser = new User();
        newUser.name = req.body.name;
        newUser.password = req.body.psw;
        newUser.email = req.body.email;
        newUser.googleId='23jgdsg';
        var buf = new Buffer(base64.data, 'base64');
        newUser.file_name = photoName;
        newUser.photo.data = buf;
        newUser.photo.contentType = base64.type;
        newUser.save(function (err, inserted) {
            if (err) {
                console.log("Error " + err);
            } else {
                console.log('Saved successfully');
                return res.json({value:true,data:inserted});
            }
        })
    }
})
//-----------register----------------------------------------------------------
//-----------get photo----------------------------------------------------------
router.get('/getphoto/:id', function (req, res, next) {
    User.findOne({ file_name: req.params.id }, function (err, img) {
        if (err) return next(err);
        // console.log(img);
        res.set("Content-Type", img.photo.contentType);
        //   res.contentType(img.logo.contentType);
        res.send(img.photo.data);
    });
});
//-----------get photo----------------------------------------------------------
//-----------add user----------------------------------------------------------
        router.post('/adduser', function (req, res) {
            console.log("SD")
            var newUser = new User();
            newUser.name = "name1";
            newUser.password = "asd1123";
            newUser.email = "asd1@gmail.com";
            newUser.save(function (err, inserted) {
                if (err) {
                    console.log("Error " + err);
                } else {
                    isSuccess = true
                    errMsg = 'Saved successfully';
                    return res.json(inserted);
                }
            });
        });
//-----------add user----------------------------------------------------------
//-----------all user----------------------------------------------------------
        router.get('/alluser', (req, res, next) => {
            User.findOne({}).exec(function (err, user) {
                if (err) throw err;
                return res.json(user);
            })
        });
//-----------all user----------------------------------------------------------
//-----------single user----------------------------------------------------------
        router.get('/oneuser/:id', (req, res, next) => {
            console.log(req.params.id)
            User.findById({ _id:req.params.id }).exec(function (err, user) {
                if (err) throw err;
                console.log(user)
                return res.json(user);
            })
        });
 //-----------remove user----------------------------------------------------------
        router.delete('/removeuser', (req, res, next) => {
            User.findByIdAndRemove({ "_id": "5afbb89f81aaee3de861c57b" }).exec(function (err, user) {
                if (err) throw err;
                console.log("removeuser");
            })
        });
//-----------remove user----------------------------------------------------------   
//-----------update user----------------------------------------------------------     
        router.put('/updateuser', (req, res, next) => {
            User.findByIdAndUpdate("5afbb89f81aaee3de861c57b",
                {
                    $set: { name: "sudhap" }
                },
                {
                    new: true
                },
                function (err, updateduser) {
                    if (err) throw err;
                    return res.json(updateduser);
                })
        });
//-----------update user----------------------------------------------------------
        module.exports = router;