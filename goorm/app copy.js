const express = require("express")
const app = express()
const router = require('./index/js')
const bodyParser = require("body-parser")
// const upload = require("multer")
const logger = require("morgan");
const session = require("express-session")
const dotenv = require("dotenv").config();

//routes
// const membership = require("./routes/membership");
// const common = require("./routes/common");
// app.use("/membership", membership);
// app.use("/common", common);
// const db = require("./model");

app.use(express.static('./views'))
app.use(express.static('./static'))
app.use(router)

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

app.get('/order', (req, res) => {
    res.render('order', {page: "join"})
})
app.get('/signup', (req, res) => {
    res.render('signup', {breadcrumbList: ["HOME", "회원가입"]})
})


var Users = [];
app.set('view engine', 'pug');
app.set("views", './views');

const port = 3000
const host = '127.0.0.1'

app.get('/', (req, res) => {
    res.render('index', {breadcrumbList: ["HOME"], page: './event.pug'})
})
app.get('/login', (req, res) => {
    res.render('login', {breadcrumbList: ["HOME", "로그인"]})
})
app.get('/join', (req, res) => {
    res.render('join', {breadcrumbList: ["HOME", "회원가입"]})
})
app.get('/event', (req, res) => {
    res.render('event', {breadcrumbList: ["HOME", "이벤트"]})
})
app.get('/display', (req, res) => {
    res.render('display', {breadcrumbList: ["HOME", "기획전"]})
})
app.get('/coupon', (req, res) => {
    res.render('coupon', {breadcrumbList: ["HOME", '쿠폰/교환권']})
})
app.get('/my', (req, res) => {
    res.render('myPersonalQuery', {breadcrumbList: ["HOME", '고객센터', '1:1 문의하기']})
})





app.get('/detail', (req, res) => {
    res.render('detail')
})
app.get('/story', (req, res) => {
    res.render('story', {breadcrumbList: ["HOME", '스토리']})
})



app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});