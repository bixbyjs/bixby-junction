exports = module.exports = function junction(id) {
  var map = {
    'service': './service'
  };
  
  var mid = map[id];
  if (mid) {
    return require(mid);
  }
};



exports.main = function() {
  function pre(IoC) {
    IoC.use('xmpp', require('bixby-xmpp'));
    IoC.use('xmpp', exports);
  }
  
  function post(IoC) {
    var service = IoC.create('xmpp/service');
    // TODO: Make this a connection, more generically
    var client = IoC.create('xmpp/client');
    var logger = IoC.create('logger');
    var settings = IoC.create('settings');
    
    // Dispatch stanzas to the service, which in this case is a Junction app.
    client.on('stanza', service);
    
    var init = IoC.create('initializer');
    init.phase(require('bootable').di.routes('app/middleware'), service);
  }
  
  require('bixby').main(pre, post);
}
