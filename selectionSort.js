let helper = require('./helper');

let array = helper.createRandomArray(10);
helper.printArray(array);
selectionSort(array);

function selectionSort(array){
  let length = array.length;

  for(let i = 0; i < length; i++){
    for(let j = i + 1; j < length; j++){
      if(array[i] > array[j]){
        helper.swap(array, i, j);
      }
    }
  }

  helper.printArray(array);

}

