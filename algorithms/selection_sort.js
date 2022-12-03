// наименьший эл-нт массива
function findSmallest (arr) {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i=0; i<arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  } return smallestIndex;
}

// ф-ция сортировки выбором
const selectionSort = (array) => {
  const newArr = [];
  const copyArr = [...array];

  for (let i = 0; i < array.length; i++) {
    const smallest = findSmallest(copyArr);
    newArr.push(copyArr.splice(smallest, 1)[0]); // добавление самого маленького эл-та в новый массив
  }
  return newArr;
};

console.log(selectionSort([5, 3, 6, 2, 10]))