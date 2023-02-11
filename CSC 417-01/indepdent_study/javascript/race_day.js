let raceNumber = Math.floor(Math.random() * 1000);

let verification = true
let age = 18

if (verification && age > 18){
  raceNumber +=1000
}

if (verification && age > 18){
  console.log(`The race will start at 9:30 am and your race number is ${raceNumber}`)
} else if(!verification && age > 18 ){
  console.log(`Late adults run at 11:00am and your race number is ${raceNumber}`)
} else if(age < 18){
  console.log(`Youth registrants run at 12:30 pm (regardless of registration) and your race number is ${raceNumber}`)
}else {console.log('Head to the registration desk')}