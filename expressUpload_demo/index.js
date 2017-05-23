const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const pathLib = require('path');
const fs = require('fs');
var objmulter = multer({dest:'./www/upload/'});

var server = express();

server.use(bodyParser.urlencoded({extended:false}));
server.use(objmulter.any());

server.post('/',(req,res) => {

    var oriName = req.files[0].path;
    var aftName = req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
    fs.rename(oriName,aftName,(err) => {
        if(err) {
            res.send('出错');
        } else {
            res.send('文件上传成功');
        }
    });
});

server.listen(8000,() => {
    console.log('Server is started!');
});
