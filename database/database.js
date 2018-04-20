var mysql = require ('mysql');
var connect = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'vivante',
});



module.exports = connect;