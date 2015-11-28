var http = require('http'),
    port = process.argv[2],
    file = process.argv[3],
    fs = require('fs'),
    server = http.createServer(function (req, res) {
        // res.setEncoding('utf8');
        res.writeHead(200, { 'content-type': 'text/plain' });
        fs.createReadStream(file).pipe(res);

    })

server.listen(port);
