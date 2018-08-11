function bubbleSort (arr) {
    // 双层循环
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 5, 6, 4, 7, 1, 8]));