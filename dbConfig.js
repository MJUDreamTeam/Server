const mysql = require('promise-mysql');

const dbConfig = {
    host: 'seokki.chxnhr2fhnu0.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'seokki',
    password: 'seokkiserver',
    database: 'CloneInsta',
    dateStrings: 'date'
}

module.exports = mysql.createPool(dbConfig);