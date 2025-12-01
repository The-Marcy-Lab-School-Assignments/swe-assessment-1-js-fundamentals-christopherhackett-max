/*
  Write your functions here!

  Each function should:
  - Be exported so tests can use it
  - Follow the exact specifications
  - Pass all test cases
  - Use descriptive variable names
  - Have no linting errors
*/

// ============================================
// Question 1: petJudger
// ============================================

const petJudger = (petBreed, petName) => {
  if (petBreed === undefined || petName === undefined) {
    console.log(`Missing information. Please provide a valid pet.`)
  } else if (petBreed === 'dog') {
    console.log(`I love dogs! ${petName} is so cute!`)
  } else if (petBreed === 'cat') {
    console.log(`I love cats! ${petName} is so cute!`)
  } else if (petBreed === 'turtle') {
    console.log(`Who doesn't love a good turtle? ${petName} is the tops.`)
  } else if (petBreed === 'snake') {
    console.log(`Not a fan, please take ${petName} and leave.`)
  } else {
    console.log(`What an...interesting pet.`)
  }
};

// ============================================
// Question 2: loopFromOneUpToAnother
// ============================================

const loopFromOneUpToAnother = (firstNum, secondNum) => {
  for (let i = firstNum; i < secondNum; i++) {
    console.log(i)
  }
};

// ============================================
// Question 3: shoutEveryLetterForLoop
// ============================================

const shoutEveryLetterForLoop = (str) => {
  for (const letter of str) {
    console.log(`${letter.toUpperCase()}!`)
  }
};

// ============================================
// Question 4: letterCaseCounts
// ============================================

const letterCaseCounts = (str) => {
  const obj = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  for (const char of str) {
    if (alphabet.includes(char)) {
      obj.lowercase++
    } else if (alphabet.includes(char.toLowerCase())) {
      obj.uppercase++
    } else {
      obj.neither++
    }
  }
  return obj
};

// ============================================
// Question 5: getNamesOfGreedyGnomes
// ============================================

const getNamesOfGreedyGnomes = (gnomes) => {
  const newArr = []
  if (gnomes.length === 0) {
    return newArr
  }
  for (const gnome of gnomes) {
    if (gnome.stolenDecorations.length > 1) {
      newArr.push(gnome.name)
    }
  }
  return newArr
};

// ============================================
// Exports
// ============================================

module.exports = {
  petJudger,
  loopFromOneUpToAnother,
  shoutEveryLetterForLoop,
  letterCaseCounts,
  getNamesOfGreedyGnomes,
};
