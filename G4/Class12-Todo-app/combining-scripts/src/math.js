const addTwoNumbers = (numOne, numTwo) => numOne + numTwo;

const subtractTwoNumbers = (numOne, numTwo) => numOne - numTwo;

// Named exports, we have to use brackets and the exact name to import this
export const multiplyTwoNumbers = (numOne, numTwo) => numOne * numTwo;

export const divideTwoNumbers = (numOne, numTwo) => numOne / numTwo;

// Default export, we can import this as any name
export default { addTwoNumbers, subtractTwoNumbers };
