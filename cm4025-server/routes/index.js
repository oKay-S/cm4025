var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) {
  res.end(req.session.loggedinas);
});

router.get('/set', function(req, res, next) {
  req.session.loggedinas = "loginone";
  res.end();
});

module.exports = router;
