// console.log("Hello World");
// console.log("Ajka amar mon valo");

// // variables
// // let name = "sami";
// let number = 80085;
// let temperature = 32;
// let devise = "Desktop";

// console.log(number);

// // variables naming convention (camel case)
// let herName = "Sakura";
// let myBykeBrand = "Ultimate Tode";
// let firstName = "Naruto";
// let lastName = "Uzumaki";
// let ramFrequencyInTimeOverTorqueSpeed = 3200;

// // Only For special case
// let YOUR_MONITO_PRICE = 15000000;
// let $unknown_girl_name = "Unknown";
// let PI = 3.1416;

// // Cant use this kinds of variable
// // let 10mafia_name = "daku" cant use number in the begening of variable
// // let bf&gf = "unknown"; cant use (&)
// // let new-number = 100; cant use (-)

// // cant use reserved keaywards for variable
// // let new = 10;
// // let true = 10;
// // let false = 20;
// // let function = 10;
// // let let = 30;
// // We shouldent use capital letter in the begening of variable (We will use this kind of name in JS class)
// // let Person = "Choppar";
// // We shouldent use a meaningful name
// // let bike1 = "Dukate"
// // let bike2 = "Kawasaki"

// console.log(herName);
// console.log(myBykeBrand);
// console.log(ramFrequencyInTimeOverTorqueSpeed);
// console.log(devise);

// /* 
// Data types: object or primitive data types:
//   1. number (integer, floating)
//   2. string (anything inside of "")
//   3. boolean (True or False)
//   4. undefined
//   5. null
//   6. symbol
//   7. bigint
//   value has type, variable dont have data types
//   */

// let movieRating = 7.8;
// let movieName = "inception";
// let isRaining = false;
// let isSheCure = true;
// let isMarried = false;
// let isJavaScriptFun;

// console.log(typeof movieRating);
// console.log(typeof movieName);
// console.log(typeof isRaining);
// console.log(typeof isSheCure);
// console.log(typeof isMarried);

// // re-assign value or mutate
// isJavaScriptFun = true;
// console.log(typeof isJavaScriptFun);

// // this data type is a bug of JS
// let carSpeed = null;
// console.log(typeof carSpeed);

// // null isn't an object. it's a bug

// let age = 30; // declareing a variable using let keyward
// age = 31; //re-assaign or mutate

// // we cant re-assaign const value. and we haveto set a fixed value or it will count as error
// const birthYear = 1970;
// // birthYear = 2000; cant change a const value

// // never use var it has alot of bugs
// var planMasterName = "Mr.X";
// planMasterName = "Mr.Y";

// // never use without kyword
// fatFriendName = "Janina";
// console.log(fatFriendName);

// const myLocation = "Dhaka";
// const distance = 234;
// console.log(myLocation, distance);
// console.log(YOUR_MONITO_PRICE);

// // math operations
// const currentYear = 2022;
// const ageTumpa = currentYear - 1998; //26
// const ageRahat = currentYear - 1998; //26

// console.log(ageTumpa, ageRahat);

// console.log(ageTumpa * 2);
// console.log(ageTumpa / 2);
// console.log(ageTumpa ** 2); //2 to the power of 24 (24^2)

// const firstName = "Afia Binte";
// const lastName = "Ayesha";

// console.log(firstName + " " + lastName);

// const bikeBrand = "Yamaha";
// const bikeModel = "MT15";
// const fullBikeName = bikeBrand + " " + bikeModel;
// // console.log(bikeBrand + " " + bikeModel);
// console.log(fullBikeName);

// // assignment operators
// let number = 20 + 10; // 30
// // number = number + 15;
// number += 15; // 45
// number -= 10; // 35
// // number += 1;
// number++; // adds only 1
// // number -= 1;
// number--; // minus only 1

// console.log(number);

// // comaparison operators (>, <, >=, <=)
// console.log(ageTumpa <= ageRahat);

