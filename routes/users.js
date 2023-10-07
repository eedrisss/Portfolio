 /* 
COMP224
Idris Mustapha
301207535
10/04/2023 */ 
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
