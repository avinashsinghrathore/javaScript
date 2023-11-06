// var, let, const
//=================

//var
// var count = 50
// var count = 44  // redeclare and re-assign is possible
// console.log(count);   // should not use var

//let
// let point = 200
// let point = 400  // can not be redelcare
// point = 500  // can not be redelcare but reassign;
// console.log(point);      // let we can use where value need to be change

//const
// const avi = 121
// avi = 55            // const can not be redeclare and reassign
// console.log(avi);    //try to use const frequently

//-----------------------------------------------------------------------------------------

//datatypes

//  7 datatypes

// Number = 1,2,3,5,6,78,3.5,88.30 // it takes all type of integer value like whole number and decimal also

// String = "i am avi", "10" // string need to have in double quotes

// Boolean = true/false

// Null --> intentionally absence of value

// let name = null
// name = 21
// console.log(name);

// undefined  --> variable declare but not initialize
// let score
// score = 88
// console.log(score);

// Object --> complex datastructure

//Symbol

// ----------------------------------------------------------------
// String
// console.log("hello coder");
// let firstName = 'avinash'
// let lastName = "singh rathore"
// console.log(firstName,lastName);  //if we concatinate two var with comma(,) operator it add space between them this is property of console.log
// console.log(firstName + " " + lastName);

// String concatination
// method 1 -->using + operator
// let fullName = firstName +" "+ lastName
// console.log(fullName);

// method 2 --> using template literals
// let fullName = `my name is ${firstName} ${lastName}`
// console.log(fullName);

// getting string character
// console.log(firstName[3]);

//-------------------------------------------------------------------
// String methods
// let firstName = 'avinash'
// let lastName = "rathore"
// console.log(firstName.toLowerCase());   //avinash
// console.log(firstName.toUpperCase());   //AVINASH
// console.log(lastName.indexOf("r"));     // 0
// console.log(lastName.lastIndexOf("r")); // 5

// trim
// let lastName = "               singh rathore      "
// console.log(lastName);
// console.log(lastName.trim());

// include
// console.log(lastName.includes("rathore"));

//slice
// let firstName = "avinash"
// console.log(firstName.slice(0,3));

// split
// let colorLiked = "green yellow red pink blue";
// console.log(colorLiked.split(" "));   //[ 'green', 'yellow', 'red', 'pink', 'blue' ]

// let age = 22
// console.log(age === "22");
//------------------------------------------------------------------------------------------------------------

//Array
// let fruits = ['apple', "orange","mango","banana"]
//how to access array
// console.log(fruits[1]);

//modify array
// fruits[0] = "avacado"
// console.log(fruits);

//array methods
// join
// console.log(fruits.join(" - "));

// indexOf
// console.log(fruits.indexOf("mango"));

// concatinate
// let secArray = ["avacado","dragon fruit", "water melon"]
// let modifiedList = fruits.concat(secArray)
// console.log(modifiedList);

// console.log(modifiedList.length);

// push method
// console.log(modifiedList.push("papaya")); // return length
// console.log(modifiedList);

// pop
// console.log(modifiedList.pop());

//--------------------------------------------------------------------------------------------
// loops

// for loop

// for(let i = 0; i <= 10; i++) {
//     console.log("hello lucifer", i);
// }

// let items = ["avacado","apple","custard apple","mango","kiwi","kamalam"]

// for(let i = 0; i < items.length; i++) {
//     console.log(items[i] , i);
// }

// while loop
// let i = 1;
// while ( i <= 5) {
//     console.log("hello prime", i);
//     i++;
// }

// do-while

// let i = 1
// do{
//     console.log("run atleats one time");
//     i++;
// }while(i <= 1) //
//------------------------------------------------------------------------

//if, eles, else-if statements
//-------------------------------------------------------------------------

//functions

//declaration
// function functionName(params) {
//     console.log("hello idiots");
// }
// function call
// functionName()

//function expression
// let fun = function() {
//     console.log("example of function expression");
// }
//calling function expression
// fun()

// passing value ( arguments and parameters)
// let invitation = function(name) {  //name is parameters and value we are passing is argument
//     console.log(`hey ${name} you are invited for party`);
// }

// invitation("avinash")
// invitation("Aarav")
//----------------------------------------------------------------------------------------------
// arrow function

