var express = require('express');
var router = express.Router();

router.use('/story', require('./story'));

module.exports = router;
