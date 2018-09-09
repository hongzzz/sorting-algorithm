function shellSort(arr) {
    let i, j;
    let len = arr.length;
    let gap = Math.floor(len / 2); // 设置步长为长度的一半
    while (gap > 0) {
        for (i = gap; i < len; i++) {    // 步长为gap的插入排序
            let temp = arr[i];
            for (j = i; j >= gap; j -= gap) {
                if (temp < arr[j - gap]) {
                    arr[j] = arr[j - gap];
                } else {
                    break;
                }
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2); // 每次排序后步长缩短直至为1
    }
    return arr;
}

console.log(shellSort([3, 5, 6, 4, 7, 1, 8, 3]));