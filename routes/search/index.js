var express = require('express');
var router = express.Router();

router.use('/account', require('./account'));
router.use('/random', require('./random'));


module.exports = router;