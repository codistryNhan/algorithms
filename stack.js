let helper = require('./helper');

/*
*  Stack Data Structure in JavaScript
*  Nhan 7/8/2017
*/

function Stack(){

  //Initializes an empty array;
  let array = [];

  //Push inserts an element at the end of the stack.
  this.push = function(key){
    array[array.length] = key;
  }

  //Pop removes an element at the end of the stack and returns the key.
  this.pop = function(){
    let lastIndex = array.length - 1;
    let keyRemoved = array[lastIndex];

    array.splice(lastIndex, 1);

    return keyRemoved;
  }

  //Print consoles.log the elements in the array.
  this.print = function(){
    helper.printArray(array);
  }

}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
stack.pop();
stack.pop();
stack.print();
