const mysql = require("mysql");

var connection = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'Pleum_555',
    database:'vacCenter'
});

module.exports = connection;