/**
 * Created by admin on 10/22/2014.
 */
var express = require('express')
var routes = require('./myRouter');
var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/myown", {native_parser:true});

var app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/public'))

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use(function(req,res,next){
    req.db = db;
    next();
});
app.use('/',routes)

app.get('/', function(request, response) {
    response.send('Hello World!')
})

app.listen(app.get('port'), function() {
    console.log("Node app is running at localhost:" + app.get('port'))
})