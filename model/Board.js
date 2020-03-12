const utils = require('../module/utils/utils');
const resMessage = require('../module/utils/responseMessage');
const statusCode = require('../module/utils/statusCode');
const pool = require('../module/pool');

Board = {
    getAllBoard : (userIdx) => {
        return new Promise(async (resolve,reject)=>{
            const getMyFollower = `SELECT B.followToIdx FROM Follow B WHERE followFromIdx = ${userIdx}`
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
                    json : utils.successTrue(statusCode.OK,resMessage.BOARD_SUCCESS,getAllBoardResult)
                });
                return;
            }
        });
    },
}

module.exports = Board;