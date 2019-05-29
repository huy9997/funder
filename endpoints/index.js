const express = require('express');
const router  = express.Router();
const keys = require('../config/API_KEYS');
const moment = require('moment');
const plaid = require('plaid');
const bodyParser = require('body-parser');

const home = require('./homePage')
const get_access_token = require('./getAccessToken');
const getTransactions =require('./getTransactions');

const app = express();

let client = new plaid.Client(
  keys.PLAID_CLIENT_ID,
  keys.PLAID_SECRET,
  keys.PLAID_PUBLIC_KEY,
  plaid.environments[keys.PLAID_ENV],
  {version: '2018-05-22'}
);

router.use('/home',home);
router.use('/getTransactions', getTransactions);
router.use('/get_access_token', get_access_token);

// new code


// app.get('/test', function(request, response, next) {
//   response.json('/', {
//     PLAID_PUBLIC_KEY: keys.PLAID_PUBLIC_KEY,
//     PLAID_ENV: PLAID_ENV,
//     PLAID_PRODUCTS: keys.PLAID_PRODUCTS,
//   });
// });



module.exports = router;
