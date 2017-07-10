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

    //If list is empty
    if(head == null){
      console.log("List is already empty");
      return;
    }

    //If key is on first node
    if(current.key == key){
      head = current.next;
    } else {
      while(current.next){
        previous = current;
        current = current.next;

        if(key == current.key){

          if(current.next == null){
            previous.next = null;
          }

          previous.next = current.next;
        }
      }
    }
  }

  //Prints out keys in the LinkedList
  this.print = function(){
    let current = head;

    if(head == null){
      console.log("Empty List");
    } else {

      console.log("Array:");
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
list.remove(3);
list.print();
list.remove(1);
list.remove(1);
list.print();
