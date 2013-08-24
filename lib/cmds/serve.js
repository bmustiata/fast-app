exports.execute = function(host, port) {
    var connect = require('connect'),
        http = require('http'),
        path = require('path'),
        servePath = path.resolve(".");

    host = host || '0.0.0.0';
    port = port || 5001;

    console.log("Serving folder " + servePath + " on port " + port + ".");

    var app = connect()
        .use(connect.static(servePath))
        .use(connect.directory(servePath));

    http.createServer(app).listen(port);
};
