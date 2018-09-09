function merge(arr, left, mid, right, temp) {
    let i = left;
    let j = mid + 1;
    let t = 0;
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[t++] = arr[i++];
        } else {
            temp[t++] = arr[j++];
        }
    }
    while (i <= mid) {//将左边剩余元素填充进temp中
        temp[t++] = arr[i++];
    }
    while (j <= right) {//将右序列剩余元素填充进temp中
        temp[t++] = arr[j++];
    }
    t = 0;
    //将temp中的元素全部拷贝到原数组中
    while (left <= right) {
        arr[left++] = temp[t++];
    }
}

function mergeSort(arr, left = 0, right = arr.length - 1, temp = []) {
    if (left < right) {
        let mid = Math.floor((left + right) / 2);
        mergeSort(arr, left, mid, temp);
        mergeSort(arr, mid + 1, right, temp);
        merge(arr, left, mid, right, temp);
    }
    return arr;
}

console.log(mergeSort([1, 3, 5, 6, 2, 4, 7, 1, 8]));
