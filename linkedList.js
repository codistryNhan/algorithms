let helper = require('./helper');

/*
*  Linked List Data Structure
*  Nhan 7/8/2017
*/

function LinkedList(){

  //Head is the entry point to the Linked List
  let head = null;
  let length = 0;

  //Node class to store our data
  function Node(key){
    this.key = key;
    this.next = null; 
  }

  //Insert inserts a node at the end of the linked list
  this.insert = function(key){
    let node = new Node(key);
    let current = head;

    if(head == null){
      head = node;
    } else {
      while(current.next){
        current = current.next
      }

      current.next = node;
    }

    length++;
  }

  //Remove removes the first key found
  this.remove = function(key){
    let current = head;
    let previous, removedKey;

    if(head == null){
      console.log("List is already empty");
    } else {
      while(current){

        previous = current;

        if(current.key == key){
          previous.next = current.next;
          current = current.next
          length--;
        } else {
          console.log("Key Not Found");
          return;
        }


      }
    }

  }

  this.print = function(){
    let current = head;

    if(head == null){
      console.log("Empty List");
    } else {

      while(current){
        console.log(current.key + " ");
        current = current.next;
      }

    }

  }

}

let list = new LinkedList();

list.insert(1);
list.insert(2);
list.insert(3);
list.insert(1)
list.print();
list.remove(1);
list.print();
