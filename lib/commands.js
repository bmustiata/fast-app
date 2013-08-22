var serve = function(host, port) {
    host = host || '0.0.0.0';
    port = port || 5001;

    var connect = require('connect');

    connect.createServer(
        connect.static(".")
    ).listen(port);
};

var createApplication = function(name) {
    name = name || 'demo';


};

exports.serve = serve;
exports.createApplication = createApplication;