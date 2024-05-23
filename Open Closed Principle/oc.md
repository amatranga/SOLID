# Open Closed Principle

Classes should be open for extension, but closed for modification. In other words, we should be able to add new features or extend existing logic without changing existing logic.

## oc-bad.js

The `handleTypes` function violates the open closed principle because any time we add a new type, we have to update the function to expect the new type.

## oc-good.js

We can instead move the handle logic into the class. This means that `handleTypes` will only ever have to call the class' `handle` method. The result is that we can add new types without touching the `handleTypes` method.