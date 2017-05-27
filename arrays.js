// forEach handmade
let arr = [2, 8, 9, 7, 8];

function each(arr, callback, thisArg) {
    for (let i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr);
    }
}

each(arr, item => console.log(item * 2));

let links = document.links;

each([...links], link => link.classList.add('link-active'));