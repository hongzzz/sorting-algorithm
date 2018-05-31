function partition(arr, left, right) {
    const pivot = arr[left]; // 枢轴
    let i = left, j = right;
    // 左右指针不重合的时候，重复(挖坑)
    while (i < j) {
        // 右指针向左移动至比枢轴小的值
        while (i < j && arr[j] > pivot) j--;
        // 右指针指的比枢轴小的值替换至左指针处(枢轴左边的值小于枢轴)
        if (i < j) {
            arr[i] = arr[j];
            i++;
        }
        // 左指针向右移动至比枢轴大的值
        while (i < j && arr[i] < pivot) i++;
        // 左指针指的比枢轴大的值替换至右指针处
        if (i < j) {
            arr[j] = arr[i];
            j--;
        }
    }
    // 左右指针重合，此时指针所指的地方即为枢轴应该在的地方
    arr[i] = pivot;
    return i;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // 根据枢轴分成两段，分别递归下去
        let mid = partition(arr, left, right);
        quickSort(arr, left, mid - 1);
        quickSort(arr, mid + 1, right);
    }
    return arr;
}

console.log(quickSort([1,3,5,6,2,4,7,1,8]));
