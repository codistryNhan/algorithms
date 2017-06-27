let helper = require('./helper');

var array = helper.createRandomArray(10);

helper.printArray(array);
insertionSort(array);

//  Insertion Sort
//  Worst: O(n^2)
//  Insertion > Bubble > Selection
function insertionSort(array){
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j > 0; j--){
      if(array[j] < array[j-1]){
        helper.swap(array, j, j-1);
      } else {
        break;
      }
      helper.printArray(array);
    }
  }
}

