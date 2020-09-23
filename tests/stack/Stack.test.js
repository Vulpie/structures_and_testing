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
			const stack = Stack.fromValues([5, 6, 3, 7, 3])
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
			const stack = Stack.fromValues([5, 6, 3, 7, 3])
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

describe('#isFull', () => {
	describe('stack is not empty or full', () => {
		test('return false', () => {
			const stack = Stack.fromValues([15, 23, 66, 5, 2, 4, 9], 9)
			expect(stack.isFull()).toBe(false)
			const length = stack.length
			const limit = stack.limit
			expect(length).not.toBe(limit)
		})
	})

	describe('stack is empty', () => {
		test('return false', () => {
			const stack = Stack.fromValues()
			expect(stack.isFull()).toBe(false)
			const length = stack.length
			const limit = stack.limit
			expect(length).not.toBe(limit)
		})
	})

	describe('stack is full', () => {
		test('return true', () => {
			const stack = Stack.fromValues([15, 23, 66, 5, 2, 4, 9], 7)
			expect(stack.isFull()).toBe(true)
			const length = stack.length
			const limit = stack.limit
			expect(length).toBe(limit)
		})
	})

	describe('stack does not have a limit', () => {
		test('return false', () => {
			const stack = Stack.fromValues([15, 23, 66, 5, 2, 4, 9])
			expect(stack.isFull()).toBe(false)
			const length = stack.length
			const limit = stack.limit
			expect(length).not.toBe(limit)
		})
	})
})
