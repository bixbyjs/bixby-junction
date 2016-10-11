exports = module.exports = {
  'authenticator': require('./authenticator'),
  'service': require('./service')
};

exports.load = function(id) {
  try {
    return require('./' + id);
  } catch (ex) {
    if (ex.code == 'MODULE_NOT_FOUND') { return; }
    throw ex;
  }
};

exports.main = function(pre) {
  function _pre(IoC) {
    IoC.use(require('../app'));
    IoC.use('xmpp', require('bixby-xmpp'));
    IoC.use('xmpp', exports);
    pre && pre(IoC);
  }
  
  require('bixby').main(_pre);
}


/*
exports = module.exports = function junction(id) {
  var map = {
    'service': './service'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};

exports.used = function(container) {
  // Register object specifications for auto-wiring.
  container.register('service');
}
*/

/*
exports.main = function() {
  function pre(IoC) {
    IoC.use('xmpp', require('bixby-xmpp'));
    IoC.use('xmpp', exports);
  }
  
  function post(IoC) {
    var service = IoC.create('xmpp/service');
    // TODO: Make this a connection, more generically
    var connection = IoC.create('xmpp/client');
    var logger = IoC.create('logger');
    var settings = IoC.create('settings');
    
    // Setup the service, which in this case is a Junction app, to process
    // stanzas on this connection.  Stanzas received on the connection will be
    // dispatched though the middleware stack.  Stanzas transmitted on the
    // connection will be processed through the filter stack.
    service.setup(connection);
  }
  
  require('bixby').main(pre, post);
}
*/