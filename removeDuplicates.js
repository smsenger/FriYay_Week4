
//RETURNS EMPTY ARRAY. NEEDS REWORKING

function removeDuplicates(arr) {
    //given array ---- return given array without duplicates
    const newArr = [];
    arr.forEach(function (item) {
        if(newArr.indexOf(item) === -1) {
            newArr.push(item);
        }
        })
        return newArr;
    }


console.log(removeDuplicates([1, 2, 2, 3, 3, 4]));



function removeDuplicates2(arr) {
    const arrObj = {};
    arr.forEach(function (item) {
        arrObj[item] = true;
    })
    return Object.keys(arrObj);
}