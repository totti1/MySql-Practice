var express = require ('express');
// var app = express();

var router = express.Router();

// var path = require ('path');
// var fs = require ('fs');
// var bodyparser = require ('body-parser');
// var consolidate = require ('consolidate');

var connection = require ('../database/database');

// connection.connect(function (error) {
//     if(error){
//         console.error('Failed to connect with the Database search', error.stack);
//     }else {
//         console.log('Database connected succesfully');
//     }
//
// });


router.get('/', function (req, res) {

    res.render('search.html');
    // res.send(console.log('succes'));

});

router.post('/getsearchs', function (req, res) {

    // console.log('i am here');

    var data = req.body.search;
    connection.query('SELECT * FROM vivtablei where amazina like "%'+ data +'%"', function (err, rows, fields) {
        if (err) {
            console.log('failed to fetch', err.stack);
        }
        res.json(rows);
        // res.append(getdata)
    });
    // console.log(data)

});

module.exports = router;