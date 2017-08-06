let helper = require('./helper');

let array = helper.createRandomArray(21);
helper.printArray(array);
mergeSort(array);


function mergeSort(array){

  let sorted = split(array);
  helper.printArray(sorted);

  function split(array){
    let length = array.length;

    if(length == 1){
      return array;
    }

    let mid = Math.floor(length / 2);
    let left = array.slice(0,mid);
    let right = array.slice(mid,length);

    return merge(split(left),split(right));

  }

  function merge(left, right){
    let result = [];

    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < left.length && rightIndex < right.length){
      if(left[leftIndex] < right[rightIndex]){
        result.push(left[leftIndex++]);
      } else {
        result.push(right[rightIndex++]);
      }

    } 

    while(leftIndex < left.length){
      result.push(left[leftIndex++]);
    }

    while(rightIndex < right.length){
      result.push(right[rightIndex++]);
    }

    return result;
  }

}
