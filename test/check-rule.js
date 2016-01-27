// test suite
var chai = require('chai');
var expect;
chai.use(require('chai-as-promised')); // for promise
chai.use(require('chai-things')); // for array asserting
chai.config.truncateThreshold = 0;  // disable truncating
expect = chai.expect;

// requiring
const _ = require('lodash');
const eslintAllRules = require('eslint/conf/eslint.json').rules;
const airbnbRules = require('eslint-config-airbnb/base').rules;
const base = require('../rules/base').rules;
const exclude = require('../rules/exclude').rules;

// Rules that exported in index.js
const exportingRules = require('../index').rules;

// Rules that mentioned
const mentionedAllRules = (() => _.merge({}, airbnbRules, base, exclude))();

describe('My specified rules', () => {
  it('should not contain duplicated rules in rules/base and rules/exclude', () => {
    var nonUniqueKeys = _.intersection(_.keys(base), _.keys(exclude));
    expect(nonUniqueKeys).to.be.empty;
  });

  it('should not contain same values as Airbnb in rules/base', () => {
    var sameRules =
      _.pick(base, (v, k) => _.eq(v, airbnbRules[k]));
    expect(sameRules).to.be.empty;
  });

  it('should not set to 0 that Airbnb don\'t mention in rules/base (it should be placed in rules/exclude)', () => {
    var verboseRules =
      _(base).pick((v, k) => v === 0 && airbnbRules[k] === undefined).value();
    expect(verboseRules).to.be.empty;
  });

  it('should all off in rules/exclude', () => {
    expect(_.values(exclude)).all.equal(0);
  });

  it('should not leave unmentioned rules against the eslint all rules', () => {
    var unspecified = _.difference(_.keys(eslintAllRules), _.keys(mentionedAllRules));
    expect(unspecified).to.be.empty;
  });

  it('should not contain invalid rules', () => {
    var invalid = _.difference(_.keys(mentionedAllRules), _.keys(eslintAllRules));
    expect(invalid).to.be.empty;
  });

  it('should be equal exporting rules and merge result of Airbnb\'s and base', () => {
    expect(exportingRules).to.be.deep.equal(_.merge({}, airbnbRules, base));
  });
});
