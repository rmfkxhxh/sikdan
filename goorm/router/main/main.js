const express = require("express");
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
var router = express.Router();

router.get('/', function(req,res) {
    //로그인시
    if(req.session.isLogined){
        res.render('hidden');
    }else{
        res.render('main');
    }
})

//회원가입 구현


//해당 파일을 모듈화 (js파일에도 모듈화 적용)
module.exports = router