'use strict';

function makeList(item1, item2, item3) {
  let newAr = [];
  newAr.push(item1, item2, item3);
  return newAr;
}

function addToList(list, item) {
  let newAr = list;
  newAr.push(item);
  return newAr;
}

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

function findLength(array) {
  return array.length;
}

function accessLastItem(array) {
  return array[array.length - 1];
}

function minusLastItem(array) {
  let sliced = array.slice(0, array.length - 1);
  return sliced;
}

function lastThreeItems(array) {
  let sliced = array.slice(array.length -3, array.length);
  return sliced;
}

function copyFirstHalf(array) {
  let sliced = array.slice(0, Math.floor(array.length /2));
  return sliced;
}

function squares(array) {
  let newArr = array.map(item => item * item);
  return newArr;
}

function greatestToLeast(array) {
  let newArr = array.sort((a, b) => b - a);
  return newArr;
}

function shortWords(array) {
  let newArr = array.filter(item => item.length < 5);
  return newArr;
}

// function max(numbers) {
//   let currentMax = numbers[0];
//   numbers.forEach((num, index) => {
//     if(index !== 0 && num > currentMax) {
//       currentMax = num;
//     }
//   });
//   return currentMax;
// }

// function min(numbers) {
//   let currentMin = numbers[0];
//   numbers.forEach((num, index) => {
//     if(index !== 0 && num < currentMin) {
//       currentMin = num;
//     }
//   });
//   return currentMin;
// }

function average(numbers) {
  let firstNum = numbers[0];
  let dog = numbers.forEach((num, index) => {
    if(index !== 0) {
      firstNum += num;
    }
  });
  return firstNum/numbers.length;
}

function fizzBuzz(countTo) {
  let newAr = [];
  for(let i = 1; i < countTo; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
      newAr.push('fizzbuzz');
    } else if (i % 3 === 0) {
      newAr.push('fizz');
    } else if (i % 5 === 0) {
      newAr.push('buzz');
    } else {
      newAr.push(i);
    }
  }
  return newAr;
}

function max(numbers) {
  let currentMax = numbers[0];
  var i = numbers[0];
  while(i < numbers.length) {
    if(currentMax < numbers[i]) {
      currentMax = numbers[i];
    }
    i++;
  }
  return currentMax;
}


