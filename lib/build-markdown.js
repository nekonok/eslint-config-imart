// requiring
const fs = require('fs');
const Q = require('q');
const _ = require('lodash');
const airbnbRules = require('eslint-config-airbnb/base').rules;
const base = require('../rules/base').rules;
const exclude = require('../rules/exclude').rules;
const packageJson = require('../package.json');
const exported = require('../index').rules;

// changed rules
const changed = (() => {
  return _.pick(base, (v, k) => v !== 0 && airbnbRules[k] !== undefined);
})();
// added rules
const added = (() => {
  return _.pick(base, (v, k) => v !== 0 && airbnbRules[k] === undefined);
})();
// supressed rules
const supressed = (() => {
  return _.pick(base, (v, k) => v === 0 && airbnbRules[k] !== undefined);
})();

// version
const versions = {
  eslint: packageJson.dependencies.eslint,
  eslint_config_airbnb: packageJson.dependencies['eslint-config-airbnb']
};

// count
const counts = {
  all: _.keys(exported).length,
  airbnb: _.keys(airbnbRules).length,
  ours: _.keys(base).length,
  exclude: _.keys(exclude).length
};

const templateBound = {
  changed,
  added,
  supressed,
  exclude,
  exported,
  versions,
  counts
};

const files = ['diff', 'exclude', 'all-rules'];

function compile(file) {
  return Q.nfcall(fs.readFile, './template/' + file + '.template.md', 'utf8')
  .then((content) => {
    return Q.resolve(_.template(content)(templateBound));
  })
  .then((content) => {
    return Q.nfcall(fs.writeFile, './doc/' + file + '.md', content, 'utf8');
  })
  .catch(console.trace);
}

Q.all(files.map((file) => { return compile(file); }))
.catch(console.trace);
