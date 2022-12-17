class MyIterator {
  constructor(data) {
    this.index=0;
    this.data=data;
  }

// итерируемый символ
  [Symbol.iterator]() {
    return {
      next: () => { // у объекта обязательно должен быть метод next!
        if (this.index < this.data.length) {
          return {
            value: this.data[this.index++],
            done:false // т.к. данные еще есть
          }
        } else {
          this.index=0;
          return {
            value: void 0,
            done:true // дошли до конца массива эл-в
          }
        }
      }
    }
  }
}

const iterator = new MyIterator(['This', 'is', 'iterator']);
for (const val of iterator) {
  console.log('Value: ', val)
}