const airbnbExtends = require('eslint-config-airbnb-base/legacy').extends;
const airbnbRules = require('./lib/resolve-extends')(airbnbExtends);
var base = require('./rules/base');

// merge our rules into airbnb's
var mergedRules = JSON.parse(JSON.stringify(airbnbRules));
Object.keys(base.rules).forEach((ruleId) => mergedRules[ruleId] = base.rules[ruleId]);
base.rules = mergedRules;

module.exports = base;
