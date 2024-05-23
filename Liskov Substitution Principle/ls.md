# Liskov Substitution Principle

Objects of a superclass shall be replaceable with objects of its subclasses without breaking the application.

# ls-bad.js

In this case, we want to make a `Rectangle` class and a `Square` class. Both should have the same properties.
We have created a rectangle class, and a square class which inherits from rectangle. The only difference is that a square is a rectangle where its height and width are equivalent.
When we test this with `rect` and `sq1`, we see that logging works as expected. We get a 2 x 3 rectangle, and a 5 x 5 square. **However** when we attempt to modify `sq1` by setting its width to 1, we get 1 x 5. To fix this, we add setters and getters to the square class (`sq2`) to ensure that width and height are always equivalent. Now, when we set `sq2`'s width to 1, we get a 1 x 1 square from `toString`. 
Now, let's define a function (`logArea`) that takes any rectangle, sets its height to 10, and logs the area of the rectangle. When we pass a square (`sq3`) to this function, we get that the expected area is 50. We can see that the that `logArea` is specifically made for rectangles, and we are unable to substitute the `Square` subclass in.

# ls-good.js

In this case, the best approach is to separate `Rectangle` and `Square` out into separate classes.