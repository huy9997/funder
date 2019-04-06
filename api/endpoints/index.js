const express = require('express');
const router  = express.Router();

const home = require('./homePage')
const login = require('./login')

router.use('/home',home);
router.use('/login',login);

module.exports = router;
