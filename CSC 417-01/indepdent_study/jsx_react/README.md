# **JSX/REACT.JS**

## 1. Installatin:
* [Link](https://nodejs.org/en/download/)
* node --version
* npm --version
***

## 2. JSX:
* JSX is a format of Javascript where it is a mix of HTML and Javacript
```
const h1 = <h1>Hello World</h1>
```
* Under the constatn h1 we have the HTML tag heading followed by a message
* In JSX there always needs to be one outmost HTML tage similarly to HTML
```
const article = (
    <div>
        <img scr = {address}/>
        <h1>
        Welcome to Dan's Blog!
        </h1>
        <article>
        Wow I had the tastiest sandwich today.  
        I <strong>literally</strong> almost freaked out.
        </article>

    </div>

)
```
***
## 3. class:

* Since class is a keyword in JavaScript it would not be viable to use this in JSX which in HTML class is indeed being used. 
* Instead we use the `className`

```
***
<h1 className="indentity">Human</h1>
```
]

### 4. Javascript inside JSX:
* To have javascript inside of JSX it needs to be inside `{}` braces.

```
const adding = (
    <h1>{50+25}</h1>
)
```
***

### 5. Event Listener:
* Just like with HTML there are even listeners 
* We need to add the on keyword before the attribute like `onClick`
* More sytax [here](https://reactjs.org/docs/events.html#supported-events)
* The event listener's attribute value should be a function
```
<img onClick = {myFunc}/>
```
***
### 6. JSX Conditionals:
* The if else statements are put around and outside the JSX code
```
if(myFunc){
    <h1> Its Very {myFunc}</h1>
}else{
    <h1> I wish to retract my statemnt</h1>
}

```
#### Ternary Operator
* This is streamlined sytax to write a conditional statement

```
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
)
```

#### `&&` expression
* This is another streamlined way to have conditional statemnts

```
const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
)
```
### 7. .map() 
* .map() function is a function used to handle arrays in react.
```
let colors = ['red', 'blue', 'green']

let colorList = colors.map(i => <li>i</li>)
ReactDOM.render(<ul>colorList</ul>,  document.getElementById('app'))
```

* This gives us a unordered list of the iteams in each index.

***


### 8. React Component
* For react elements one does not need to always use JSX for react
```
let h1 = <h1>Hello Humans</h1>
//////////////////////////////

lwt h1 = React.creatElement(
    "h1",
    null,
    "Hello Humans"
)

```
### 9. Component Class
* `React.Component` is a class in Javascrpt that allows us to create our own component class. 
* A new component class should be capitalized
```
class <PersonalComponentName> extends React.Component {}
<MyComponentClass />
```