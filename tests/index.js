QUnit.test('Can copy array.', function(assert) {
    const arrayToCopy = [1, 2, 3, 4, 5];
    const copiedArray = copyAndDoubleArray(arrayToCopy);

    assert.ok(
        Array.isArray(copiedArray),
        '`copiedArray` should be an array'
    );

    assert.deepEqual(
        copiedArray,
        [2, 4, 6, 8, 10],
        '`copiedArray` should equal [2, 4, 6, 8, 10]'
    );

    assert.deepEqual(
        arrayToCopy,
        [1, 2, 3, 4, 5],
        '`arrayToCopy` should still equal [1, 2, 3, 4, 5]'
    );
});

QUnit.test('Can get the second largest number in a collection.', function(assert) {
    const result1 = getSecondLargest([2, 6, 5, 5, 6, 2, 3, 1]);
    const result2 = getSecondLargest([2, 1]);
    const result3 = getSecondLargest([3, 3, 3]);
    const result4 = getSecondLargest([1]);
    const result5 = getSecondLargest([]);
    const result6 = getSecondLargest();

    assert.strictEqual(
        result1,
        5,
        'The second largest number is five. `[2, 6, 5, 5, 6, 2, 3, 1]`'
    );

    assert.strictEqual(
        result2,
        1,
        'The second largest number is one. `[2, 1]`'
    );

    assert.strictEqual(
        result3,
        undefined,
        'Should return undefined when all numbers are equal.'
    );

    assert.strictEqual(
        result4,
        undefined,
        'Should return undefined when array has only one number.'
    );

    assert.strictEqual(
        result5,
        undefined,
        'Should return undefined when array is empty.'
    );

    assert.strictEqual(
        result6,
        undefined,
        'Should return undefined if an array is not passed.'
    );
});

QUnit.test('Can copy object.', function(assert) {
    const objectToCopy = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
    };
    const copiedObject = copyAndDoubleObject(objectToCopy);

    assert.equal(
        Object.prototype.toString.call(copiedObject),
        '[object Object]',
        '`copiedObject` should be an object'
    );

    assert.deepEqual(
        Object.entries(copiedObject).map(item => item[1]),
        [2, 4, 6, 8, 10],
        '`copiedObject` values should equal [2, 4, 6, 8, 10]'
    );

    assert.deepEqual(
        Object.entries(objectToCopy).map(item => item[1]),
        [1, 2, 3, 4, 5],
        '`objectToCopy` values should still equal [1, 2, 3, 4, 5]'
    );
});

QUnit.test('Can print the fibonacci sequence', function(assert) {
    const fibNeg1 = fibonacci(-1);
    const fib0 = fibonacci(0);
    const fib1 = fibonacci(1);
    const fib2 = fibonacci(2);
    const fib3 = fibonacci(3);
    const fib5 = fibonacci(5);
    const fib8 = fibonacci(8);
    const fib13 = fibonacci(13);

    assert.strictEqual(
        fibNeg1.join(','),
        '',
        'Less than one number of the fibonacci sequence is nothing'
    );

    assert.strictEqual(
        fib0.join(','),
        '',
        'Less than one number of the fibonacci sequence is nothing'
    );

    assert.strictEqual(
        fib1.join(','),
        '0',
        'The first fibonacci number is zero'
    );

    assert.strictEqual(
        fib2.join(','),
        '0,1',
        'The first two fibonacci numbers are 0, 1'
    );

    assert.strictEqual(
        fib3.join(','),
        '0,1,1',
        'The first three fibonacci numbers are 0, 1, 1'
    );

    assert.strictEqual(
        fib5.join(','),
        '0,1,1,2,3',
        'The first five fibonacci numbers are 0, 1, 1, 2, 3'
    );

    assert.strictEqual(
        fib8.join(','),
        '0,1,1,2,3,5,8,13',
        'The first eight fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13'
    );

    assert.strictEqual(
        fib13.join(','),
        '0,1,1,2,3,5,8,13,21,34,55,89,144',
        'The first thirteen fibonacci numbers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144'
    );
});

QUnit.test('Can create factorial function.', function(assert) {
    const factorial0 = factorial(0);
    const factorial1 = factorial(1);
    const factorial2 = factorial(2);
    const factorial3 = factorial(3);
    const factorial4 = factorial(4);
    const factorial5 = factorial(5);
    const factorial10 = factorial(10);

    assert.equal(
        factorial0,
        1,
        '0! should equal 1'
    );

    assert.equal(
        factorial1,
        1,
        '1! should equal 1'
    );

    assert.equal(
        factorial2,
        2,
        '2! should equal 2'
    );

    assert.equal(
        factorial3,
        6,
        '3! should equal 6'
    );

    assert.equal(
        factorial4,
        24,
        '4! should equal 24'
    );

    assert.equal(
        factorial5,
        120,
        '5! should equal 120'
    );

    assert.equal(
        factorial10,
        3628800,
        '10! should equal 3628800'
    );
});

QUnit.test('Can calculate the area of a circle.', function(assert) {
    const areaRadius12 = getAreaOfCircle(12);
    // const areaNaught = getAreaOfCircle();
    const areaRadius12Str = getAreaOfCircle('12');

    assert.strictEqual(
        areaRadius12,
        452.39,
        'The area of a circle with a radius of 12 is 452.39'
    );

    assert.strictEqual(
        areaRadius12Str,
        452.39,
        'The area of a circle with a radius of 12 (passed as a string) is 452.39'
    );
});
