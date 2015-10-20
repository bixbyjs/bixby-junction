exports = module.exports = function() {
  var junction = require('junction');
  return junction();
}


exports['@singleton'] = true;
exports['@implements'] = 'http://i.bixbyjs.org/express/Service';
