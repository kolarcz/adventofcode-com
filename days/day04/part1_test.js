import path from 'path';
import assert from 'assert';

let script = require(__filename.replace(/_test\.js$/, '_solution.js'));

describe('examples', () => {

  it('example 1', () => {
    assert.equal(script.run('abcdef'), 609043);
  });

  it('example 2', () => {
    assert.equal(script.run('pqrstuv'), 1048970);
  });

});
