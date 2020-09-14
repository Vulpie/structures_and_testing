// const DoublyLinkedList = require('./src/Lists/DoublyLinkedList')
// const SinglyLinkedList = require('./src/Lists/SinglyLinkedList')
// const li = DoublyLinkedList.fromValues(10, 20, 30)
// //const li = new SinglyLinkedList()

// //li.print()
// li.insertAtIndex(0, 33)
// li.print()
// //console.log(li.getByIndex(3).value)

const Stack = require('./src/Stack/Stack')

const stack = new Stack(2)
stack.push(55)
stack.push(13)
stack.push(11)
stack.push(45)
stack.push(77)

stack.print()
