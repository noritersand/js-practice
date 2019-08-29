var arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.debug('before:', arr);

for (var ele in arr) {
  console.debug('- [first] ele:', ele, ', arr[ele]:', arr[ele]);
  if (ele == 2 || ele == 3 || ele == 5) {
    arr.splice(ele, 1);
  }
  console.debug('- [last] ele:', ele, ', arr[ele]:', arr[ele]);
}

console.debug('after:', arr);
