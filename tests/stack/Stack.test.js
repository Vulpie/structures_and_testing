const Stack = require('../../src/Stack/Stack')

describe('#push', () => {
	describe('with no limit', () => {
		test('adds element on top of the stack', () => {
			const stack = new Stack()
			stack.push(40)
			stack.push(33)

			expect(stack.top.value).toBe(33)
			expect(stack.length).toBe(2)
		})
	})

	describe('with limit of elements', () => {
		const stack = new Stack(3)
		stack.push(20)
		stack.push(15)
		stack.push(10)
		stack.push(33)

		expect(stack.top.value).toBe(10)
		expect(stack.length).toBe(3)
	})
})
