// forEach handmade
let arr = [0, 2, 8, 9, 7, 8, 'hello'];

let each = function(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

each(arr, item => console.log(item * 2));

let links = document.links;

each([...links], link => link.classList.add('link-active'));

// map

let map = function(arr, callback, thisArg) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback.call(thisArg, arr[i], i, arr));
    }
    return result;
}

let href = map([...links], link => link.href);
console.log(href);


// filter

let filter = function(arr, callback, thisArg) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            result.push(arr[i]);
        }
    }
    return result;
}

let mul = filter(arr, item => item * 2);
console.log(mul);

let trueArr = filter(arr, Boolean);
console.log(trueArr);

// some

let some = function(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (callback.call(thisArg, arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

let eigth = some(arr, item => item < 8);
console.log(eigth);

// every

let every = function(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        if (!callback.call(thisArg, arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

let seven = every(arr, item => item === 7);
console.log(seven);

// reduce
let arrs = [
    [1, 2, 3],
    [4, 5],
    [6],
    [7, 8],
    [9, 10, 11]
];

let reduce = function(arr, callback, startValue) {
    let result = startValue;
    for (let i = 0; i < arr.length; i++) {
        result = callback.call(null, result, arr[i], i, arr);
    }
    return result;
}

let arrsResult = reduce(arrs, (result, current) => result.concat(current), []);
console.log(arrsResult);