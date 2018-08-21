'use strict';

function repeat(fn, num) {
  for(let i = 0; i < num; i++) {
    fn();
  }
}

function hello() {
  console.log('hello');
}

function goodBye() {
  console.log('goodbye');
}

repeat(hello, 5);