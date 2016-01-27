// test suite
var chai = require('chai');
var expect;
chai.use(require('chai-as-promised')); // for promise
chai.use(require('chai-things')); // for array asserting
chai.config.truncateThreshold = 0;  // disable truncating
expect = chai.expect;

// requiring
const _ = require('lodash');
const mapping = require('../lib/im-api-doc-mapping');

describe('target API doc definitions', () => {
  var targets = _(mapping.parsers).pluck('targets').flatten().value();

  it('should contain certain properties', () => {
    expect(targets).to.all.have.keys(['display', 'file', 'url']);
  });

  it('should have normalized "file" property', () => {
    expect(targets).to.all.satisfy((t) => {
      return t.file.match(/^(iap|iwp)-(server|client)-([a-z0-9_]+)$/);
    });
  });
});
