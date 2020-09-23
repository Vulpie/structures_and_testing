const Stack = require('./src/Stack/Stack')

//const stack = new Stack(2)
// stack.push(55)
// stack.push(13)
// stack.push(11)
// stack.push(45)
// stack.push(77)

const stack = Stack.fromValues(5, 6, 3, 7, 8, 3)
stack.pop()
console.log(stack.peek())
stack.print()
