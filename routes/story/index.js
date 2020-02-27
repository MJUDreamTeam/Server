var express = require('express');
var router = express.Router();

router.use('/', require('./story'));

module.exports = router;