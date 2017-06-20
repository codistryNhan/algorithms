//Selection Sort Algorithm
//O(N^2)

var array = createRandomArray();

console.log("Starting array");
printArray(array);

selectionSort(array);

function selectionSort(array){
  for(var i = 0; i < array.length; i++){
    for(var j = i + 1; j < array.length; j++){
      if(array[i] > array[j]){
        swap(array, i, j);
      }

      printArray(array);
    }
  }
}

//Swaps elements
function swap(array, a, b){
  var temp = array[a];
  array[a] = array[b];
  array[b] = temp;

}

//outputs an array
function printArray(array){
  console.log(array.toString());
}


//Creates an array of 10 random elements
function createRandomArray(){
  var array = [];
  for(var i = 0; i < 10; i++){
    array[i] = Math.floor(Math.random() * 100);
  }

  return array;
}
