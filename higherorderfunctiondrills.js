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


function hazardWarningCreator (typeOfWarning) {
    let warningCounter = 0;
    return function(location) {
        ++warningCounter
        console.log(`There is a ${typeOfWarning} hazard at ${location}!`);
        if(warningCounter === 1) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time today!`);
        } else if (warningCounter === 0 || warningCounter >= 2) {
            console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} times today!`)
        }
        
    }
}

const rocksWarning = hazardWarningCreator("Rocks on the road");
rocksWarning("Dog");

const hailStormWarning = hazardWarningCreator("Hail");
hailStormWarning("Zimbabwe");

const armageddonWarning = hazardWarningCreator("End of World");
armageddonWarning("Earth");
armageddonWarning("Earth");
armageddonWarning("Earth");