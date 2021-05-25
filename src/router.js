//const { Router } = require('express')

const express = require('express');
const router = express.Router();
const logincontroller = require('./controller/logincontroller');
const homecontroller = require('./controller/homecontroller');
const registercontroller = require('./controller/registercontroller');
const { Router } = require('express');

router.get("/", logincontroller.renderloginpage);
router.post("/", logincontroller.login);
router.get("/register", registercontroller.userRegister);
router.post("/register", registercontroller.registervalue);
router.get("/home/:user_id", homecontroller.home);
router.post("/home/:user_id", homecontroller.deleteUser);
module.exports = router;