'use strict'
// 1行目に記載している 'use strict' は削除しないでください

function test(actual, expected) {
    if (JSON.stringify(actual) === JSON.stringify(expected)) {
        console.log("OK! Test PASSED.");
    } else {
        console.error("Test FAILED. Try again!");
        console.log("    actual: ", actual);
        console.log("  expected: ", expected);
        console.trace();
    }
}

function squared(element) {
    return element ** 2;
}

function isLessThanThirty(element) {
    return element < 30;
}

function doTheThing(array) {
    let newArray = [];
    newArray = array.map(squared)
        .filter(isLessThanThirty)
    return newArray
}

test(doTheThing([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 4, 9, 16, 25]);
test(doTheThing([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]), [25, 16, 9, 4, 1]);

let array1 = [];

function putItemInRefrigerator(str) {
    array1.push(str)
    return array1;
}

function removeItemFromRefrigerator(str) {
    array1 = array1.filter(function(a) {
        return a !== str;
    })
    return array1;
}

function getItemsInRefrigerator() {
    return array1
}

test(getItemsInRefrigerator(), []);

putItemInRefrigerator("milk");
test(getItemsInRefrigerator(), ["milk"]);

putItemInRefrigerator("juice");
test(getItemsInRefrigerator(), ["milk", "juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);

removeItemFromRefrigerator("milk");
test(getItemsInRefrigerator(), ["juice"]);
