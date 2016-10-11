exports = module.exports = function(__app__, service, connection, settings, logger) {
  
  
  return function main() {
    console.log('JUNCTION MAIN!');
    
    // Setup the service, which in this case is a Junction app, to process
    // stanzas on this connection.  Stanzas received on the connection will be
    // dispatched though the middleware stack.  Stanzas transmitted on the
    // connection will be processed through the filter stack.
    service.setup(connection);
    
    //var opts = settings.get('http/server') || {};
    
    //var address = opts.address;
    //var port = opts.port !== undefined ? opts.port : 8080;
    //server.listen(port, address);
  };
  
  // Dispatch requests to the handler, which in this case is an Express app.
  server.on('request', service);
  
  server.once('listening', function() {
    var addr = this.address();
    logger.info('HTTP server listening on %s:%d', addr.address, addr.port);
  });
  
  
  return function main() {
    console.log('BIXBY JUNCIOTN MAIN!');
    
    /*
    var opts = settings.get('http/server') || {};
    
    var address = opts.address;
    var port = opts.port !== undefined ? opts.port : 8080;
    server.listen(port, address);
    */
  };
};

exports['@singleton'] = true;
exports['@require'] = [
  'app',
  'xmpp/service',
  'xmpp/client'
  //'http://i.bixbyjs.org/http/Service',
  //'http://i.bixbyjs.org/http/Server',
  //'http://i.bixbyjs.org/Settings',
  //'http://i.bixbyjs.org/Logger'
];
