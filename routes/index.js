var express = require('express');
var router = express.Router();


router.use('/mypage', require('./mypage'));
router.use('/otherpage', require('./otherpage'));
router.use('/search', require('./search'));

module.exports = router;
