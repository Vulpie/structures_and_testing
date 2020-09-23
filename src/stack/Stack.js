const StackNode = require('./StackNode')

class Stack {
	constructor(limit = null) {
		this.top = null
		this.length = 0
		this.limit = limit
	}

	push(value) {
		if (this.length === this.limit) return null

		const oldTop = this.top
		const newNode = new StackNode(value, oldTop)

		this.top = newNode
		this.length++
	}

	pop() {
		if (this.length === 0) return null

		const current_top = this.top
		this.top = current_top.lowerNode
		this.length--
	}

	peek() {
		if (this.top) return this.top.value
		return null
	}

	isFull() {
		if (this.limit !== this.length) return false
		return true
	}

	isEmpty() {
		if (this.length === 0) return true
		return false
	}

	print() {
		let currentNode = this.top
		while (currentNode) {
			console.log(`| ${currentNode.value} |`)
			currentNode = currentNode.lowerNode
		}
		console.log('______')
	}
}

Stack.fromValues = function (values = [], limit) {
	const stack = new Stack(limit)
	for (let i = 0; i <= values.length - 1; i++) {
		stack.push(values[i])
	}
	return stack
}

module.exports = Stack
