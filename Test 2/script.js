// Palindrome

const input = document.getElementById('input');
const display = document.getElementById('display');

function reverseString(str) {
  return str.split('').reverse().join('');
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  
  if(value === reverse) {
    display.innerHTML = 'PALINDROME';
  } else{
    display.innerHTML = 'Not a PALINDROME'
  }
  input.value = '';
}

// 3 Concat two arrays

const arr1 = [1,2,3];
const arr2 = [4,5];

function addArray() {
  return arr1.concat(arr2);
}

console.log(`Concat of two Arrays ${addArray()}`);

// 1 Sum of Array

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(`Sum of an Array ${sumArray(numbers)}`);


// 2 

const arr = [1,2,3,4,5,5,];

function uniqueArray() {
  const values = new Set(arr);
  console.log(values);
}

uniqueArray();