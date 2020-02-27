var express = require('express');
var router = express.Router();

router.use('/board', require('./board'));
router.use('/board', require('./comment'));

module.exports = router;