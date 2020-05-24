//given an array of numbers
//sort array
//return sorted array

array = [10, 5, 9, 4, 17];


//**USING SORT()
//     array.sort(function(a, b) {
//         return a-b});                //compares to numbers, a & b. if a-b is negative, then a is smaller and order of those two elements and order maintains.

// console.log(array);

//** */
function coolArray(array) {
    const arrayLength = array.length;
    const newArray = [];
    for(let i = 0; i < arrayLength; i++) {
        let smallNum = Math.min(...array_);
        newArray.push(smallNum);
        const index = array.indexOf(smallNum);
        array.spice(index, 1);
    };
    return newArray;
};

//**BUBBLE SORT (SAME METHOD AS SORT())
function sortArray(array) {
    for(i = 1; i < array.length; i++) {
        for(let j = 0; j < array.length; j ++) {
            if (array[j] > array[j + 1]) {
                let tmp = array[j];
                array[j] = array[j + 1 ];
                array[j + 1] = tmp;
                //[current, previous] = [previous, current];
            } 
            else {
                continue;
            }
        };
    }; return array;
};
    
    console.log(sortArray([10, 5, 9, 4, 17]));


//SELECTION SORT
function selectionSort(array) {
    for(let i = 0; i < length; i ++) {
        let min = i;
        for(let j = 1; j < length; j++) {
            if(array[i]) < array[min]) {
                min = j;
            }
        }
    }
};?????

//INSERTION SORT
function insertionSort(inputArr) {
    let length = inputArr.length;
    for(let i = 1; i < length; i ++) {
        let key = inputArr[i];
        let j = i - 1;
        while(j >= 0 && inputArr[j] > key) {
            inputArr[j + 1] = inputArr[j];
            j -= 1;
        }
        inputArr[j + 1] = key;
    }
    return inputArr;
};



