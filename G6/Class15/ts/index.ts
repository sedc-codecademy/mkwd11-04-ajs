const helloWorld: string = 'Hello Word';

console.log(helloWorld)

interface Animal {
    name: string;
    age: number;
    children: Animal[];
    colors?: string[];
    hasTail: boolean;
}

const sparky: Animal = {
    name: 'Sparky',
    age: 5, 
    children: [],
    hasTail: true
}

enum Side {
    left,
    right,
    top,
    bottom
}

console.log(Side.left)

console.log(sparky)