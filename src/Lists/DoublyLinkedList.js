class DoublyLinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(value) {
        this.length++
        const oldHead = this.head
        const newNode = new DoublyLinkedListNode(value)

        if (oldHead === null) {
            newNode.next = oldHead
            this.head = newNode
            return
        }

        newNode.next = oldHead
        this.head = newNode
        oldHead.prev = this.head
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

        const prevNode = this.getByIndex(index - 1)
        if (!prevNode) return null

        const nextNode = prevNode.next || null
        const newNode = new DoublyLinkedListNode(value)

        if (!nextNode) {
            prevNode.next = newNode
        } else {
            nextNode.prev = newNode
            prevNode.next = newNode
        }

        newNode.prev = prevNode
        newNode.next = nextNode

        this.length++
    }

    print() {
        let current = this.head
        while (current) {
            const prev = current.prev ? current.prev.value : 'Null'
            const next = current.next ? current.next.value : 'Null'
            console.log(`${prev} <- [${current.value}] -> ${next}`)
            current = current.next
        }
    }
}

class DoublyLinkedListNode {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

DoublyLinkedList.fromValues = function (...values) {
    const li = new DoublyLinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        li.insertAtHead(values[i])
    }
    return li
}

module.exports = DoublyLinkedList
