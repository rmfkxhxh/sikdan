var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require("body-parser")
var register = require('./register/register');
var login = require('./login/login');
var main = require('./main/main');
var logout = require('./logout/logout');
const session = require("express-session")


app.set('view engine', 'pug');
app.set("views", './views');

app.use('/', main)
app.use('/', register)
app.use('/', login)
app.use('/', logout)

//index.js(시작 파일)에서 router 폴더 안의 index.js만
//require하면 결국 원하는 기능을 담은 js파일에 도달하게된다

app.use(express.static('./views'))
app.use(express.static('./static'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array())

const port = 3000
const host = '127.0.0.1'

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


app.get('/hidden', (req, res) => {
    res.render('hidden')
})
app.get('/login', (req, res) => {
    res.render('login')
})


app.get('/main', (req, res) => {
    res.render('main')
})
app.get('/register', (req, res) => {
    res.render('register')
})



app.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});