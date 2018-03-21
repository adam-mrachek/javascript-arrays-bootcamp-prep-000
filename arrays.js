var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
   return arr.unshift(el);
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
}

var array = [1, 2, 3, 4, 5];

console.log(addElementToBeginningOfArray(array, 7));
