var express = require('express');
var router = express.Router();

router.use('/', require('./otherpage'));

module.exports = router;