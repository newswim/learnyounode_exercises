var strftime = require('strftime'),
    net      = require('net'),
    server   = net.createServer(function (socket) {
        var ts = strftime('%F %R', new Date());
        socket.end(ts + '\n');
});
server.listen(process.argv[2]);
