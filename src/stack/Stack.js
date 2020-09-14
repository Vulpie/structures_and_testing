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

	print() {
		let currentNode = this.top
		while (currentNode) {
			console.log(`| ${currentNode.value} |`)
			currentNode = currentNode.lowerNode
		}
		console.log('______')
	}
}

module.exports = Stack
