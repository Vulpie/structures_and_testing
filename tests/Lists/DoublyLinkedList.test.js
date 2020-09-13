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

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it should return null', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)
            expect(li.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)

            expect(li.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)

            expect(li.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns values of list node of that index, previous and next values', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30, 40)

            expect(li.getByIndex(2).value).toBe(30)
            expect(li.getByIndex(2).next.value).toBe(40)
            expect(li.getByIndex(2).prev.value).toBe(20)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)
            li.insertAtIndex(-2, 33)
            expect(li.length).toBe(3)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)
            li.insertAtIndex(10, 33)
            expect(li.length).toBe(3)
        })
    })

    describe('with index 0', () => {
        test('insert at head', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)
            li.insertAtIndex(0, 33)

            expect(li.head.value).toBe(33)
            expect(li.head.next.value).toBe(10)
            expect(li.head.prev).toBeNull()
            expect(li.length).toBe(4)
        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30, 40)
            li.insertAtIndex(2, 33)
            const node = li.getByIndex(2)
            expect(node.value).toBe(33)
            expect(node.next.value).toBe(30)
            expect(node.prev.value).toBe(20)
            expect(li.length).toBe(5)
        })
    })

    describe('with index at the tail', () => {
        test('insert at the end of the list', () => {
            const li = DoublyLinkedList.fromValues(10, 20, 30)
            li.insertAtIndex(3, 33)
            const node = li.getByIndex(3)
            expect(node.value).toBe(33)
            expect(node.next).toBeNull()
            expect(node.prev.value).toBe(30)
            expect(li.length).toBe(4)
        })
    })
})
