/**
    Write a function that receives an array and returns a modified copy (each
    element should be multiplied by two) without modifying the original array.

    @method copyArray
    @param {Array} array Array to be copied
    @returns {Array} Copy of `array` with each item multiplied by two
 */
function copyAndDoubleArray(array) {
    // Write code here
    return array.map(item => item * 2);
}

/**
    Write a function that returns the second largest number in an array of
    numbers.

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
    Write a function that receives an object and returns a modified copy (each
    member value should be multiplied by two) without modifying the original
    object.

    @method copyObject
    @param {Array} obj Object to be copied
    @returns {Array} Copy of `obj` with each member value multiplied by two
 */
function copyAndDoubleObject(obj) {
    // Write code here
    const copy = Object.assign({}, obj);

    Object.keys(copy).forEach(item => copy[item] *= 2)

    return copy;
}

/**
    Write a function that returns the approximate area of a circle based on its
    passed-in radius (to two decimal points).

    @param {Number} radius
    @returns {Number} Approximate area of a circle
 */
function getAreaOfCircle(radius) {
    // Write code here
    return Number(
        (Math.pow(radius, 2) * Math.PI).toFixed(2)
    );
}

/**
    In mathematics, the factorial of a positive integer _n_, denoted by _n!, is
    the product of all positive integers less than or equal to _n_.

        Example:
        5! = 5 * 4 * 3 * 2 * 1 = 120

    Write a function that returns the factorial of any number (_n_) passed to
    it. (You can assume inputs >= 0.)

    @method factorial
    @param {Number} n The number to return factorial value for
    @returns {Number}
 */
function factorial(n) {
    // Write code here
    if (n > 1) {
        return n * factorial(n - 1);
    }

    return 1;
}
