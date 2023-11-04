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

let items = ["avacado","apple","custard apple","mango","kiwi","kamalam"]

for(let i = 0; i < items.length; i++) {
    console.log(items);
}






 