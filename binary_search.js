function binarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] > target) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }
    return -1;
}