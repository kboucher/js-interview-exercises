/**
    Write a function that receives an array and returns a copy of it.

    @method copyArray
    @param {Array} array Array to be copied
    @returns {Array} Copy of `array`
 */
function copyArray(array) {
    return array.slice();
}

/**
    Write a function that receives an array and returns a modified copy (each
    element should be multiplied by two) without modifying the original array.
    Feel free to use the function you wrote in the previous exercise to handle
    the copying of the passed array.

    Example:
        array = [1, 2, 3, 4, 5]
        returnedArray = [2, 4, 6, 8, 10]

    @method copyAndDoubleArray
    @param {Array} array Array to be copied
    @returns {Array} Copy of `array` with each item multiplied by two
 */
function copyAndDoubleArray(array) {
    return array.map(item => item * 2);
}

/**
    Write a function that receives an object and returns a modified copy (each
    member value should be multiplied by two) without modifying the original
    object.

    Example:
        obj = { one: 1, two: 2, three: 3, four: 4, five: 5 }
        returnedObj = { one: 2, two: 4, three: 6, four: 8, five: 10 }

    @method copyAndDoubleObject
    @param {Object} obj Object to be copied
    @returns {Object} Copy of `obj` with each property value multiplied by two
 */
function copyAndDoubleObject(obj) {
    const copy = Object.assign({}, obj);

    Object.keys(copy).forEach(item => copy[item] *= 2)

    return copy;
}

/**
    Write a function that returns the second largest number in an array of
    numbers.

    Example:
        numbers = [2, 6, 5, 5, 6, 2, 3, 1]
        returnedNumber = 5

    @param {Array} numbers Array of numbers to evaluate
    @returns {Number} The second largest number in the array `numbers`
 */
function getSecondLargest(numbers) {
    if (!Array.isArray(numbers)) {
        return undefined;
    }

    return numbers
      .sort((a, b) => b - a)
      .filter(item => numbers[0] !== item)[0];
}

/**
    Write a function that returns the approximate area of a circle based on its
    passed-in radius (to two decimal points).

    Example:
        radius = 12
        returnedArea = 452.39

    @param {Number} radius
    @returns {Number} Approximate area of a circle
 */
function getAreaOfCircle(radius) {
    if (isNaN(radius)) {
        return undefined;
    }

    return Number(
        (Math.pow(radius, 2) * Math.PI).toFixed(2)
    );
}

/**
    In mathematics, the Fibonacci numbers, commonly denoted Fn, form a sequence
    called the Fibonacci sequence, such that each number is the sum of the two
    preceding ones, starting from 0 and 1.

    Write a function that accepts the `count` of fibonacci numbers to be returned,
    and returns an array with that many fibonacci numbers in sequence.

    @method fibonacci
    @param {Number} count
    @returns {Array} Array of `n` numbers of the fibonacci sequence
 */
function fibonacci(count) {
    let a = 0;
    let b = 1;
    let c;

    if (!count || count < 1) return [];
    if (count === 1) return [a];

    let fibonacciNumbers = [a, b];

    for (let i = 2; i < count; i++) {
        c = a + b;
        fibonacciNumbers.push(c);
        a = b;
        b = c;
    }

    return fibonacciNumbers;
}

/**
    In mathematics, the factorial of a positive integer _n_, denoted by _n!_, is
    the product of all positive integers less than or equal to _n_.

    Write a function that returns the factorial of any number (_n_) passed to
    it. (You can assume inputs >= 0.)

        Example:
        5! = 5 * 4 * 3 * 2 * 1 = 120

    @method factorial
    @param {Number} n The number to return factorial value for
    @returns {Number}
 */
function factorial(n) {
    if (n > 1) {
        return n * factorial(n - 1);
    }

    return 1;
}
