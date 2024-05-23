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

class Square {
  constructor(size) {
    this.size = size;
  }
  
  set size(value) {
    this._size = value;
  }
  get size() {
    return this._size;
  }
  get area() {
    return this._size * this._size;
  }

  toString() {
    return `${this._size} x ${this._size}`;
  }
}
