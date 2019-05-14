var arr = [50, 95, 15, 88, 77];

function reverseArr(arr) {
    var result = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log(reverseArr(arr));