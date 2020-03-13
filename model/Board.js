const utils = require('../module/utils/utils');
const resMessage = require('../module/utils/responseMessage');
const statusCode = require('../module/utils/statusCode');
const pool = require('../module/pool');
const moment = require('moment');

Board = {
    getAllBoard : (userIdx) => {
        return new Promise(async (resolve,reject)=>{
            const getMyFollower = `SELECT B.followToIdx FROM Follow B WHERE followFromIdx = ${userIdx}`;
            const getAllBoard =  `SELECT * FROM Board WHERE writerIdx IN (${getMyFollower});`;
            const getAllBoardResult = await pool.queryParam_None(getAllBoard);

            if(!getAllBoardResult){
                // 연동 실패
                resolve({
                    code : statusCode.DB_ERROR,
                    json : utils.successFalse(statusCode.DB_ERROR, resMessage.DB_ERROR)
                });
                return;
            } else {
                // 연동 성공
                resolve({
                    code : statusCode.OK,
                    json : utils.successTrue(statusCode.OK,resMessage.BOARD_REGIST_ALL_SUCCESS,getAllBoardResult)
                });
                return;
            }
        });
    },
    getOneBoard : (boardIdx) => {
        return new Promise(async (resolve,reject)=>{
            const getOneBoard = `SELECT * FROM Board WHERE boardIdx = ${boardIdx};`;
            const getOneBoardResult = await pool.queryParam_None(getOneBoard);

            if(!getOneBoardResult){
                // 연동 실패
                resolve({
                    code : statusCode.DB_ERROR,
                    json : utils.successFalse(statusCode.DB_ERROR, resMessage.DB_ERROR)
                });
                return;
            } else {
                // 연동 성공
                resolve({
                    code : statusCode.OK,
                    json : utils.successTrue(statusCode.OK,resMessage.BOARD_REGIST_ONE_SUCCESS,getOneBoardResult)
                });
                return;
            }
        });
    },
    createBoard : (userIdx,boardString) => {
        return new Promise(async (resolve,reject)=> {

            //transaction 처리 -> 다중의 쿼리를 진행해야할 경우
            const insertBoardAndMedia = await pool.Transaction( async(con)=> {
                const createBoard = `INSERT INTO Board(writerIdx,date) VALUES (${userIdx},'${moment().format('YYYY-MM-DD HH:MM:SS')}');`;
                const createBoardResult = await con.query(createBoard);

                const getBoardIdx = `SELECT boardIdx from Board ORDER BY boardIdx DESC LIMIT 1`
                const createMedia = `INSERT INTO Media(boardIdx,boardString) VALUES ((${getBoardIdx}),'${boardString}');`;
                const craeteMediaResult = await con.query(createMedia);
            });
            
            if(insertBoardAndMedia === undefined){
                resolve({
                    code : statusCode.DB_ERROR,
                    json : utils.successFalse(statusCode.DB_ERROR,resMessage.DB_ERROR)
                })
            }else{
                resolve({
                    code : statusCode.OK,
                    json : utils.successTrue(statusCode.OK,resMessage.NEW_BOARD_SUCCESS,resMessage.NEW_BOARD_SUCCESS)
                })
            }
        });
    },
    updateBoard : (boardIdx,newBoardString) => {

        return new Promise(async (resolve,reject)=>{
            const updateBoard = `UPDATE Media SET boardString = '${newBoardString}' WHERE boardIdx=${boardIdx}`;
            const updateBoardResult = await pool.queryParam_None(updateBoard);
    
            if(!updateBoardResult){
                resolve({
                    code : statusCode.DB_ERROR,
                    json : utils.successFalse(statusCode.DB_ERROR,resMessage.DB_ERROR)
                });
            }else{
                resolve({
                    code : statusCode.OK,
                    json : utils.successTrue(statusCode.OK,resMessage.UPDATE_BOARD_SUCCESS,"업데이트 성공!")
                })
            }
        });
    },
    deleteBoard : (boardIdx) => {
        return new Promise(async(resolve,reject)=>{
            //foreign 키 사용하지 않음, 왜 ? 다른 db에 들어갈 것이기 때문에 transaction으로 처리해 주었음.
            const deleteBoardAndMedia = await pool.Transaction( async(con)=> {
                const deleteBoard = `DELETE FROM Board WHERE boardIdx = ${boardIdx};`;
                const deleteBoardResult = await con.query(deleteBoard);
                const deleteMedia = `DELETE FROM Media WHERE boardIdx = ${boardIdx};`;
                const deleteMediaResult = await con.query(deleteMedia);
            });

            if(deleteBoardAndMedia === undefined){
                resolve({
                    code : statusCode.DB_ERROR,
                    json : utils.successFalse(statusCode.DB_ERROR,resMessage.DB_ERROR)
                })
            }else{
                resolve({
                    code : statusCode.OK,
                    json : utils.successTrue(statusCode.OK,resMessage.DELETE_BOARD_SUCCESS,resMessage.DELETE_BOARD_SUCCESS)
                })
            }
        });
    }
}

module.exports = Board;