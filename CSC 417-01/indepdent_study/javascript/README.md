# **JAVASCRIPT**

## 1.  Course : 

* [CODE ACADEMY](https://www.codecademy.com/learn/introduction-to-javascript)

***

## 2. Running:

* Install node
```
node <file_name>.js
```
* Runs the <file_name>.js file 
***


## 3. Syntax:
```
// This is a one line comment

console.log(5)

console.log(/*THIS IS ALSO A COMMENT BUT MULTILINED */ 23)
```

* //---> ONE lined comments
* console.log(5) ---> Prints 5 on console
* /* */ ---> Multiple lined comment like in java 
***

## 4. Data Types:
```
'Yo✋' //String
2323 // Number
54.3 // Number
False // Boolean
    'apples' === 'pears' // false 
    
null // null
undefined // Undefined
console // Object

``` 

### Math Operations
* Same as Python 

### Variables
``` 
var myName = "Luffy"

console.log("I'm "+myName)

```
* var keyword is a assignment variable
* naming convention is camel case: myName
* var names cannot start with numbers, protected keywords like function, no spaces in the name

``` 
let name = "Luffy"
let righthand

console.log("I'm "+name)
console.log("My right hand is  "+righthand) //undefined
righthand = "Zoro"
console.log("My right hand is  "+righthand) //Zoro

``` 
* let keyword should be used
* all rules for let follows the var
* '+' operator to concat the strings
* Why Luffy? Just cuz

``` 
const myName = "Sanji"
let righthand

console.log("I'm "+myName)
myName = "Usopp"
console.log("I'm "+myName)//TypeError
```

* const keyword is for the word constant
* cannot be reassigned, it will cause a TypeError
* must be assigned, letting it be undefined will cause a SyntaxError


***



## 5. Functions: [Docs](https://www.codecademy.com/resources/docs/javascript)
```
console.log("Lets get a Musician!".length)
```

* .length --> built-int function to find length of a string also calculates the whitespaces

### `typeof` Operator

* Checkes the data type of a variable

```
const datatype = 'meat'
console.log(typeof datatype) 
// Output ---> string
```



## 6.	Math Assignment Operators:
```
let w = 10
```
* +=  ---> w += 1 = 11
* -=  ---> w += 1 = 9
* *=  ---> w *= 2 = 20
* /=  ---> w /= 5 = 2

### Increment and Decrement Operators
```
let a = 11
a++
console.log(a) // 12

a--
console.log(a) // 11

```
* '++' is a increment operator that increases a value by 1
* '--' is a decrement operator that decreases a value by 1
* This operator can be added before or after the variable and both ways give the same result




## 7.	Strings:
### String Interpolation
* This is used to insert variables into strins using templae literals
* Much like the f string in Python
```
const myMoves = 'Spear'
console.log(`Gomu Gomu no ${myMoves}`)
```
* it should be wrapped in a backtick (`) not single quotes
* Followed by a $ symbol
* Then wrapping the variable name with {} brackets

## 8.	typeof Operator:
* Tuples is a list that can contain data that are multiple different data types
* Max 12 elememts
```
---------------tuples.rs---------------------
pub fn run() {

    let person: (&str, &str, i8) = ("Broom", "Sweep", 43);
    println!("{} has been {}ing for {} years now", person.0, person.1,person.2);
}
```  

## 9.	Conditionals:
* `if else`  similar to java 
```
if (true){
    console.log('YADADADA')
} else{
    console.log('TATATTATTTTA')
}
``` 
* 'apples' === 'grapes' // false
* 7 >= 8 // false
* and operator ---> '&&'
* or operator ----> '||'
* not/bang operator --> '!'

### Truthy and Falsy
* If the variable have some type of data then it is truthy except for a few situation
* A variable is falsy then th variable is either 0 or empty string, null, undefined, or NaN
### Ternary Operators
* short-hand syntax, simplified if else statment


```
---------------normal syntax-----------------
let male = true;
if (male){
    console.log('The mens restroom is on the right')
}else {
    console.loog('The womens restroom is on the left')
}
```

```
-------------------ternary operators-------------------

male ? console.log('The mens restroom is on the right') : console.log ('The womens restroom is on the left')

```
***
## 10.	Switch Statements:

* Similar to java

```
let items = 'eye'

switch (items){
    case 'eye':
        console.log ('An eye is $200,000')
        break
    case 'ear':
        console.log ('An ear is $100,000')
        break
    case 'liver':
        console.log ('An liver is $500,000')
        break
    default:
        console.log ('We dont have that')
        break
    // Output ---> An eye is $200,000
}

``` 
***


## 11. Fuction Declaration:
* Similar to every other language
```
function hello(){
    console.log('Hello Humans')
}

hello()
```  

* This is very similar to java
    * To call the function specify the name as shown
* Parameters for these functions are the same as python

```
let name = 'Nami'
function hello(x){
    let greeting = `Hello ${x}`
    return greeting
}

console.log(hello(name)) // Hello Nami

```

### Function Expresions
* Another way to define functions
```
const calculateArea = function (width, height){
    const area = width * height
    return area
}
```

* This is done by defining a function inside an expression.
* This can be done why any assignment declaration variables (var, let, const)
* Best practice is to use const as it is immutable

### Arrow Functions

* This gets rid of the function keyword

```
const name = (first, last) => {
    let fullName = first + ' ' + last
    return fullName
}

```

* There are many ways to optimize the Arraw Function

### Zero Parameters
```
const <functionName> = () =>{}
```

### One Parameters
```
const <functionName> = <parameterOne> =>{}
```
### Two or more Parameters
```
const <functionName> = (<parameterOne>, <parameterTwo> )=>{}
```

### Single-Line
```
const sum num => num + num;
```

### Multi-Line

```
const sum = num => {
    const total = num +num
    return total
}
```


## 12.	Scopes:
### Global Scope
```
const sea = 'East Blue'

const home = () => sea // East Blue

console.log(home()) //East Blue
```

* Variables defined inside a function is not acessible outside the function


## 13.	Arrays:
* Arrays in Javascript works similarly to Java

```
let colors = ['red', 'blue', 'green'] 

>>>['red', 'blue', 'green']

console.log(colors[0])
>>> red

colors[0] = 'purple'
console.log(color)
>>> ['purple', 'blue', 'green'] 
```
###  Built-in methods
* .push()
```
let colors = ['red', 'blue', 'green'] 
console.log(colors.push('pink'))

>>>['red', 'blue', 'green', 'pink']
```
* .pop()
```
let colors = ['red', 'blue', 'green'] 
console.log(colors.push('pink'))

>>>['red', 'blue', 'green', 'pink']
console.log(colors.pop())
>>>['red', 'blue', 'green']
```

* More Built-in [Javascipt_Docs](https://www.codecademy.com/resources/docs/javascript/arrays)

### Functions with arrays
```
let colors = ['red', 'blue', 'green'] 

const removeElement = newArr =>newArr.pop()


removeElement(colors)
console.log(colors)

>>> ['red','blue']
```

### Nested Loops
```const nestedArr = [[1], [2, 3]];
 
console.log(nestedArr[1]); // Output: [2, 3]
console.log(nestedArr[1][0]); // Output: 2
```


## 14.	Loops:
### `for` loops
* The syntax for the for loop is almost exactly the same as for java
```
for( let i =0;i < 4;i++ ){
    console.log(i)
} 

>>> 0
>>> 1
>>> 2
>>> 3

```  

### While Loops
* While loop syntax is very similar to that of Java's


```
let currentStatus = 0

while (currentStatus < 9){
    console.log(currentStatus)
    currentStatus++

}
```

### do......while loop

* Also similar to java

```
let message = 'Apple'
let mess = 'Devil Fruit'

do {
    console.log(message)
}while (true === false)

while (true === false){
    console.log(mess)
}

>> Apple
```

## 15.	Iterators
* These are built in array methods.
```
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

>>> Picasso is one of my favorite artists.
    Kahlo is one of my favorite artists.
    Matisse is one of my favorite artists.
    Utamaro is one of my favorite artists.


const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);
>>> [ 1, 4, 9, 16, 25 ]


const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);
>>> [ 5, 3.14, 100 ]




