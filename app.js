const SinglyLinkedList = require('./src/Lists/SinglyLinkedList')
const li = SinglyLinkedList.fromValues(10, 20, 30, 40, 50)

li.print()
li.removeAtIndex(2)
li.print()
