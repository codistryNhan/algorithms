var array = createRandomArray();

printArray(array);
insertionSort(array);

function insertionSort(array){
  for(var i = 0; i < array.length - 1; i++){
    for(var j = i + 1; j > 0; j--){
      if(array[j] < array[j-1]){
        swap(array, j, j-1);
      } else {
        break;
      }
      printArray(array);
    }
  }
}

function createRandomArray(){
  var array = [];
  for(var i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 100);
  }

  return array;
}

function printArray(array){
  console.log(array.toString());
}

function swap(array, i, j){
  temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
