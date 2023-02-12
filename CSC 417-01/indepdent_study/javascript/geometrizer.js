const pi = 3.141592

const circum = radius => `The circumference is ${2*pi*radius}`
const area = radius => `The area is ${pi * Math.pow(radius, 2)}`

console.log(circum(10))
console.log(area(10))