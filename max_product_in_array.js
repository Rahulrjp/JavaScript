function maxProduct(arr) {
    let maxProduct = -Infinity;
    let num1;
    let num2;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let currentProduct = arr[i] * arr[j];

            if (currentProduct > maxProduct) {
                maxProduct = currentProduct;
                num1 = arr[i];
                num2 = arr[j];
            }
        }
    }
    return [maxProduct, num1, num2];
}


function optimizedMaxProduct(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
    let min = Infinity;
    let secondMin = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        if (arr[i] < min) {
            secondMin = min;
            min = arr[i];
        }
    }
    return Math.max(max * secondMax, min * secondMin);
}

const array = [1, 4, 3, 6, 7, 0, -7, -8];
console.log(maxProduct(array));
console.log(optimizedMaxProduct(array));