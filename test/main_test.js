const assert = require('assert');
const main = require('../main');

describe('The returnRandBase function ', function() {
  it ('returns "A", "C", "G" or "T"', function() {
    let result = main.returnRandBase()
    assert.ok(result === 'A' || result === 'C' || result === 'G' || result === 'T');
  });
});