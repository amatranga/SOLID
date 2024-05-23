class Product {
  constructor(title, price, taxRate) {
    this.title = title;
    this.price = price;
    this.taxRate = taxRate;
  }

  calculateTax() {
    return this.price * this.taxRate;
  }
}

const table = new Product('Fancy Table', 100, 0.1);

console.log(table.calculateTax());
// 10