```  

## 16.	Objects:
* Objects is like a key-value pair
* A key is a variable name that points to a location in memory that holds value.
* Key's value can be any datatype 
```
let spaceship = {
    'Fuel Type' : 'diesel',
    color : 'silver'
}
```  

* Spaceship object has 2 properties 
    * Fuel Type and color
    * There are quotation around Fue Type because there is a space
* To access a object's properties 
    * U need to first put the object name followed by a `.` then a object property name:
    * `spaceship.color // 'silver' `
### Bracket Notation
* Alternative way to access object values
```
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
```
* Streamlined
```
let returnAnyProp = (objectName, propName) => objectName[propName];
 
returnAnyProp(spaceship, 'homePlanet'); //  Earth

```
## 17.	Methods:
* A method an action that a object can take.
* Like console.log(), where console is a object and log() is a method of the console object
* This is how you would declare a Object method and accessing the method
```
  let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      'back-up': {
        battery: "Lithium",
        terabytes: 50
      }
    }   
  }
  
```
* To access the object methods there are many ways, there is the dot `.` technique as well as the `[]` technique 

```  
let capFave = spaceship.crew.captain["favorite foods"][0]

console.log(capFave)
```
* In order to reassign data you use the `.` notation followed by `=`
```
spaceship.passengers = [{name : 'dog'}, {name : 'Robin'}]
console.log(spaceship.passengers)

let firstPassenger = spaceship.passengers[0]
console.log(firstPassenger)

```
***


