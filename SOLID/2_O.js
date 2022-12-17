// Open Close Principle
// классы должны быть открыты для расширения, но закрыты для модицикации

class Square {
  constructor(size) {
    this.type = 'square';
    this.size = size;
  }
}

class Circle {
  constructor(radius) {
    this.type = 'circle';
    this.radius = radius;
  }
}

class AreaCalc {
  constructor(shapes=[]) {
    this.shapes = shapes;
  }

  // если теперь надо будет добавить другой класс фигуры, то для вычисления площади ее, надо модифицировать этот класс. что делать НЕЛЬЗЯ!
  sum() {
    return this.shapes.reduce((acc, shape) => {
      if (shape.type === 'circle') {
        acc += (shape.radius ** 2) * Math.PI;
      } else if (shape.type === 'square') {
        acc += (shape.size ** 2);
      }
      return acc;
    }, 0)
  }
}

const calc = new AreaCalc([new Circle(10), new Square(4)]);
console.log(calc.sum());


// РЕШЕНИЕ - создать базовый класс
class Shape {
  area() {
    throw new Error ('Area method should be implemented')
  }
}

class Square2 extends Shape{
  constructor(size) {
    super();
    this.size = size;
  }
  area() {
    return this.size ** 2;
  }
}

class Circle2 extends Shape{
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return (this.radius ** 2) * Math.PI;
  }
}

class Rect extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class AreaCalc2 {
  constructor(shapes=[]) {
    this.shapes = shapes;
  }

  sum() {
    return this.shapes.reduce((acc, shape) => {
      acc += shape.area();
      return acc;
    }, 0)
  }
}

const calc2 = new AreaCalc2([new Circle2(10), new Square2(4), new Rect(12,4)]);
console.log(calc2.sum());



