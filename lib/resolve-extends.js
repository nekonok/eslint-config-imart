module.exports = (exts) => {
  var resolvedRules = {};
  Object.keys(exts).forEach((ext) => {
    var rules = require(exts[ext]).rules;
    Object.keys(rules).forEach((r) => resolvedRules[r] = rules[r]);
  });
  return resolvedRules;
}
