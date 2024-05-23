class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  set width(width) {
    this._width = width;
  }
  get width() {
    return this._width;
  }
  set height(height) {
    this._height = height;
  }
  get height() {
    return this._height;
  }
  get area() {
    return this._width * this._height;
  }

  toString() {
    return `${this._width} x ${this._height}`;
  }
}

class Square_1 extends Rectangle {
  constructor(size) {
    super(size, size);
  }
}

class Square_2 extends Rectangle {
  constructor(size) {
    super(size, size);
  }

  set width(value) {
    this._width = this._height = value
  }
  get width() {
    return this._width;
  }
  set height(value) {
    this._width = this._height = value;
  }
  get height() {
    return this._height;
  }
}

const logArea = function(rect) {
  let width = rect._width;
  rect.height = 10;    // set rectangle's height to 10
  console.log(`Expected area of ${10 * width}, got ${rect.area}` );
}

const rect = new Rectangle(2, 3);
const sq1 = new Square_1(5);
console.log(rect.toString());   // 2 x 3
console.log(sq1.toString());    // 5 x 5

sq1.width = 1;
console.log(sq1.toString());    // 1 x 5      We should get 1 x 1

const sq2 = new Square_2(5);
sq2.width = 1;
console.log(sq2.toString());    // 1 x 1

const rect2 = new Rectangle(2, 3);
const sq3 = new Square_2(5);
logArea(rect2);                 // Expected area of 20, got 20
logArea(sq3);                   // Expected area of 50, got 100       It should expect 100