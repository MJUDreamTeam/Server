var express = require('express');
var router = express.Router();

//계정 검색
router.get('/', (req, res)=>{
    //검색어 저장
    const keyword = req.query.keyword;

});

module.exports = router;