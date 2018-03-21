var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
   return [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr.unshift(el);
}
