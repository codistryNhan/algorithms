let helper = require('./helper');
let array = helper.createRandomArray(10);
helper.printArray(array);
array = mergeSort(array);
helper.printArray(array);

function mergeSort(array){

  return array = split(array);

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

  function merge(left,right){
    let result = [];
    let li = 0;
    let ri = 0;

    while(li < left.length && ri < right.length){
      if(left[li] < right[ri]){
        result.push(left[li++]);
      } else {
        result.push(right[ri++]);
      }
    }

    while(li < left.length){
      result.push(left[li++]);
    }

    while(ri < right.length){
      result.push(right[ri++]);
    }

    return result;
  }
}
