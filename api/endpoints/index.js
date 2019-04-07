const express = require('express');
const router  = express.Router();
const keys =require('../config/API_KEYS');
const plaid = ('plaid');

var ACCESS_TOKEN = null;
var PUBLIC_TOKEN = null;

const PLAID_CLIENT_ID = keys.PLAID_CLIENT_ID;
const PLAID_SECRET = keys.PLAID_SECRET;
const PLAID_PUBLIC_KEY = keys.PLAID_PUBLIC_KEY ;

var plaidClient = new plaid.Client(PLAID_CLIENT_ID, PLAID_SECRET,
PLAID_PUBLIC_KEY, plaid.environments.sandbox, {version:
'2018-05-22'});


router.post('/get_access_token', function(request, response, next) {
  PUBLIC_TOKEN = request.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, function(error,tokenResponse) {
    if (error != null) {
      console.log('Could not exchange public_token!' + '\n' +
error);
      return response.json({error: msg});
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    ITEM_ID = tokenResponse.item_id;
    console.log('Access Token: ' + ACCESS_TOKEN);
    console.log('Item ID: ' + ITEM_ID);
    response.json({'error': false});
  });
});

module.exports = router;
