var express = require('express');
var router = express.Router();

//게시물 전체 조회
router.get('/',(req,res)=>{
});
//게시물 한 개 조회
router.get('/:{board_idx}',(req,res)=>{
});
//게시물 등록
router.post('/',(req,res)=>{
});
//게시물 수정
router.put('/',(req,res)=>{
});
//게시물 삭제
router.delete('/:{board_idx}',(req,res)=>{
});

// 게시글 좋아요
router.post('/heart',(req,res)=>{
});

// 게시글 좋아요 조회
router.get('/heart',(req,res)=>{
});

module.exports = router;