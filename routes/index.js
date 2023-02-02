var express = require('express');
var router = express.Router();

// const cors = require('cors');
// let corsOptions = {
//   origin: ['https://lime-home.herokuapp.com']
// }

/* GET home page. */
router.get('/', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://lime-home.herokuapp.com')
  res.header('Access-Control-Allow-Headers', '*')
  res.render('index', { title: 'Express' });
});

module.exports = router;
