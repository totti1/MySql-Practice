
var express = require ('express');
var app = express();

// var router = express.Router();

var bodyparser = require ('body-parser');

var fs = require ('fs');
var path = require ('path');
var consolidate = require('consolidate');

var insert = require ('./routes/insert');
var search = require ('./routes/search');
var report = require ('./routes/report');


var connection = require ('./database/database');

connection.connect(function (error) {
    if(error){
        console.log('Failed to connect with the Database');
    }
    else{
        console.log('Connection Successfull');
    }
});

app.engine('html', consolidate.swig);
app.set('views', path.join(__dirname, 'views'));
// app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, 'views')));

app.use('/insert', insert);
app.use('/search', search);
app.use('/report', report);

app.get('/home', function (request, response) {
    response.render('vivante.html');
});
//
// app.get('/insert', function (request, response) {
//     response.render('vivanteinsert.html');
// });
//
// app.get('/search', function (request, response) {
//     response.render('search.html');
// });
//
// app.get('/report', function (request, response) {
//     response.render('report.html');
// });

app.set('PORT',process.env.PORT || 3003);
app.listen(app.get("PORT"), function () {

});
// module.exports = router;

