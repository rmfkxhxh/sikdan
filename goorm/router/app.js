const express = require("express")
const app = express()
const index = require('./index.js')
const bodyParser = require("body-parser")
// const upload = require("multer")
const logger = require("morgan");
const session = require("express-session")
const dotenv = require("dotenv").config();
const router = express.Router()


//routes
// const membership = require("./routes/membership");
// const common = require("./routes/common");
// app.use("/membership", membership);
// app.use("/common", common);
// const db = require("./model");

router.use(express.static('./views'))
router.use(express.static('./static'))

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }))
// app.use(upload.array())

const port = 3000
const host = '127.0.0.1'

router.use(session({
    secret: "my secret",
    store: false,
    secure: false,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: (1000 * 60 * 100) //miliseconds
    }
}));

router.set('view engine', 'pug');
router.set("views", './views');

router.get('/hidden', (req, res) => {
    res.render('hidden')
})
router.get('/login', (req, res) => {
    res.render('login')
})


router.get('/main', (req, res) => {
    res.render('main')
})
router.get('/register', (req, res) => {
    res.render('register')
})



router.listen(port, host, () => {
    console.log(`application running at http://${host}:${port}/`)
});