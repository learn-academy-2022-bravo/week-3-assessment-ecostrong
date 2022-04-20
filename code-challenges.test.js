// ASSESSMENT 3: Coding Practical Questions with Jest
// const { expect } = require("@jest/globals");
// const { number } = require("yargs");
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.
//This is a test for a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence
// describe a method that list the name of the function or the naming of the particular test

describe("fibonacciSequence",() => {
     it ("takes in a number greater then 2 and returns an array that length containing the numbers of the Fibonacci Sequence", () => {
         expect (fibonacciSequence(6)).toEqual([1, 1, 2, 3, 5,8])
         expect (fibonacciSequence(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21,34,55])
  })
})

// FAIL  ./code-challenges.test.js
// fibonnaci
//   ✕ takes in a number greater then 2 and returns an array that length containing the numbers of the Fibonacci Sequence
// ● fibonnaci › takes in a number greater then 2 and returns an array that length containing the numbers of the Fibonacci Sequence
//   ReferenceError: myFibonacci is not defined

// b) Create the function that makes the test pass.

//Pseudo Code
// Create a function takes in a number, x
// the number must be greater than 2, x > 2
// in that function create an array that can have numbers in it.
// returns an array that lenght
// the length is the index, so what ever the number is the index has to match the lenght of the array
// the length of Fibonacci sequence
// What is Fibonacci sequence? Googled: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]
//Since [1,1] this means the next items in the array are i-1,i-2
//Access indexes with the variable i and addition. 
//Output is an array the length of the numbers in Fibonacci sequence 
// Note: Having trouble running test. 

const fibonacciSequence = (number) => {
  let myArray = [1, 1]
  for (let i = 1;  i < number; i++) {
    myArray.push(myArray[i] + myArray [i - 1])
  }
  return myArray
}

// //Output:
// - Expected  - 0
//     + Received  + 1
//     @@ -3,6 +3,7 @@
//         1,
//         2,
//         3,
//         5,
//         8,
//     +   13,
      
//---------------------------------------------------------------------------------------------------------------------------------------------


// // --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola" ]
// // // //     // Expected output: [-9, 7, 9, 199]
const fullArr2= ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// //     //Expected output: [-823, 7, 23]

// //Pseudo Code
// //create a function that takes in an array
// //returns a new array of only odd numbers
// //odd numbers are sorted from least to greatest


// // // a) Create a test with expect statements for each of the variables provided.

describe("onlyOdds", () => {
const newArray1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const newArray2= ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
it ("takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
  expect(onlyOdds(newArray1)).toEqual([-9, 7, 9, 199])
  expect(onlyOdds(newArray2)).toEqual([-823, 7, 23])
  })
})

// //  FAIL  ./code-challenges.test.js
// //   onlyOdds
// //     ✕ takes in an array and retruns a new array of only odd numbers sorted from least to greatest (1 ms)

// //   ● onlyOdds › takes in an array and retruns a new array of only odd numbers sorted from least to greatest

// //     ReferenceError: onlyOdds is not defined

// // // b) Create the function that makes the test pass.

// //Psuedo Code
// //Create a function that takes in an array 
// //It iterates on the condition of typeof ==="number"
// //.sort((a,b) => a ) 
// //To get odd numbers use modulo 2 
// //use .sort to sort the array 
// //sort from least to greatest 

const onlyOdds = (array) => {
  return array.filter(value => {
    if (value % 2 !== 0 && typeof (value) === "number") {
      return array
    }
  }).sort((a, b) => a - b)
}

// PASS  ./code-challenges.test.js
// onlyOdds
//   ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest (1 ms)


//__________________________________________________________________________________________________________________________________________________

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

const numbersToAdd1 = [2,4,45,9]
// // // //  Excpected output: [2, 6, 51, 60]
const numbersToAdd2 = [0, 7, -8, 12]
// // // // Expected output: [0, 7, -1, 11]
const numbersToAdd3 = []
// // // Expected output: []

//Pseudo Code:
// Create a function that takes in an array
// It returns an array of the accumulating sum
// This means it should add up all the numbers in the array +,+
// The array should be all numbers
// If array is empty, should return and empty array, so an if else than statement

// // // a) Create a test with expect statements for each of the variables provided.

describe ("sumAcc", () => { 
  const numbersToAdd1 = [2,4,45,9]
  const numbersToAdd2 = [0, 7, -8, 12]
  const numbersToAdd3 = []

  it ("that takes in an array and returns an array of the accumulating sum or an empty array", () => {
    expect(sumAcc(numbersToAdd1)).toEqual([2,6,51,60])
    expect(sumAcc(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(sumAcc(numbersToAdd3)).toEqual([])
  })
})

// FAIL  ./code-challenges.test.js
//   sumAcc
//     ✕ that takes in an array and returns an array of the accumulating sum or an empty array

//   ● sumAcc › that takes in an array and returns an array of the accumulating sum or an empty array

//     ReferenceError: sumAcc is not defined


// //b. Create the function that makes the test passs)
//Psuedo Code
// create a function 
// takes in an array 
// iteration is the same length as the input map 
// Input: [2,4,45,9] [0, 7, -8, 12] 
// Output: [2,4,45,9] [0, 7, -8, 12] 

const sumAcc = (array) => {
    let sumArr = []
    return array.map((value,index) => { 
      if (index > 0) { 
        return sumArr =value + sumArr
      } else {
        return sumArr = value
      }
    }) 
  }

//   PASS  ./code-challenges.test.js
//   sumAcc
//     ✓ that takes in an array and returns an array of the accumulating sum or an empty array (2 ms)

// Test Suites: 1 passed, 1 total