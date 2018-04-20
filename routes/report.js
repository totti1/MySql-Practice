var express = require ('express');
var app = express();

var router = express.Router();

var connection = require ('../database/database');

// connection.connect(function (error) {
//     if(error){
//         console.error('Failed to connect with the Database', error.errno);
//     }else{
//         console.log("Database connected successfully");
//     }
// });


router.get('/', function (req, res) {
    // res.send(console.log('test'));
    res.render('report.html');
});

router.post('/report', function (req, res) {

    connection.query('SELECT * FROM vivtablei', function (err, rows, fields) {
        if (err) {
            console.log('failed to fetch', err.stack);
        }
        res.json(rows);
        // res.append(getdata)
    });
    // // console.log(data)



});

module.exports = router;