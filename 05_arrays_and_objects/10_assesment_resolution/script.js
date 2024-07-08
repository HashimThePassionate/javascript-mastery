// The Sum of range
function range(start, end, step = 1) {
    let array = [];
    if (step > 0) {
        for (let i = start; i <= end; i += step) {
            array.push(i);
        }
    } else {
        for (let i = start; i >= end; i += step) {
            array.push(i);
        }
    }
    return array;
}

function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

console.log(range(1, 10)); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))); // → 55

console.log(range(1, 10, 2)); // → [1, 3, 5, 7, 9]
console.log(range(5, 2, -1)); // → [5, 4, 3, 2]




// Reversing of array
function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }
    return newArray;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let temp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = temp;
    }
}

let array = [1, 2, 3, 4, 5];
console.log(reverseArray(array)); // → [5, 4, 3, 2, 1]

reverseArrayInPlace(array);
console.log(array); // → [5, 4, 3, 2, 1]



//   A list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nth(list.rest, n - 1);
}

let list = arrayToList([1, 2, 3]);
console.log(list); // → { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

console.log(listToArray(list)); // → [1, 2, 3]

console.log(prepend(0, list)); // → { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }

console.log(nth(list, 1)); // → 2

function nthRecursive(list, n) {
    if (!list) return undefined;
    if (n === 0) return list.value;
    return nthRecursive(list.rest, n - 1);
}

console.log(nthRecursive(list, 1)); // → 2



//   Deep comparison
function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a !== "object" || b == null || typeof b !== "object") {
        return false;
    }

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 })); // → true
console.log(deepEqual(obj, { here: { is: "another" }, object: 2 })); // → false
