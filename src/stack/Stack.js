const StackNode = require('./StackNode')

class Stack {
	constructor(limit = 0) {
		this.top = null
		this.length = 0
		this.limit = limit
	}

	push(value) {
		if (this.length === this.limit && this.limit !== 0) return null

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

	print() {
		let currentNode = this.top
		while (currentNode) {
			console.log(`| ${currentNode.value} |`)
			currentNode = currentNode.lowerNode
		}
		console.log('______')
	}
}

Stack.fromValues = function (...values) {
	const stack = new Stack()
	for (let i = 0; i <= values.length - 1; i++) {
		stack.push(values[i])
	}
	return stack
}

module.exports = Stack
