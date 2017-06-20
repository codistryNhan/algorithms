//Bubble Sort Algorithm
// O(N^2)
// A bit faster than Selection sort because adaptive

var array = createRandomArray();

printArray(array);
bubbleSort(array);

function bubbleSort(array){
  for(var i = 0; i < array.length; i++){
    var swapped = false;
    for(var j = array.length - 1; j > i; j--){
      if(array[j] < array[j - 1]){
        swap(array, j, j - 1);
        swapped = true;
        printArray(array);
      }
    }
    if(!swapped){
      break;
    }
  }
}

function printArray(array){
  console.log(array.toString());
}

function swap(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;
}

function createRandomArray(){
  var array = [];

  for(var i = 0; i < 10; i ++){
    array[i] = Math.floor(Math.random() * 100);
  }

  return array;
}
