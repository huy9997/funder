const express = require('express');
const router  = express.Router();

router.get('/get', function (req, res) {
  body ={
    username:'user',
    password: ' password'
  }
  res.json(body);
});
router.post('/post', function(req,res){

});



module.exports = router;
