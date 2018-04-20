var express = require ('express');

var router = express.Router();

var fs = require ('fs');

var bodyparser = require('body-parser');

var connection = require ('../database/database');

router.use(bodyparser.urlencoded({extended: false}));
router.use(bodyparser.json());

router.get('/', function (request, response){

    // response.send(console.log('rendering this'));
    response.render('vivanteinsert.html');
});

router.post('/insert', function (request, response){
    // console.log('ajax enabled');
    var data = request.body;
    fs.appendFile('vivanteinsert.html', JSON.stringify({
        irangamuntu : data.irangamuntu,
        amazina : data.amazina,
        igitsina : data.igitsina,
        irangamirere : data.irangamirere,
        se : data.se,
        nyina : data.nyina,
        amavuko : data.amavuko,
        yakirijwe : data.yakirijwe,
        yabatirijwe : data.yabatirijwe,
        akazi : data.akazi,
        umunyetorero : data.umunyetorero,
        amashuri : data.amashuri,
        ishami : data.ishami,
        impano : data.impano,
        telephone : data.telephone,
        email : data.email,
        akarere : data.akarere,
        umurenge : data.umurenge,
        akagari : data.akagari,
        umudugudu : data.umudugudu,
        umurimo : data.umurimo
    }), function () {

    })
    connection.query('INSERT INTO `vivtablei` SET ?', data, function (err, result){
        if(err){
            console.error(err.stack);
            // return;
        }else{
            console.log('Data successfully inserted')
        }
        console.log(result);

    })
    // response.send(console.log('accepted'));
    response.redirect('/insert');

});

module.exports = router;
