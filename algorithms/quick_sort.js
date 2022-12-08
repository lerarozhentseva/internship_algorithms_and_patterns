function sum (arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total+=arr[i];
  } return total;
}
console.log(sum([1, 2, 3, 4]));

function quickSort (array) {
  if (array.length < 2) {
    return array;
  } else {
    const pivot = array[0];
    const less = array.slice(1).filter((i) => i<=pivot);
    const greater = array.slice(1).filter((i) => i>pivot);

    return quickSort(less) + [pivot] + quickSort(greater);
  }
}

console.log(quickSort([10, 5, 2, 3]))