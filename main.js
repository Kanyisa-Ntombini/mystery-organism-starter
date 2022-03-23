/* The returnRandBase randomly returns 'A', 'T', 'C' and 'G' from the array
 */
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

/* This function creates a DNA strand by calling the returnRandBase function
15 times and pushing each base into an array
 */
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

/* This is a factory function that returns an object which represents a pAequor organism
 */
const pAequorFactory = (number, arrOfDnaBases) => {
  const organismObj = {
    specimenNum: number,
    dna: arrOfDnaBases,

    mutate() { 
      /* The mutate function takes the DNA array and then chooses a random 
      index. The letter for that index is extracted and it is swapped out 
      for one of three other DNA bases
      */
      let randomIndex = Math.floor(Math.random() * this.dna.length);
      let baseToRemove = this.dna[randomIndex];
      let newBase = returnRandBase();

      while (newBase === baseToRemove) {
        newBase = returnRandBase();
      }

      this.dna.splice(randomIndex, 1, newBase);
      return this.dna;
    }, 

    compareDNA(obj1, obj2) {
      /* The  compare DNA function takes in two instances of the pAequor object.
      The DNA of each organism is extracted the bases of each object are compared.
      The percentage of the bases that are the same are given */
      let count = 0;
      for (let i=0; i<obj1.dna.length; i++) {
        if (obj1.dna[i] === obj2.dna[i]) {
          count ++;
        }
      }
      let percentage = count/obj1.dna.length*100;

      console.log(`The percentage of DNA that is common in organisms ${obj1.specimenNum} and ${obj2.specimenNum} is ${percentage.toFixed(2)}%`)
      return '';
    },

    willLikelySurvive() {
      /* The willLikelySurvive function returns true if at least 60% of the
       organism's dna contains 'C' or 'G' bases */
      let count = 0;
      for (let base of this.dna) {
        if (base === 'C' || base === 'G') {
          count ++;
        }
      }
      let percentage = count/this.dna.length*100;
      
      if (percentage >= 60) {
        return true;
      }
      return false;
    },

    complementStrand() {
      /* Produces the complement DNA strand for the current organism obj. 
      That means A is the complement of T and vice versa and C is the complement
      of G and vice versa */
      let complementDnaStrand = [];
      for (let base of this.dna) {
        if (base === 'A') {
          complementDnaStrand.push('T');
        } else if (base === 'T') {
          complementDnaStrand.push('A');
        } else if (base === 'C') {
          complementDnaStrand.push('G');
        } else if (base === 'G') {
          complementDnaStrand.push('C');
        }
      }
      console.log(this.dna);
      console.log(complementDnaStrand);

      return 'complement function works';
    }
  }
  return organismObj;
}

/* The organismsThatWillSurvive function takes in a number as a parameter. An array is created
and pAequor objects that return true for willLikelySurvive are created and 
inserted into the array. The number of organisms created is determined by the parameter of the function. */
const organismsThatWillSurvive = num => {
  let arrOrganisms = [];
  let i = 0;
  while (i < num) {
    let createOrganism = pAequorFactory(i+1, mockUpStrand());
    if (createOrganism.willLikelySurvive() === true) {
      arrOrganisms.push(createOrganism);
      i++;
    }
  }
  return arrOrganisms;
}

let base1 = mockUpStrand();
let base2 = mockUpStrand();
let pAequor1 = pAequorFactory(1, base1);
let pAequor2 = pAequorFactory(2, base2);
//console.log(pAequor1.complementStrand());

module.exports = {returnRandBase, mockUpStrand, pAequorFactory, organismsThatWillSurvive};