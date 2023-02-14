/*Write your code below
let bobsFollowers = ['Tod', 'Jim', 'Tony', 'Yoku']
let tinasFollowers = ['Tod', 'Jim', 'Jimbe']
let mutualFollowers = []

for (let i = 0; i< bobsFollowers.length; i++){
  for (let j = 0; j< tinasFollowers.length; j++){
    if (bobsFollowers[i] === tinasFollowers[j]){
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}
let currentStatus = 0

while (currentStatus < 9){
    
    console.log(currentStatus)
    currentStatus++

}
*/

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
 