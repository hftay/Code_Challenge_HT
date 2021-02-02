function getArr(num) {

    return num.toString().split('').map(Number)
}

function getNum(arr) {

    return parseInt(arr.join(''))
}

function swap(arr, index1, index2) {

    let temp1 = arr[index1];

    arr[index1] = arr[index2];
    arr[index2] = temp1;

    return arr;

}

//implementation of bubblesort algorithm O(N^2)
function bubbleSort(arr, index) {

    for (let i = index; i < arr.length; i++) {

        for (let j = index; j < arr.length; j++) {

            if (arr[j + 1] < arr[j]) {

                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    return arr;
}

function nextNumber(num) {

    let numArr = getArr(num);

    //looping through the array from the RHS
    for(var i = numArr.length - 1; i > 0; i--) {

        //finding the first digit such that the number
        //to the left of current index is smaller
        if(numArr[i] > numArr[i - 1]) {

            break;

        }
    }

    //if iterator reaches 0 the number given is a
    //monodigit return -1
    if(i === 0) {

        return -1;

    }

    //looping though the array starting from the RHS
    //finding the smallest digit larger than arr[i - 1]

    for(var j = numArr.length - 1; j > i - 1; j--) {

        if(numArr[j] > numArr[i - 1]) {

            return getNum(bubbleSort(swap(numArr, j, i - 1), i));

        }
    }

}
