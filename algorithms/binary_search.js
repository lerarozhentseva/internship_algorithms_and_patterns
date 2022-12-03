function binary_search (list, item) {
  let low = 0; // начало списка
  let high = list.length - 1; // конец списка

  while (low <= high) {
    const mid = low + high;
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  } return null;
}

const list = [1, 3, 5, 7, 9];
console.log(binary_search(list, 7));
console.log(binary_search(list, 2));
// возвращает позицию найденого эл-та или null