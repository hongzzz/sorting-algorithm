function insertionSort(arr) {
    let i, j, temp;
    for (i = 1; i < arr.length; i++) {
        // temp保存即将插入的数
        temp = arr[i];
        // 遍历数组，发现合适的位置后插入
        for (j = i; j > 0; j--) {
            if (temp >= arr[j - 1]) {
                break;
            } else {
                arr[j] = arr[j - 1];
            }
        }
        arr[j] = temp;
    }
    return arr;
}

console.log(insertionSort([3, 5, 6, 4, 7, 1, 8]));