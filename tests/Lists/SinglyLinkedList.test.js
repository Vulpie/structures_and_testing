const SinglyLinkedList = require('../../src/Lists/SinglyLinkedList')

describe('#insertAtHead', () => {
    test(' it adds the element to the beginning of the list', () => {
        const li = new SinglyLinkedList()
        li.insertAtHead(10)
        const oldHead = li.head
        li.insertAtHead(20)

        expect(li.head.value).toBe(20)
        expect(li.head.next).toBe(oldHead)
        expect(li.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index less than 0', () => {
        test('it returns null', () => {
            const li = SinglyLinkedList.fromValues(10, 20)

            expect(li.getByIndex(-1)).toBeNull()
        })
    })

    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const li = SinglyLinkedList.fromValues(10, 20)

            expect(li.getByIndex(5)).toBeNull()
        })
    })

    describe('with index 0', () => {
        test('it returns the head', () => {
            const li = SinglyLinkedList.fromValues(10, 20)

            expect(li.getByIndex(0).value).toBe(10)
        })
    })

    describe('with index in the middle', () => {
        test('it returns the element of that index', () => {
            const li = SinglyLinkedList.fromValues(10, 20, 30, 40)

            expect(li.getByIndex(2).value).toBe(30)
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not insert anything', () => {
            const li = SinglyLinkedList.fromValues(10, 20)
            li.insertAtIndex(-1, 30)

            expect(li.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not insert anything', () => {
            const li = SinglyLinkedList.fromValues(10, 20)
            li.insertAtIndex(5, 30)

            expect(li.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('insert at the head', () => {
            const li = SinglyLinkedList.fromValues(10, 20)
            li.insertAtIndex(0, 30)

            expect(li.head.value).toBe(30)
            expect(li.head.next.value).toBe(10)
            expect(li.length).toBe(3)
        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', () => {
            const li = SinglyLinkedList.fromValues(10, 20, 30, 40)
            li.insertAtIndex(2, 50)
            const node = li.getByIndex(2)

            expect(node.value).toBe(50)
            expect(node.next.value).toBe(30)
            expect(li.length).toBe(5)
        })
    })
})

describe('#removeHead', () => {
    test(' it adds the element to the beginning of the list', () => {
        const li = new SinglyLinkedList.fromValues(10, 20, 30)
        li.removeHead()

        expect(li.head.value).toBe(20)
        expect(li.length).toBe(2)
    })
})

describe('#removeAtIndex', () => {
    describe('with index less than 0', () => {
        test('it does not remove anything', () => {
            const li = SinglyLinkedList.fromValues(10, 20)
            li.removeAtIndex(-1)

            expect(li.length).toBe(2)
        })
    })

    describe('with index greater than list length', () => {
        test('it does not remove anything', () => {
            const li = SinglyLinkedList.fromValues(10, 20)
            li.removeAtIndex(5)

            expect(li.length).toBe(2)
        })
    })

    describe('with index 0', () => {
        test('remove head', () => {
            const li = SinglyLinkedList.fromValues(10, 20, 30)
            li.removeAtIndex(0)

            expect(li.head.value).toBe(20)
            expect(li.head.next.value).toBe(30)
            expect(li.length).toBe(2)
        })
    })

    describe('with index in the middle', () => {
        test('insert at the given index', () => {
            const li = SinglyLinkedList.fromValues(10, 20, 30, 40)
            li.removeAtIndex(2)
            const node = li.getByIndex(1)

            expect(node.value).toBe(20)
            expect(node.next.value).toBe(40)
            expect(li.length).toBe(3)
        })
    })
})
