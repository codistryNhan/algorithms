let helper = require('./helper');

let array = [ 2, 6, 10, 12, 22, 36, 45, 65];

helper.printArray(array);

console.log(binarySearch(array, 36));

function binarySearch(array, number){

  let min = 0;
  let max = array.length - 1;

  while( min <= max ){
    let mid = min + Math.floor((max - min) / 2);

    if(array[mid] === number){
      return mid;
    }

    if(array[mid] > number){
      max = mid - 1;
    } else { 
      min = mid + 1;
    }
  }

  return -1;

}
