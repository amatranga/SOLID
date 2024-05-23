# Single Responsibility Principle

Every entity should have only a single responsibility.

## srp-bad.js

The `Product` class has an unrelated function `calculateTax`. If for any reason we need to change how this function works, the **entire** class is going to recompile.

## srp-good.js

We can change the `Product` class so it is in line with the single responsibility principle in 2 steps
1. We define two functions on the `Product` class: 1. `getPrice` whicvh returns the product's price and 2. `getTaxRate` which returns the product's tax rate.
2. We can then create a class `TaxCalculator` which has one method: `calculateTax`. This method takes a product, and returns that product's tax by calling the `getPrice` and `getTaxRate` methods on the product.

Additionally, the taxRate technically should not be on the product, as this can vary depending on country, price, product category, etc...

Now, if we ever need to make a change to how tax is calculated, only the `TaxCalculator` class will recompile.