// // oprator precedence
// console.log(2022 > 2002 + 16);
// console.log(20 + (10 + 20) * 2);

// // template literals
// const nameTumpa = "Tumpa";
// const tumpaAge = 26;
// const jobTumpa = "prgrammer";
// // const bioTumpa =
// //   "My name is " +
// //   nameTumpa +
// //   ", " +
// //   tumpaAge +
// //   " years old and I am a " +
// //   jobTumpa +
// //   ".";

// const bioTumpa = `My name is ${nameTumpa}, ${tumpaAge} years old and I am a ${jobTumpa}.`; // back tick

// console.log(bioTumpa);

// // console.log("I am Shohan \n\
// // and \n\
// // I am a \n\
// // developer");

// console.log(`
// Hello
// I am Shohan
// and
// I 
// am 
// a
// programmer
// `);

// // conditionals or control structure
// const birthYear = 2012;

// if (birthYear <= 1999) {
//   console.log("You are a 90's kid! 😍");
// } else {
//   console.log("You are not a 90's kid! ☹️");
// }

// const bikeSpeed = 55;

// if (bikeSpeed > 60) {
//   console.log("You can not enter the Padma Bridge.");
// } else {
//   console.log("You can enter.");
// }

// const money = 300;
// const pizzaPrice = 350;
// const burgerPrice = 289;
// const milkShake = 80;
// const singaraPrice = 5;

// if (money > pizzaPrice) {
//   console.log("Pizza khabo");
// } else if (money > burgerPrice) {
//   console.log("Burger khabo");
// } else if (money > milkShake) {
//   console.log("Milk shake khabo");
// } else if (money > singaraPrice) {
//   console.log("Singara khabo");
// } else {
//   console.log("Pani khabo");
// }

// // grade calculation
// const marks = 33;

// if (marks >= 80) {
//   console.log("A+");
// } else if (marks >= 70) {
//   console.log("A");
// } else if (marks >= 60) {
//   console.log("A-");
// } else if (marks >= 50) {
//   console.log("B");
// } else if (marks >= 40) {
//   console.log("C");
// } else if (marks >= 33) {
//   console.log("Passed");
// } else {
//   console.log("Failed");
// }

// // type conversion (manually) and coercion (automattically)
// const inputYear = "Shohan";
// console.log(inputYear + 10 + 20); // string + number + number
// console.log(inputYear - 10); // string - number
// //NaN not a number

// console.log(10 + 20);
// console.log(10 - 20);
// console.log(10 * 20);
// console.log(10 / 20);
// console.log("Baby" + 20);
// console.log("Baby" - 20);
// console.log("Baby" * 20);
// console.log("Baby" / 20);
// console.log("Baby" + " " + "Babu");
// console.log("Baby" - " " - "Babu");
// console.log(200 - "100");
// console.log(200 * "100");
// console.log(200 / "100");
// console.log("200" + 100); // + and string thakle sobkisu string banabe

// const testNumber = "200";
// console.log(testNumber, typeof testNumber);
// console.log(Number(testNumber));
// console.log(Number("500.55"));
// console.log(Number("Tanha"));

// const testNumber2 = 200;
// const currentKiGese = false;
// console.log(testNumber2, typeof testNumber2);

// console.log(String(testNumber2));
// console.log(typeof currentKiGese);
// console.log(typeof String(currentKiGese));

// console.log(typeof NaN);

// // game
// let a = "1" + 1; //11
// a -= 1;

// let x = 2 + 3 + 4 + "5"; //955
// x += 5;
// console.log(x); // 955 100 19 23410 23455

// let y = "10" - "5" - "3" - 2 + "5";
// y -= 10;
// console.log(y); //510 -5 13 5

// let b = 1 + 1 - 1 - "1" + "10" - 20;
// b += "10";
// b--;
// console.log(b); //1010 -1

// let n = 1 - "1";
