/**
 *
 * @param arr 最大堆数组
 * @param index 开始节点下标
 * @param size 堆大小
 * 维护最大堆性质
 */
function maxHeapify(arr, index, size) {
    let left, right, max;
    while (true) {
        left = index * 2 + 1;
        right = index * 2 + 2;
        max = index;
        if (left < size && arr[max] < arr[left]) {
            max = left;
        }
        if (right < size && arr[max] < arr[right]) {
            max = right;
        }
        if (max !== index) {
            swap(arr, index, max);
            index = max;
        } else {
            break;
        }
    }
}
function buildMaxHeap(arr) {
    let size = arr.length;
    let i, iParent = Math.floor((size - 1) / 2);

    for (i = iParent; i >= 0; i--) {
        maxHeapify(arr, i, size);
    }
}

function heapSort(arr) {
    buildMaxHeap(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i);
        maxHeapify(arr, 0, i);
    }
    return arr;
}


function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr;
}

console.log(heapSort([3, 5, 6, 4, 7, 1, 8]));