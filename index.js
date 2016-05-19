const airbnb = require('eslint-config-airbnb-base/legacy');
const airbnbExtends = airbnb.extends;
const airbnbRules = require('./lib/resolve-extends')(airbnbExtends);
var base = require('./rules/base');

// merge our rules into airbnb's
var mergedRules = JSON.parse(JSON.stringify(airbnbRules));
Object.keys(base.rules).forEach((ruleId) => mergedRules[ruleId] = base.rules[ruleId]);
base.rules = mergedRules;
if (base.plugins) {
  base.plugins = airbnb.plugins.concat(base.plugins);
}

module.exports = base;
