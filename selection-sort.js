function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        // 记录每轮最小值和下标的变量
        let minIndex = i;
        let minValue = arr[minIndex];
        for (let j = i + 1; j < arr.length; j++) {
            // 计算最小值和下标
            if (arr[j] < minValue) {
                minIndex = j;
                minValue = arr[j];
            }
        }
        // 将每轮最小值交换至当前轮的首位
        swap(arr, i, minIndex);
    }
    return arr;
}

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

console.log(selectionSort([3,5,6,4,7,1,8]));