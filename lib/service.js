exports = module.exports = function() {
  return require('junction')();
}

exports['@singleton'] = true;
exports['@implements'] = [ 'http://i.junctionjs.org/Service',
                           'http://i.bixbyjs.org/xmpp/stanzaListener' ];
