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


