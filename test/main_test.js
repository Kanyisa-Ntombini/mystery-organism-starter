const assert = require('assert');
const main = require('../main');

describe('The returnRandBase function', () => {
  it ('returns "A", "C", "G" or "T"', () => {
    //setup
    const inputBase = main.returnRandBase();
    const expectedResult = true;

    //exercise
    const result = inputBase === 'A' || inputBase === 'C' || inputBase === 'G' || inputBase === 'T';

    //verify
    assert.strictEqual(result, expectedResult);
  });
});


describe('The mockUp function ', () => {
  //setup
  let inputArr, expectedResult;

  before(() => {
    inputArr = main.mockUpStrand();
    expectedResult = 15;
  });
  it ('returns an array of 15 items', function() {
    //exercise
    const result = inputArr.length;

    //verify
    assert.strictEqual(result, expectedResult);
  });
  it('contains "A", "C", "G" or "T" for each item in the array', function() {
    //setup
    let correctMatches = 0;

    //exercise
    for (let base of inputArr) {
      if (base === 'A' || base === 'C' || base === 'G' || base === 'T') {
        correctMatches ++;
      }
    }

    //verify
    assert.strictEqual(correctMatches, expectedResult);
  });
});

describe('The pAequor factory function', () => {
  //set up
  let pAequorObj, dna, num;
  before(() => {
    dna = ['A', 'C', 'G', 'T', 'T', 'G', 'A', 'C', 'T', 'G', 'G', 'T', 'A', 'A', 'G'];
    num = 10;
    pAequorObj = main.pAequorFactory(num, dna);
  });

  describe('should return the following correct properties for the pAqueory object instances:', () => {
    it('.specimenNum', () => {
      //setup
      const expectedResult = 10;

      //exercise
      const result = pAequorObj.specimenNum;
      
      //verify
      assert.strictEqual(result, expectedResult);
    });
    it('.dna', () => {
      //setup
      let expectedResult = ['A', 'C', 'G', 'T', 'T', 'G', 'A', 'C', 'T', 'G', 'G', 'T', 'A', 'A', 'G'];
      
      //exercise
      let result = pAequorObj.dna;
      
      assert.deepEqual(result, expectedResult);
    });
  });

  /*describe('should check if the following methods work:', () => {
    //mututate()
    //compareDNA(obj1, obj2)
    //willLikelySurvive()
    //completentStrand()

    it('', () => {

    });
  })*/
});

describe('The organismsThatWillSurvive function ', () => {
  //set up
  let inputArr;
  before(() => {
    inputArr = main.organismsThatWillSurvive(5);
  });
  it('returns 5 organisms that have a chance of survival', ()=> {
    //setup
    const expectedResult = 5;
    //exercise
    let result = inputArr.length;
    assert.strictEqual(result, expectedResult);
  });
  
  it('all willLikelySurvive methods return true', () => {
    //setup
    const expectedResult = 5;
    let countCorrectMatches = 0;
    //exercise
    for (let obj of inputArr) {
      if (obj.willLikelySurvive() === true) {
        countCorrectMatches ++;
      }
    }
    //verify
    assert.strictEqual(countCorrectMatches, expectedResult);
  });
});