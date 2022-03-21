// Returns a random DNA base (i.e. returns a random letter: A, T, C or G)
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases (returns an array like ['A', 'G', 'T', 'C' , 'C', .... and up to 15 items])
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, arrOfDnaBases) => {
  const organismObj = {
    specimenNum: number,
    dna: arrOfDnaBases,

    mutate() { // Takes the DNA array and then chooses a random index. The letter for that index is extracted and it is swapped out for one of the DNA bases
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
      return 'compare dna function works';
    }
  }

  return organismObj;
}

let base1 = mockUpStrand();
let base2 = mockUpStrand();
let pAequor1 = pAequorFactory(1, base1);
let pAequor2 = pAequorFactory(1, base2);
/*console.log(`old dna: ${pAequor1.dna}`);
console.log(`new dna: ${pAequor1.mutate()}`);*/
console.log(pAequor1.compareDNA(pAequor1, pAequor2));