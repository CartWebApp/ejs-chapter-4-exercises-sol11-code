function range(start, end, step = 1) {
  let list = [];
  for (let i = 1; i <= end; i++) {
    list.push(i);
  }
  for (let i = 1; i >= end; i++) {
    list.push(i);
  }
  return list;
}

function sum(numbers) {
  let list = [];
  for (let i = 1; i <= numbers; i++){
    list.push(i);
  }
}






// tests
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55
