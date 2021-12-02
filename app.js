const express = require("express")
const app = express()
const bodyParser = require("body-parser")
// const multer = require("multer")
// const upload = multer();
const session = require("express-session")
const dotenv = require("dotenv").config();
app.use(express.static('./views'))
app.use(express.static('./views/common'))
app.use(express.static('./static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array())

app.use(session({
    secret: "my secret",
    store: false,
    secure: false,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000 * 60 * 100) //miliseconds
    }
}));

var Users = [];
app.set('view engine', 'pug');
app.set("views", './views');

const port = 4000
const host = '127.0.0.1'

app.get('/', (req, res) => {
    if(req.session.user !== undefined) {
        console.log(req.session.user)
        res.render('event', {breadcrumbList: ['HOME', '이벤트', '진행중 이벤트']})
    }
    else {
        res.render('display', {breadcrumbList: ['HOME']})
    }
})
app.get('/login', (req, res) => {
    res.render('login', {breadcrumbList: ['Login']})
})
app.post('/login', (req, res) => {
    console.log('req:', req.body)
    req.session.user = req.body
    res.redirect('/')
})

app.get('/display', (req, res) => {
    res.render('display', {breadcrumbList: ['HOME', '기획전']})
})

app.get('/event', (req, res) => {
    res.render('event', {breadcrumbList: ['HOME', '이벤트', '진행중 이벤트']})
})
app.get('/coupon', (req, res) => {
    res.render('coupon', {breadcrumbList: ['HOME', '쿠폰/교환권']})
})

app.get('/h', (req, res) => {
    res.render('head', {breadcrumbList: ['HOME', '케어식단']})
})

// app.get('/information', (req, res) => {
//     // res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'})
//     if (req.session.user) {
//         res.render('information', {
//             user_name: req.session.user.user_name,
//             user_id: req.session.user.user_id,
//             password: req.session.user.password,
//             post: req.session.user.post,
//             addr: req.session.user.addr,
//             detai: req.session.user.detai
//         })
//     }
// })

// app.post('/info', (req, res) => {
//     console.log(req.body)
//     var response = {
//         user_name: req.body.user_name,
//         user_id: req.body.user_id,
//         password: req.body.password,
//         post: req.body.post,
//         addr: req.body.addr,
//         detai: req.body.detai
//     };
//     // console.log(response)
//     Users.push(response)
//     req.session.user = response
//     res.redirect('/information');

//     // res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
//     // res.end(`이름 : ${response.user_name} \n아이디 : ${response.user_id} \n주소 : ${response.post} ${response.addr} ${response.detai}`)

//     // res.redirect('information')
// })
app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});