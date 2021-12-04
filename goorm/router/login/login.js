var session = require('express-session');
const express = require("express")
const app = express()
const router = express.Router()
var MySQLStore = require('express-mysql-session')(session)


var options = {
    host:'localhost',
    user:'root',
    password: '0000',
    database: 'user'
}

var sessionStore = new MySQLStore(options)

//기본설정
app.use(session ({
    secret:'my key',
    resave: false,
    saveUninitialized:true,
    store: sessionStore
}))

router.post('/'),function(res,req) {
    const name = req.body.name
    const pw =req.body.pw
    var sql_insert={name:name,pw:pw}
    connection.query('select * from user_info where name=?',[name],function(err,rows){
        if(rows.length){
            if(rows[0].name===name){
                connection.query('select * from user_info where pw=?',[pw],function(err,rows){
                    if(err){
                        throw err
                    }
                    if(rows.length){
                        req.session.uname=rows[0].name
                        req.session.upw=rows[0].pw
                        req.session.isLogined=true;
                        req.session.save(function() {
                            res.json({'result':'ok'})
                        })
                    }else{
                        res.json({'result':'pwfalse'})
                    }
                })
            }
        }
        else{
            //아이디가 잘못됨
        }

    })
}

module.exports = router

