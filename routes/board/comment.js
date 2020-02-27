var express = require('express');
var router = express.Router();

//댓글 전체 조회
router.get('/:{board_idx}/comment',(req,res)=>{
});

//댓글 2개 조회
router.get('/:{board_idx}/comment/lastest',(req,res)=>{
});

//댓글 등록
router.post('/:{board_idx}/comment/',(req,res)=>{
});

//댓글 삭제
router.delete('/:{board_idx}/comment/:{comment_idx}',(req,res)=>{
});

//댓글 좋아요
router.post('/comment/heart',(req,res)=>{
});

//댓글 좋아요 조회
router.get('/comment/heart',(req,res)=>{
});

module.exports = router;