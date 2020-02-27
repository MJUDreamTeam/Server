var jwt = require('../jwt');
const resMessage = require('./responseMessage');
const statusCode = require('./statusCode');
const util = require('./utils');

const authUtil = {
    isLoggedin: async(req, res, next) => {
        var token = req.headers.token;

        if (!token) {
            return res.json(util.successFalse(statusCode.BAD_REQUEST, resMessage.EMPTY_TOKEN));
        } else {
            const user = jwt.verify(token);

            if (user == -3) {
                //유효기간이 지난 토큰일 때
                return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.EXPRIED_TOKEN));
            } else if (user == -2) {
                //잘못 형식의 토큰(키 값이 다르거나 등등)일 때
                return res.json(util.successFalse(statusCode.UNAUTHORIZED, resMessage.INVALID_TOKEN));
            } else {
                //req.decoded에 확인한 토큰 값 넣어줌
                req.decoded = user;
                next();
            }
        }
    },
};

module.exports = authUtil;
