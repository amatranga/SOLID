class Product {
  constructor(title, price, taxRate) {
    this.title = title;
    this.price = price;
    this.taxRate = taxRate;
  }

  getPrice() {
    return this.price;
  }

  getTaxRate() {
    return this.taxRate;
  }
}

const TAX_RATES = {
  'US': {
    rate: 0.1,
    limit: 0,
  },
  'UK': {
    rate: 0.2,
    limit: 60,
  },
  'EU': {
    rate: 0.3,
    limit: 10,
  },
}

class TaxCalculator {
  static calculateTax(product, taxConfig) {
    const price = product.getPrice();
    const { rate, limit } = taxConfig;

    if (limit < price) {
      return price * rate;
    }

    return 0;
  }
}

const table = new table('Fancy Table', 50, 0.1);
const US_tablePrice = TaxCalculator.calculateTax(table, TAX_RATES.US);
const UK_tablePrice = TaxCalculator.calculateTax(table, TAX_RATES.UK);
const EU_tablePrice = TaxCalculator.calculateTax(table, TAX_RATES.EU);

console.log(US_tablePrice);   // 5
console.log(UK_tablePrice)    // 0
console.log(EU_tablePrice);   // 15