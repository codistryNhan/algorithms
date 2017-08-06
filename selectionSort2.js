let helper = require('./helper');

let array = helper.createRandomArray(10);
helper.printArray(array);
array = selectionSort(array);
helper.printArray(array);

function selectionSort(array){
  let length = array.length;

  for(let i = 0; i < length; i++){
    for(let j = i + 1; j < length; j++){
      if(array[j] < array[i]){
        helper.swap(array, j, i);
      }
    }
  } 

  return array;
}
