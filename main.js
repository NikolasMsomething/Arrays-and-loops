function makeList(item1, item2, item3) {
    let newAr = [];
    newAr.push(item1, item2, item3)
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