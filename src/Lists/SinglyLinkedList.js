class SinglyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(value) {
        const newNode = new SinglyLinkedListNode(value, this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }

        return current
    }

    insertAtIndex(index, value) {
        if (index === 0) {
            return this.insertAtHead(value)
        }

        const prev = this.getByIndex(index - 1)

        if (prev == null) return null
        const next = prev.next

        prev.next = new SinglyLinkedListNode(value, next)
        this.length++
    }

    removeHead() {
        this.head = this.head.next
        this.length--
    }

    removeAtIndex(index) {
        if (index === 0) return this.removeHead()

        const prev = this.getByIndex(index - 1)
        if (prev === null) return

        const next = this.getByIndex(index + 1)
        if (next === null) return

        prev.next = next
        this.length--
    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }
}

class SinglyLinkedListNode {
    constructor(value, next) {
        this.value = value
        this.next = next
    }
}

SinglyLinkedList.fromValues = function (...values) {
    const li = new SinglyLinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        li.insertAtHead(values[i])
    }
    return li
}

module.exports = SinglyLinkedList
