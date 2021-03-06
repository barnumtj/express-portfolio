var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var path = require("path");



// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))

app.get('/',function(req,res){     
    res.sendFile(path.join(__dirname+'/views/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/portfolio', function(req, res){
    res.sendFile(path.join(__dirname+'/views/portfolio.html'))
})
app.listen(PORT, function(){
    console.log('app listening on ' +  PORT)
})
