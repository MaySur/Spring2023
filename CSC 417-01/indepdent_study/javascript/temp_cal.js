const fahre = cel => `${cel}°C is ${((cel*9)/5)+32}°F`
const cel = fah => `${fah}°F is ${((fah-32)*5)/9}°F`

console.log(fahre(12))
console.log(cel(53.6))