## 18.	`this` keyword:
* `this` keyword acts very similarly to the `self` keyword from python
* `this` is used when are accessing a object's methods within a object inside a parent object
```
const robot = {
  model : '1E78V2',
  energyLevel : 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}`
  }
  
}

console.log(robot.provideInfo())
```

* Inside the return statement in the provideInfo() function inside the robot object when we try to reference the other fucntions we need to add the `this` keyword to access the values.


### Arrow notation with `this`
* `this` cannot be used with the Arrow notation


## 19. Access Modifiers:
* This is very similar to python where it depends on the developers to respect the naming notation.
* The naming convention is `_name`

## 20.	Getters:
* This is a technique that is used when we need to access object methods inside a object and format it and can return anytype with the methods
```
const name = {
    _birthname : '',
    firstName : 'Sanji',
    lastName : 'Vinsmoke',
    get fullName(){
        if (this.firstName && this.lastName){
            return `${this.lastName}, ${this.firstName}`
        }
    }
}
console.log( name.fullName)

```  

## 21. Setters:
* Setter is used when we need to reassign methods inside a object
```
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },

  set numOfSensors (num){
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num
    } else{
      console.log('Pass in a number that is greater than or equal to 0')
    }

    }
  
}

robot.numOfSensors = 100

console.log(robot.numOfSensors)
```  

## 21. Factory Functions:
* Factories are used to create objects and return them 
* This is used when there is a need to create a lot of objects but those objects share similarities and to avoid repetition
```
const robotFactory = (model, mobile) =>{
  return{
  model: model,
  mobile: mobile,
  beep() {
    return 'Beep Boop'
  }
  }
}

const tinCan = robotFactory('P-500', true)
console.log(tinCan.model) // P-500
const stupidBot = robotFactory('P', false)
console.log(stupidBot.model) // P
const moenyBot = robotFactory('Gold-696', true)
console.log(moenyBot.mobile) // true
```  






## 22. Built-in Objects:
* [DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods)


```
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:

const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot)
console.log(newRobot);
```  

## 23. Classes:
* A class is where we write an object in which often helps when there is a repetation of a similar object
```
class crew {
    constructor(name) {
        this._name = name;
        this._attack = 0;
      }
    get name (){
        return this._name
    }
    get attack() {
        return this._attack
    }

    attackPower(){
        this._attack++
    }
}

let luffy = new crew('Luffy')
console.log(luffy.name) // Luffy
console.log(luffy.attack) // 0
luffy.attackPower()
luffy.attackPower()
luffy.attackPower()
console.log(luffy.attack) //3
```
* `constructor` is a method under which you declare the variables and also have the parameters for the class.
