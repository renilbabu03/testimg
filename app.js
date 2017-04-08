// // var fs =  require('fs');
// // var zlib = require('zlib');
// // var readable = fs.createReadStream(__dirname+'/greet.txt',{encoding:'utf8', highWaterMark:32*1024});


// // var writable = fs.createWriteStream(__dirname+'/greet2.txt');
// // var compressed = fs.createWriteStream(__dirname+'/greet.txt.gz');
// // var gzip = zlib.createGzip();

// // readable.pipe(writable);
// // readable.pipe(gzip).pipe(compressed);

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){
//     console.log("Request "+req);
//     if(req.url === '/'){
//         fs.createReadStream(__dirname+'/index.html').pipe(res);
//     }
//     else if(req.url === '/api'){
//          res.writeHead(200, {
//         'Content-Type':'application/json',
//     });
//     var obj = {
//         firstname:'John',
//         lastname:'Doe'
//     }
//     res.end(JSON.stringify(obj))
// }
// else{
// res.writeHead(404);
//     res.end("This is bull shitls");
    
// }
     
var a = require("body-parser")
 
// }).listen(1337,'127.0.0.1');

var express = require('express');
var port = process.env.PORT || 3000;
var app = express();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jsonPasrser = bodyParser.json();
app.set('view engine', 'ejs')
app.use('/assets', express.static(__dirname+'/public'))
app.use('/',function(req,res,next){
    console.log("HTLLL")
    next();
})
app.get('/',function(req,res){
    res.render('index')
})
app.get('/person/:id',function(req,res){
    // res.send({"name":"renil"})
    // res.send('<html><head></head><body><h1>HELLO'+req.params.id+'</h1></body></html>');
    res.render('person',{ID:req.params.id,qstr:req.query.qstr})
})
app.post('/person',urlencodedParser, function(req,res){
    res.send('Thank you')
    console.log(req.body.firstname);
    console.log(req.body.lastname);  
      
})
var renil = require("path")

app.listen(port)