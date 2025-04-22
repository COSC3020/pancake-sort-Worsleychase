function flip(array, n) {
    let start = 0;
    n--; // use zero index

    while (start < n) {
        // swap
        let temp = array[start];
        array[start] = array[n];
        array[n] = temp;

        start++;
        n--;
    }
    return array;
}

// helper function to get index of largest element up to n
function getMaxIndex(arr, n) {
    if (arr.length <= 1) {
        return arr;
    }

    let max = arr[0];
    let index = 0;

    for (let i = 1; i < n; i++) {
        if (arr[i] > max) {
            index = i;
            max = arr[i];
        }
    }
    return index;
}

// Use only flip() here to manipulate the array
function pancakeSort(array) {
    let curSize = array.length;
    while (curSize > 1) {
        let maxIndex = getMaxIndex(array, curSize);
        if (maxIndex != curSize - 1) {
            if (maxIndex != 0) {
                flip(array, maxIndex+1);
            }
            flip(array, curSize);
        }
        curSize -= 1;
    }
    return array;
}

//let thisarr = [1,2,3,4]
//let newArr = flip(thisarr,2)
//console.log(newArr)

//let arr = [3, 2, 4, 1];
//console.log(pancakeSort(arr));
