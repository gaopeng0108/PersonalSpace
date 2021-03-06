var http = require('http');
var net = require('net');
var url = require('url');

http.createServer((cReq, cRes) => {
	var u = url.parse(cReq.url);

	var options = {
		hostname : u.hostname, 
		port     : u.port || 80,
		path     : u.path,  
		method     : cReq.method,
		headers     : cReq.headers
	};

	var pReq = http.request(options, function(pRes) {
        cRes.writeHead(pRes.statusCode, pRes.headers);
        // 设置响应头
        pRes.pipe(cRes);
    }).on('error', function(e) {
        cRes.end();
    });
    // 将真实服务器返回的数据写入cReq
    cReq.pipe(pReq);
}).listen(8888, '0.0.0.0');