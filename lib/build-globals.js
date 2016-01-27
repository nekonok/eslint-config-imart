var _ = require('lodash');
var fs = require('fs');
var parsers = require('./im-api-doc-mapping').parsers;
var client = require('cheerio-httpcli');
var Q = require('q');

var apiMap = {};

function removeDeprecated(s) {
  return s.replace(/非推奨/, '');
}

function removeTail(s) {
  var i = s.indexOf('.');
  return i === -1 ? s : s.substring(0, i);
}

function isBlank(s) {
  return !s;
}

function writeFile() {
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

function appendApi(apis) {
  var globals = _(apis)
  .map(removeDeprecated)
  .map(removeTail)
  .reject(isBlank)
  .uniq()
  .value();

  if (apiMap[this.file]) {
    apiMap[this.file] = apiMap[this.file].concat(globals);
  } else {
    apiMap[this.file] = globals;
  }
}

function requestAndMapPromises() {
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
.then((files) => { return Q.all(files.map((file) => Q.nfcall(fs.unlink, 'globals/' + file))); })
.then(() => { return Q.all(requestAndMapPromises()); })
.then(writeFile)
.then(() => console.log('Success!'), console.dir);
