function insertionSort(arr) {
    let i, j, temp;
    for (i = 1; i < arr.length; i++) {
        // temp保存即将插入的数
        temp = arr[i];
        // 遍历数组，寻找合适的位置
        for (j = i; j > 0; j--) {
            if (temp >= arr[j - 1]) {
                break;
            } else {
                // 不满足条件则数组项向后移
                arr[j] = arr[j - 1];
            }
        }
        // 将待插入的数插入数组
        arr[j] = temp;
    }
    return arr;
}

console.log(insertionSort([3, 5, 6, 4, 7, 1, 8]));