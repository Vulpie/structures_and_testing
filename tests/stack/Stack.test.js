const Stack = require('../../src/Stack/Stack')

describe('#push', () => {
	describe('with no limit', () => {
		test('adds each element on top of the stack', () => {
			const stack = new Stack()
			stack.push(40)
			stack.push(33)
			stack.push(66)
			stack.push(55)
			stack.push(22)

			expect(stack.top.value).toBe(22)
			expect(stack.length).toBe(5)
		})
	})

	describe('with limit of elements', () => {
		test('adds only 3 elements', () => {
			const stack = new Stack(3)
			stack.push(20)
			stack.push(15)
			stack.push(10)
			stack.push(33)

			expect(stack.top.value).toBe(10)
			expect(stack.length).toBe(3)
		})
	})
})

describe('#pop', () => {
	describe('stack is not empty', () => {
		test('remove element from the top', () => {
			const stack = Stack.fromValues(5, 6, 3, 7, 3)
			stack.pop()
			expect(stack.top.value).toBe(7)
			expect(stack.length).toBe(4)
		})
	})

	describe('stack is empty', () => {
		test('return null', () => {
			const stack = Stack.fromValues()
			stack.pop()
			expect(stack.top).toBeNull()
			expect(stack.length).toBe(0)
		})
	})
})

describe('#pop', () => {
	describe('stack is not empty', () => {
		test('return the value of top element', () => {
			const stack = Stack.fromValues(5, 6, 3, 7, 3)
			expect(stack.length).toBe(5)
			expect(stack.peek()).toBe(3)
			expect(stack.length).toBe(5)
		})
	})

	describe('stack is empty', () => {
		test('return null', () => {
			const stack = Stack.fromValues()
			expect(stack.peek()).toBeNull()
			expect(stack.length).toBe(0)
		})
	})
})