// let arrowFunction = () => {
//     console.log("hello");
// }
//---------------------------------------------------------------------------------------------
// passing function as an argument(high order function example)

// let upperCase = function (str) {
//     return str.toUpperCase();
// }

// let lowerCase = function(str) {
//     return str.toLowerCase()
// }

// let transform = function(str, fun) {
//     return fun(str)
// }

// // console.log(transform("hello aarav", upperCase));
// console.log(transform("HELLO AVINASH", lowerCase));
//------------------------------------------------------------
// setTimeOut and setInterval

// setTimeOut -> run function "once" after "interval" of time
// setInterval -> run function repeatedly after interval of time

// setTimeOut
// function greeting() {
//     console.log("lets do it");
// }

// setTimeout(greeting, 9000)

// setInterval
//  function greetingHello(params) {
//     console.log("hello");
//  }

//  setInterval(greetingHello, 8000)

//-----------------------------------------------------------------------
// hoisting

// declare at the top of scope by default
// test = 10
// console.log(test);
// var test

// function test(params) {
//     console.log("i am hoisting");
// }

// test()

// let test = function(params) {
//     console.log("i am test");
// }

// test()
//---------------------------------------------------------------------
// introduction to objects in javascript
//  objects

// let car = {
//     color: "Black",
//     modelName: "bmw i8",
//     company: "bmw"
// }

// console.log(car);
// accessing the javaScript object properties

// console.log(car["modelName"]);
// console.log(car.modelName);

//  "modify" the object properties
// car.color = "red"
// console.log(car);

// Delete properties of object
// let obj1 = {
//     prop1: "alpha",
//     prop2: "beta",
//     prop3: "gamma"
// }
// console.log(delete obj1); // return true or false
// console.log(obj1);
//---------------------------------------------------------------------------------------
//  this

// let person = {    
//   name: "Avinash singh rathore",
//   city: "bangalore",
//   job: "software engineer",
//   getSummary: function() {
//     console.log(`i am ${this.name} i lives in ${this.city} an i am a ${this.job}`);
//   }
// };

// console.log(person.getSummary());
//--------------------------------------------------------------------------------------------------------------------------
// forEach method of array

// it is another type of loop which we used to traverse over the array elements

// let dishes = ["briyani","chicken massala","chicken angara","chicken punjabi"]

// for(let i = 0; i < dishes.length; i++) {
//     console.log(dishes[i]);
// }

// console.log("============================");

// dishes.forEach(element => {
//     console.log(element);
// });
//------------------------------------------------------------------------------------
//  Object inside array

// let blockList = [{name:"avinash",reason:"fit"},{name:"aarav",reason:"smart"}]
// for(let i = 0; i < blockList.length; i++) {
   
//     console.log(`${blockList[i].name} you are ${blockList[i].reason} `);
//     // console.log(blockList[i].name);
// }
//------------------------------------------------------------------------------------
//  Math object

// console.log(Math);

// let number = 7.6
//console.log(Math.round(number)); // round to nearest interger 

//console.log(Math.floor(number)); // round to down

// console.log(Math.ceil(number));   // round to upper

// console.log(Math.trunc(number));    // remove decimal parts

// console.log(Math.random(number));

//------------------------------------------------------------------------------------
// "bind" method
// function greet() {
//     console.log(`welcome ${this.name} ${this.lastName} to javaScript`);
// }

// let person = {
//     name: "Avinash",
//     lastName: "Singh Rathore"
// }
         
// let invitation = greet.bind(person)

// invitation()
//----------------------------------------------------------------------------------------
// "objects and reference" how reference are passed to variable

// let arr = [10,2,3,4,12]

// let refArr = arr

// refArr[4] = 121 
// console.log(arr);
// console.log(refArr);
//----------------------------------------------------------------------------------------
//  "for-in" loop each iteration return a key of object
// this loop is used for objects mostely

// let car = {
//     name: "tesla x1",
//     model: "x1",
//     company: "tesla",
// }

// console.log(car);

// for (let key in car) {
//     console.log(key);
// }
//----------------------------------------------------------------------------------------
// javaScript DOM (document object model)

// created by browser as the html load the browser
// browser create object of the html called 'document object'
// in document object model there is a model of complete html in tree like structure


// getting html elements using querySelector/All
// querySelector returns -> first element that match css selector
// to get all matched element we use querySelectorAll













