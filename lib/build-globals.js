var _ = require('lodash');
var fs = require('fs');
var parsers = require('./im-api-doc-mapping').parsers;
var client = require('cheerio-httpcli');
var Q = require('q');

var apiMap = {};

/**
 * removeDeprecated
 *
 * @param {String} s
 * @returns {String}
 */
function removeDeprecated(s) {
  'use strict';
  return s.replace(/非推奨/, '');
}

/**
 * removeTail
 *
 * @param {String} s
 * @returns {String}
 */
function removeTail(s) {
  'use strict';
  var i = s.indexOf('.');
  return i === -1 ? s : s.substring(0, i);
}

/**
 * writeFile
 *
 * @returns {Promise}
 */
function writeFile() {
  'use strict';
  return Q.all(
    _.keys(apiMap).map((filename) => {
      var content =
        'module.exports = {\n' +
        '  "globals": {\n' +
        apiMap[filename].sort().map((k) => { return '    "' + k + '": false'; }).join(', \n') + '\n' +
        '  }\n' +
        '};';

      return Q.nfcall(fs.writeFile, 'globals/' + filename + '.js', content, 'utf8');
    })
  );
}

/**
 * appendApi
 *
 * @param {Array} apis
 * @returns {undefined}
 */
function appendApi(apis) {
  'use strict';
  var globals = _(apis)
  .map(removeDeprecated)
  .map(removeTail)
  .reject((s) => !s)
  .uniq()
  .value();

  if (apiMap[this.file]) {
    apiMap[this.file] = apiMap[this.file].concat(globals);
  } else {
    apiMap[this.file] = globals;
  }
}

/**
 * requestAndMapPromises
 *
 * @returns {undefined}
 */
function requestAndMapPromises() {
  'use strict';
  var tasks =
  parsers.map((elm) => {
    return elm.targets.map((t) => {
        return client.fetch(t.url).then(elm.parse).then(appendApi.bind({ file: t.file }));
      }
    );
  });

  return _.flatten(tasks);
}

Q.nfcall(fs.readdir, 'globals')
.then((files) => { 'use strict'; return Q.all(files.map((file) => Q.nfcall(fs.unlink, 'globals/' + file))); })
.then(() => { 'use strict'; return Q.all(requestAndMapPromises()); })
.then(writeFile)
.then(() => { 'use strict'; console.log('Success!') }, console.dir);
