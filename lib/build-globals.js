const _ = require("lodash");
const fs = require("fs");
const parsers = require("./im-api-doc-mapping").parsers;
const client = require("cheerio-httpcli");
const Q = require("q");

const apiMap = {};

/**
 * removeDeprecated
 *
 * @param {String} s
 * @returns {String}
 */
function removeDeprecated(s) {
  return s.replace(/非推奨/, "");
}

/**
 * removeTail
 *
 * @param {String} s
 * @returns {String}
 */
function removeTail(s) {
  const i = s.indexOf(".");
  return i === -1 ? s : s.substring(0, i);
}

/**
 * writeFile
 *
 * @returns {Promise}
 */
function writeFile() {
  return Q.all(
    _.keys(apiMap).map(filename => {
      const content = `module.exports = {\n  globals: {\n${apiMap[filename]
        .sort()
        .map(k => `    ${k}: false`)
        .join(",\n")}\n  }\n};`;

      return Q.nfcall(
        fs.writeFile,
        `globals/${filename}.js`,
        `${content}\n`,
        "utf8"
      );
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
  const globals = _(apis)
    .map(removeDeprecated)
    .map(removeTail)
    .reject(s => !s)
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
  const tasks = parsers.map(elm =>
    elm.targets.map(t =>
      client.fetch(t.url).then(elm.parse).then(appendApi.bind({ file: t.file }))
    )
  );

  return _.flatten(tasks);
}

Q.nfcall(fs.readdir, "globals")
  .then(files =>
    Q.all(files.map(file => Q.nfcall(fs.unlink, `globals/${file}`)))
  )
  .then(() => Q.all(requestAndMapPromises()))
  .then(writeFile)
  .then(() => {
    console.log("Success!");
  }, console.dir);
