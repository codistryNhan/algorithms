let helper = require('./helper');

let array = helper.createRandomArray(10);

helper.printArray(array);

bubbleSort(array);

//  Bubble Sort
//  Worst:O(n^2)
//  Best:O(N)
//  Comments: Better than Selection Sort because it is adaptive

function bubbleSort(array){
  for(let i = 0; i < array.length; i++){
    let swapped = false;
    for(let j = array.length - 1; j > i; j--){
      if(array[j] < array[j-1]){
        helper.swap(array, j, j-1);
        swapped = true;
        helper.printArray(array);
      }
    }
    if(swapped == false){
      break;
    }
  }
}
