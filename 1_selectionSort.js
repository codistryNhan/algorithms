const helper =  require('./helper');

let array = helper.createRandomArray(10);

helper.printArray(array);

selectionSort(array);


//  Selection Sort
//  Worst: O(n^2)
//  Best: O(n^2)
//  Comments: Never use
function selectionSort(array){
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        helper.swap(array, i, j);
      }

      helper.printArray(array);
    }
  }
}


