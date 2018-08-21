'use strict';

function repeat(fn, num) {
  for (let i = 0; i < num; i++) {
    fn();
  }
}

function hello() {
  console.log('hello');
}

function goodBye() {
  console.log('goodbye');
}

//repeat(hello, 5);
//repeat(goodBye, 5);

function filter(arr, fn) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// function elementLengthGreaterThan3(word) {
//   if (word.length > 3) {
//     return true;
//   } else {
//     return false;
//   }
// }

// filter(["dog", "poop", "zoop", "sdlfldsflad"], elementLengthGreaterThan3);
