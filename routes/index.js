var express = require('express');
var router = express.Router();

router.use('/mypage', require('./mypage'));
router.use('/otherpage', require('./otherpage'));
router.use('/search', require('./search'));
router.use('/story', require('./story'));
router.use('/activity', require('./activity'));
router.use('/follow', require('./follow'));

module.exports = router;
