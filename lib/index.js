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
  }
  
  require('bixby').main(pre, post);
}
