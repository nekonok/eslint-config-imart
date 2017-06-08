// test suite
const chai = require('chai');
let expect;
chai.use(require('chai-as-promised')); // for promise
chai.use(require('chai-things')); // for array asserting
chai.config.truncateThreshold = 0;  // disable truncating
expect = chai.expect;

// requiring
const _ = require('lodash');
const mapping = require('../lib/im-api-doc-mapping');

describe('target API doc definitions', () => {
  const targets = _(mapping.parsers).map('targets').flatten().value();

  it('should contain certain properties', () => {
    expect(targets).to.all.have.keys(['display', 'file', 'url']);
  });

  it('should have normalized "file" property', () => {
    expect(targets).to.all.satisfy(t => t.file.match(/^(iap|iwp)-(server|client)-([a-z0-9_]+)$/));
  });
});
