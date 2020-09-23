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
	describe('with no limit', () => {
		test('remove element from the top, stack is not empty', () => {
			const stack = Stack.fromValues(5, 6, 3, 7, 3)
			stack.pop()
			expect(stack.top.value).toBe(7)
			expect(stack.length).toBe(4)
		})
	})

	describe('with limit', () => {
		test('return null', () => {
			const stack = Stack.fromValues()
			stack.pop()
			expect(stack.top).toBeNull()
			expect(stack.length).toBe(0)
		})
	})
})
