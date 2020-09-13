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

module.exports = DoublyLinkedList
