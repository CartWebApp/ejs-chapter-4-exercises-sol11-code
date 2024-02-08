function reverseArray(arr) {
  let list = [];
  for (let i = arr.length - 1; i--){
    list.push(arr[i]);
  }
  return list;
}

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let
  }
  return arr;
}

// tests 
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]