let helper = require('./helper');

//  Merge Sort
//  Worst: O(nlogn)

let array = helper.createRandomArray(10);
helper.printArray(array);
array = mergeSort(array);
helper.printArray(array);

function mergeSort(array){

  return split(array);

  function split(array){

    let length = array.length;
    if(length === 1){
      return array;
    }
    let mid = Math.floor(length / 2),
    left = array.slice(0,mid),
    right = array.slice(mid, length);

    return merge(split(left), split(right));

  }

  function merge(left, right){
    let result = [],
    il = 0,
    ir = 0;

    while(il < left.length && ir < right.length){
      if(left[il] < right[ir]){
        result.push(left[il++]);
      } else {
        result.push(right[ir++]);
      }
    }

    while(il < left.length){
      result.push(left[il++]);
    }

    while(ir < right.length){
      result.push(right[ir++]);
    }

    return result;

  }
}


