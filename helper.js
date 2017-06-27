//Helper class for algorithms

var array = [ 1, 2, 3, 4, 5];

class Helper{

  //Swaps 2 numbers
  swap(array, a, b){
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }

  //Prints out an array to console
  printArray(array){
    console.log(array.toString());
  }

  //Creates an array of random elements, given number of elements
  createRandomArray(numOfElements){
    let array = [];
    for(let i = 0; i < numOfElements; i++){
      array[i] = Math.floor(Math.random() * 100);
    }

    return array;
  }
}

let helper = new Helper();

module.exports = helper;
