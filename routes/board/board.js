var express = require('express');
var router = express.Router();
const utils = require('../../module/utils/utils');
const resMessage = require('../../module/utils/responseMessage');
const statusCode = require('../../module/utils/statusCode');
const db = require('../../module/pool');
const authUtils = require('../../module/utils/authUtils');
const upload = require('../../config/multer');
const moment = require('moment');
const Board = require('../../model/Board');

//게시물 전체 조회
router.get('/',async(req,res)=>{
    // const userIdx = req.decoded.idx;

    Board.getAllBoard(1)
    .then(({code,json}) => {
        res.status(code).send(json);
    })
    .catch((err)=>{
        console.log(err);
        res.status(statusCode.INTERNAL_SERVER_ERROR)
        .send(utils.successFalse(statusCode.INTERNAL_SERVER_ERROR,resMessage.INTERNAL_SERVER_ERROR))
    });
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