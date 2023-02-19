import { hello, bye as byeFunc } from './say.js'

const hi = hello("Class")
const bye = byeFunc("Class")

console.log('Hi', hi)
console.log('Bye', bye)