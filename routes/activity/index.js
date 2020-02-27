var express = require('express');
var router = express.Router();

router.use('/', require('./activity'));

module.exports = router;