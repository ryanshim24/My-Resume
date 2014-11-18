var express = require('express'),
    app = express();
    

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));


app.get('/', function(req, res){
  res.render('index1');
});


var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening on port %d', server.address().port);
});
