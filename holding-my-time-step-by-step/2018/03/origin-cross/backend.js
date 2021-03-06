var express = require('express'),
	app = express();

app.all('*', function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS"); 
	res.header("Content-Type", "application/json;charset=utf-8");
	next(); 
});

app.get('/auth/:id/', function (req, res) { 
	res.send({ id:req.params.id }); 
});

app.post('/auth', function (req, res) { 
	res.send({ id:req.params.id }); 
});


app.listen(3000);