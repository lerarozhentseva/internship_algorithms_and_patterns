function countDown(i) {
  console.log(i);
  if (i <= 0) { // базовый случай
    return;
  }
  countDown(i - 1); // рекурсивный случай
}

console.log(countDown(6));



// пример на перебор объекта с помощью рекурсии
const users = {
  'ivanov': {
    age: 25,
    parents: {
      'ivanov-1': {
        age: 55,
      },
      'ivanov-2': {
        age: 49,
        parents: {
          'sergeev-1': {}

        }
      }
    }
  },
  'sidorov': {
    age: 19,
    parents: {
      'sidorov-1': {
        age: 35,
      },
      'sidorov-2': {
        age: 40,
      }
    }
  },
}

function userParentRecursion (obj) {
  if (obj.parents !==undefined) {
    for (let key in obj.parents) {
      console.log(key);
      userParentRecursion(obj.parents[key]);
    }
  }
}
for (let key in users) {
  userParentRecursion(users[key]);
}

// пример на факториал с циклом
function factorial (n) {
  let res = 1;
  for (let i=1; i<=n; i++){
    res *= i;
  }
  console.log(res);
}

console.log(factorial(5))

// пример факториала с рекурсией
let newRes = 1;
function reqursionFact (n) {
  if (n===0) return;
  newRes *=n;
  reqursionFact(n-1);
}
reqursionFact(5)
console.log(newRes);
