var express = require('express');
var router = express.Router();

const allowedOrigins = ['https://lime-home.herokuapp.com', 'https://nemanjamilosevic98.github.io/lime-home'];

/* GET home page. */
router.get('/', function (req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Headers', '*')
  res.render('index', { title: 'Express' });
});

module.exports = router;
