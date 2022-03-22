const assert = require('assert');
const main = require('../main');

let arrDna;
let pAequorObj;

describe('The returnRandBase function ', () => {
  it ('returns "A", "C", "G" or "T"', () => {
    let result = main.returnRandBase()
    assert.ok(result === 'A' || result === 'C' || result === 'G' || result === 'T');
  });
});

describe('The mockUp function ', () => {
  before(() => {
    arrDna = main.mockUpStrand();
  });
  it ('returns an array of 15 items', function() {
    assert.ok(arrDna.length === 15);
  });
  it('contains "A", "C", "G" or "T" for each item in the array', function() {
    let correctMatches = 0;
    for (let base of arrDna) {
      if (base === 'A' || base === 'C' || base === 'G' || base === 'T') {
        correctMatches ++;
      }
    }
    assert.ok(correctMatches === 15);
  });
});

describe('The pAequor factory function', () => {
  before(() => {
    pAequorObj = main.pAequorFactory(10, ['A', 'C', 'G', 'T', 'T', 'G', 'A', 'C', 'T', 'G', 'G', 'T', 'A', 'A', 'G']);
  });

  describe('should return the following correct properties for the pAqueory object instances:', () => {
    it('specimen number', () => {
      let specimenNum = pAequorObj.specimenNum;
      assert.ok(specimenNum === 10);
    });
    it('dna', () => {
      let dna = pAequorObj.dna;
      let fakeDnaAnswer = ['A', 'C', 'G', 'T', 'T', 'G', 'A', 'C', 'T', 'G', 'G', 'T', 'A', 'A', 'G'];
      assert.ok(dna === fakeDnaAnswer);
    })
  });

  describe('should check if the following methods work:', () => {
    it('', () => {

    });
  })
});