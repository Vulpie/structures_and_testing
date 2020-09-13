const DoublyLinkedList = require('./src/Lists/DoublyLinkedList')
const SinglyLinkedList = require('./src/Lists/SinglyLinkedList')
const li = DoublyLinkedList.fromValues(10, 20, 30)
//const li = new SinglyLinkedList()

//li.print()
li.insertAtIndex(0, 33)
li.print()
//console.log(li.getByIndex(3).value)
