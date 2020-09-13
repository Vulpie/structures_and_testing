const DoublyLinkedList = require('../../src/Lists/DoublyLinkedList')

describe('#insertAtHead', () => {
    test('adds the element to the beginning of the list', () => {
        const li = new DoublyLinkedList()
        li.insertAtHead(10)
        const oldHead = li.head
        li.insertAtHead(20)

        expect(li.head.value).toBe(20)
        expect(li.head.next).toBe(oldHead)
        expect(li.head.prev).toBeNull()

        expect(li.length).toBe(2)
    })
})
