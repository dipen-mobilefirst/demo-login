var express = require('express');
var app = express();
var router = require('./src/router');
var bodyparser = require('body-parser');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(session({
    key: 'user_id',
    secret: 'secret-key',
    resave: false,
    saveUninitialized: false,
}));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/*app.get('/', (req, res) => {
    res.send('hello');
})*/
app.use((req, res, next) => {
    if (req.cookies.user_id && !req.session.user) {
        res.clearCookie('user_id');
    }
    next();
})

app.use(flash())
app.use('/', router);
app.set("views", "views");
app.set("view engine", "ejs");

app.listen(5000, () => {
    console.log("server is running at 5000")
})