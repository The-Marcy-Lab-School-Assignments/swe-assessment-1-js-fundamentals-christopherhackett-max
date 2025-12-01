# Mod 1 Assessment - Short Response Section

Write your responses directly in this file. Follow markdown formatting guidelines.

---

## Section 1: Short Response

### Question 1
This code will give you a `ReferenceError`.

You'd get a ReferenceError because you are trying to access the variable `currentStatus` outside of the if statement when it's only in the `block scope` of said if statement.

The best way to fix this error would be to define `currentStatus` outside of the if statement first.

### Question 2
The following code will log `Micheal Jordan`.

This is because objects in javascript are a reference type. Meaning that their values aren't stored directly in the variable. Instead it holds a reference to the location in the memory where the object is stored.

In this instance `theGOAT` is equal to `bestPlayer` which is an object, meaning they are both accessing the same reference. 

So when you change `bestPlayer.name` you're also changing `theGOAT.name`

### Question 3
The following code will log the following strings: 
```js
"Paul is the hardest working person in the room."
"Laisha is the hardest working person in the room."
```
This is because in the `scope` of the function `shoutOut`, `theHustler` is Paul while in the scope outside of the function and is in the `global scope`, `theHustler` is Laisha. So if you call the function you will get Paul, and if you log outside of the function you will get Laisha.
### Question 4
The purpose of `rest parameters` is to allow your function to accept an unlimited number of arguments and hold them as an array. This give a way to deal with functions where the number of arguments is unknown.

You turn a parameter into a rest parameter by using the `...` operator. Make sure that your rest parameter is the last parameter in your function.

An example of using a rest parameter is this: 
```js
const sum = (...nums) => {
    let total = 0;
    for (const arg of nums) {
        total += arg;
    }
    return total
}
sum(1, 5, 7)
//returns 13
sum(11, 3, 15, 20, 8)
//returns 57
sum(5)
//returns 5
```

### Question 5
`Scope` is the area in which values and expressions can be accessed. There is `Global Scope`. Anything declared in the global scope can be accessed from anywhere in the program. There is `Function Scope`. Anything declared in the function scope can only be accessed in that function. And there is `Block Scope`. Anything declared within curly braces `{}` can only be accessed in that block.

You can think of scope like one big building. `Global Scope` would be the enitre building. `Function Scope` would be like every individual floor of that building. And `Block Scope` would be each room on a floor.

An example of scope would be:
``` js
const names = () {
    const name = 'Adam'
    console.log(name)
    //logs 'Adam'
}

console.log(name)
//gives ReferenceError
```
The variable `name` is declared inside of the function `names`. Meaning inside the function you can access name but if you try to do it outside the function you can't.

### Question 6
`Modules` are files containing related code, which can be export and imported into other files.

Modules are used as a way to organize your code by breaking it up into smaller sections.

An example of using modules would be:
```js
//names.js
const firstName = () => {
    //function code
}

const lastName = () => {
    //function code
}

module.exports = {
firstName,
lastName,
}

//main.js
const names = require("./names.js");

const fullName () => {
    return firstName(), lastName()
}
```

The ``firstName()`` and ``lastName()`` are being **exported** from the ``names.js`` file and are being **imported** into the ``main.js`` file. Meaning that main.js now has access to those functions and can use them as normal.

### Question 7
After running the code, `fruits` will hold the values, `'apple', 'banana', 'cherry', and 'date'`. While `fruitsMinusOne` will hold the values, `'apple', 'banana', and 'cherry'`.

We need to make a copy because arrays are reference types: the parameter holds the reference to the provided array, not a copy of the array's data. Therefore, mutating the input array would cause the side effect of mutating a value outside of the function's scope, making the function impure.

Lets say you were using an array in a huge project with multiple functions that interact with that array. If you mutate that array, you'll also be mutating the output for all of those functions which could destroy your code.

### Question 8
To represent a single item in the cart I would use an object. This is because an item could have multiple properties that need to be accessed such as its name, quantity, and price.

To represent the entire shopping cart I would use an array filled with each individual item. This is because arrays can store many elements of any data type. Allowing you to store every item you need. As well as being able to iterate through each object in the array, meaning the ability to easily access every item in the cart.

An example of this could be: 
```js
const shoppingCart = [{
    itemName: 'chips',
    quantity: 5,
    priceEach: 4.99
}, {
    itemName: 'orange juice',
    quantity: 2,
    priceEach: 8.99
}, {
    itemName: 'gum',
    quantity: 1,
    priceEach: 2.75
}]
```
