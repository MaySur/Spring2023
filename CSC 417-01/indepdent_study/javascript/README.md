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
* var keyword if a assignment variable
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


## 11. Conditionals:
* If else like in any other language
```
pub fn run(){

    let age = 21;
    let check_id= true;
    let familiar = true;

    if age >=21 && check_id || familiar{
        println!("Bouncer: Come on in!")
    }
    else if age <21 && !check_id{
        println!("Bouncer: Get out of here!")
    }else{
        println!("Bouncer: ID please")
        
    }


    let is_old = if age >= 21{true} else {false};
    println!("Is old enough: {}", is_old);


}

```  


## 12. Loop:
* Variety of loops like any other languages
```
-----loops.rs------------------
pub fn run(){
    let mut count =0;

   loop{
    count += 1;
     println!("No. {}", count);
      if count ==20{
         break;
        }
    }

    while count <=100{

        if count % 3 == 0 && count % 5  == 0{ 
            println!("FizzBuzz")
        }
        else if count % 3 == 0{
            println!("Fizz")
        }
        else if count % 5 == 0{
            println!("Buzz")
        }
        else{
            println!("{}", count)
        }
        count +=1;
    }


    for i in 0..100{
        if i % 3 ==0 && i % 5 ==0{println!("Fizzbuzz");} 
        else if i % 3 ==0  {println!("Fizz")}
        else if i % 5 ==0 {println!("Buzz")}
        else {println!("{}",count)}
    }

}

```  


## 13.	Fuctions:
* Similar to every other language
```
-----------functions.rs----------------
pub fn run(){

    greeting("Greetings", "Oliver");
    let get_sum = add(5,5);
    println!("Sum: {}", get_sum);


//closer
    let n3 =10;
    let add_nums = |n1: i32, n2: i32| n1 + n2 + n3;
    println!("add_nums function: {}", add_nums(3,3));


}

fn greeting(greet : &str, name: &str){
    println!("{} {}", greet, name);

}

fn add(n1: i32, n2: i32) -> i32{
    n1+n2
}
```  

* Always need to specify the datatypes for the parameters for functions --> 
    * fn <function_name> (<param_1> : <data_type>){}
* In order to return something instead of printing we need to specify the return type -->
    * fn <function_name> (<param_1> : <data_type>) --> <return_type>{}
    * There should also not ber ';' at the end of the return statement as shown in the code above
* The closer is similar to the add fucntion but more optimized and more free unlike the add function whihc is block code


## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
-------------pointer_ref.rs----------------------
pub fn run(){
    // Primitive array pointer behavior
    let arr1 = [1,2,3];
    let arr2 = arr1;
    println!("Val in arrs: {:?}", (arr1, arr2));

    //Vector non-primitive pointer behavior
    
    let vec1= vec![1,2,3];
    //let vec2 = vec1;
    let vec2 = &vec1;


                                    //vec1
    println!("Val in Vector: {:?}", (&vec1, vec2));

}
```  
* We see the differnce in behavior between a primitive type and a non-primitive type:
    * Under primitive type when the first pointer or variable (in this case arr1) is reassigned to anothe pointer (arr2) both pointers still have the memory address to the data that is assigned
    * While with non-primitive type it is not the case as we see with thr error. The inital pointer (vec1) after being assigned to the second pointer (vec2), is no longer pointing to the data and thus gives us an error
    * In order to change this we need to put the '&' infront of the pointer as shown above



## 15.	Structs:
* This is like classes in java
```
----------struct.rs----------
struct Color{
        red: u8,
        green: u8,
        blue: u8
    }

//Tuple Struct

struct Color_Ver2(u8,u8,u8);
pub fn run(){

    let mut c= Color{
        red: 255,
        green: 0,
        blue: 0
    };

    c.red= 200;

    //println!("Color: {} {} {}", c.red, c.green, c.blue );
    let mut c_2 = Color_Ver2(255,0,0);
    c_2.0= 200;

    println!("Color: {} {} {}", c_2.0, c_2.1, c_2.2);

}
    
``` 
* More detailed example of structs in person_struct.rs 

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  

## 14.	Pointer Refrences:
* This is a pointer in memory
* Memory works similar to C/C++ like a stack
```
<link rel="stylesheet" href="{% static '<app_name>/styles.css' %}">
```  
