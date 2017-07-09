let helper = require('./helper');

/*
*  Queue Data Structure in JavaScript
*  Nhan Nguyen 7/8/2017
*/

function Queue(){

  //Initialize empty array
  let array = [];

  //Queue inserts an element into the end of the array
  this.queue = function(key){
    array[array.length] = key;
  }

  //Dequeue removes an element from the front of the array
  //To do this, we have to shift all the elements up an index
  this.dequeue = function(){
    if (array.length == 0){
      console.log("Array is empty");
      return;
    }

    let removedKey = array[0];

    for(let i = 0; i < array.length; i++){
      array[i] = array[i+1];
    }

    //Need to use splice to remove actual element,
    //Null or undefined will still show up in array.length
    array.splice(array.length - 1, 1);

    return removedKey;
  }

  this.print = function(){
    console.log("Array:")
    helper.printArray(array);
    console.log("Array Length: " + array.length);
  }

}

let queue = new Queue();

queue.queue(1);
queue.queue(2);
queue.queue(3);
queue.print();
console.log(queue.dequeue());
queue.print();
