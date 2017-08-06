let helper = require('./helper');

let array = helper.createRandomArray(11);
helper.printArray(array);

array = mergeSort(array);

helper.printArray(array);

function mergeSort(array){

  return split(array);

  function split(array){
    let length = array.length;

    if(length == 1){
      return array;
    }

    let mid = Math.floor(length / 2);
    let left = array.slice(0,mid);
    let right = array.slice(mid,length);

    return merge(split(left), split(right));

  }

  function merge(left,right){
    let result = [];
    let il = 0;
    let ir = 0;

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
