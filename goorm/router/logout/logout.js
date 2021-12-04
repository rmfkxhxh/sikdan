var session = require('express-session');
const express = require("express")
const app = express()
const router = express.Router()

router.get('/',function(req,res){
    delete req.session.unmae;
    delete req.session.pw;
    delete req.session.inLogined;
    req.session.save(function(){
        res.redirect('/')
    })
})
module.exports = router