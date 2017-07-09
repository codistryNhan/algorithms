let helper = require('./helper');

let array = helper.createRandomArray(10);
helper.printArray(array);
bubbleSort(array);

function bubbleSort(array){
  let length = array.length;

  for(let i = 0; i < length; i++){
    let swapped = false;

    for(let j = length - 1; j > i; j--){
      if(array[j - 1] > array[j]){
        helper.swap(array, j - 1, j);
        swapped = true;
        helper.printArray(array);
      }
    }
    if(swapped == false){
      break;
    } 
  }

  helper.printArray(array);
}
