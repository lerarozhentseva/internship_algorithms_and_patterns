class MyMath {
  constructor(initialValue=0) {
    this.num=initialValue;
  }

  square() {
    return this.num**2;
  }
  cube() {
    return this.num**3;
  }
}

class Command {
  constructor(subject) {
    this.subject=subject; // то над чем будем формировать абстрактную оболочку
    this.commandExecuted=[]; //список командо, которые до этого были вызваны
  }
  execute(command) {
    this.commandExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(3));
console.log(x.execute('square'));
console.log(x.execute('cube'));
console.log(x.commandExecuted)
