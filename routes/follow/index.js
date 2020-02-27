var express = require('express');
var router = express.Router();

router.use('/', require('./follow'));
router.use('/following', require('./following'));
router.use('/follower', require('./follower'));

module.exports = router;