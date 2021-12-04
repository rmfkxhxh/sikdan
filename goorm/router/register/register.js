const express = require('express');
const app = express();
const mysql = require('mysql'); //mysql과 연동
const bodyParser = ('body-parser');
var router = express.Router();

//연결 프론트 = 백
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'0000',
    database:'user'
});

//form에서 제출 누르게 되면 post와 연결
router.post('/',function(req,res) {
    //body 값 가져오기 
    const name = req.body.name
    const pw = req.body.pw
    var sql_insert = {name:name, pw:pw}

    connection.query('select name from user_info where name=?', [name], function(req,rows) {
        if(rows.length) {
         res.json({'result' : 'fail'})   
        }else {
            connection.query('insert into user_info set?', sql_insert, function(err,rows) {
                if(err) throw err;
                console.log(ok)
                res.json({'result':'ok'})
            })
        }
    })
})

module.exports = router