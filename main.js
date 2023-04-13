// console.log --

// variables {
// variable declaration --
// }

// variabel naming conventios {
// camel case --
// spatule cases --
// variable naming limitations --
// }

// data types {
// typeof --
// }

// re-assign --

// operator  {
// math operator --
// string operation --
// assignment operator --
// comparison oparator --
// oparator pracidency --
// }

// operator. {
// math operator --
// string operation --
// assignment operator --
// comparison operator --
// oparator pracidency --
// }

// template literals.

// consditions and control structure (if/else, else-if) {
// (if/else) condition --
// else-if conditon --
// }

// type conversion and type coercion {
// type conversion --
// type coercion --
// }

// truthy and falsy value {
// falsy value --
// falsy value --
// }

// equality operator {
// equal (== or ===) --
// not equal (!= or !==) --
// }

// prompt --

// nested condition --

// logical operator --

// switch statement --

// statement and expression --

// ternary operator --

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // console.log

// // console.log -  the console.log() method outputs a message to the web console. the message may be anything.

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log("Hello, World");
// console.log("Wellcome to Jave Script");

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // variables

// // variables are used to store data values. The var, let, and const keywords are used to declare variables. Variables can store different data types such as numbers, strings, objects, and functions. JavaScript is a dynamically typed language, meaning the data type of a variable is determined at runtime, and can be changed during the execution of a program. Variables in JavaScript can also have global or local scope, which determines the accessibility of a variable within a program. //

//============================================================================================================================================//

// // variabel declaration

// let name = "Sami";
// // double cotation or single cotation is used to decleare a strion. //
// let number = 10;
// // numbers does not requeares cotation. //
// let temperature = 300;

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // we can get the vallew of a variabel by writing it's name without cotation in console.log //

// console.log(temperature);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // variabel naming conventios

// // variabel naming conventios - A variable name can only have letters (both uppercase and lowercase letters), digits and underscore. The first letter of a variable should be either a letter or an underscore. There is no rule on how long a variable name (identifier) can be. //

//============================================================================================================================================//

// // camel case

// // camel case - if a variable name has more then two woeds then the first word will start with small letter and the socond wors will start with capital letter. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let firstName = "Sami";
// let lastName = "Khan";
// let ramFriquencyInTimeOverTorqueSpeed = 32000;

//============================================================================================================================================//

// // spatule cases

// // spatule cases - is java script breakes the generall naming conventions //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let his_name = "Sami";
// let YOUR_MONITOR_PRICE = 15000;
// let $her_name = "unknown";
// let PI = 3.1416;

//============================================================================================================================================//

// // variable naming limitations

// // variable naming limitations - A variable name must begin with a letter or an underscore character (_). A variable name cannot start with a digit. A variable name can only contain alpha-numeric characters and underscores ( a-z, A-Z , 0-9 , and _ ). Variable names are case-sensitive (age, Age and AGE are three different variables). //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let 10name = "Sami" // variable name can't start with number //

// let first&second ="unknown" // can't use & in vairiable name //

// let new-number = 100 // can't use hifen in variabel //

// let new = 10 // can't use keyword (new,true,false,function,let ETC) is variable name //

// let bike1 = "suzuki" // we should use descriptive name //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // data types

// // data types - in javascript, there are five basic, or primitive, types of data. The five most basic types of data are strings, numbers, booleans, undefined, and null. //

//============================================================================================================================================//

// 1. Number type (integer, floating) //

// 2. String type //

// 3. Boolean type - The Boolean type represents a logical entity and is inhabited by two values: true and false. //

// 4. Null type - The Null type is inhabited by exactly one value: null. //

// 5. Undefined type - The Undefined type is inhabited by exactly one value: undefined. //

// 6. Symbol type //

// 7. BigInt type //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let movieRating = 7.8; // number type (floating) //
// let movieName = "Interstller"; // string type //
// let bestMovie = true; // boolean type //

//============================================================================================================================================//

// // typeof

// //  typeof - typeof is a JavaScript keyword that will return the type of a variable when you call it. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let movieRating = 7.8;
// let movieName = "Interstller";
// let bestMovie = true;

// console.log(typeof movieName);
// console.log(typeof movieRating);
// console.log(typeof bestMovie);

// // typeof of keyword showes us the type of a data a variable is holding. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // re-assign

// // re-assign - re-assign consists of assigning a new value for a variable using the = operator. //

//============================================================================================================================================//

// let age = 30; // declareing a variable using let keyword. //

// age = 31; // re-assing. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let age; // it's possible to decleare a variable without a value using let keyword. //
// age = 30;

// const birthYear // const keyword does not allow us to decleare a variable without a value. //

// const birthYear = 1970 // re-assing does not works with const keyword. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // operator

// // operator -An operator in programming is a symbol or keyword used to perform specific operations on one or more operands, such as arithmetic or comparison operations.

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // 1. Arithmetic Operators: Used to perform arithmetic operations on numerical values, such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). //

// // 2. Assignment Operators: Used to assign values to variables, such as simple assignment (=), compound assignment (+=, -=, *=, /=, %=), and bitwise assignment operators. //

// // 3. Comparison Operators: Used to compare two values and return a Boolean value of true or false, such as equality (==), strict equality (===), inequality (!=), strict inequality (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). //

// // 4. Logical Operators: Used to combine two or more Boolean expressions and return a Boolean value of true or false, such as AND (&&), OR (||), and NOT (!). //

// // 5. Conditional (Ternary) Operator: Used to simplify if/else statements into a single line, such as the syntax: (condition) ? value1 : value2. //

// // 6. Type Operators: Used to determine the type of a value or variable, such as typeof and instanceof. //

// // 7. Bitwise Operators: Used to perform bitwise operations on numerical values, such as bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), and right shift (>>). //

// // 8. Unary Operators: Used to perform operations on a single operand, such as increment (++), decrement (--), logical NOT (!), and bitwise NOT (~). //

// // 9. String Operators: Used to concatenate two or more strings using the + operator. //

//============================================================================================================================================//

// // math operator //

// // The numbers (in an arithmetic operation) are called operands. //

// // The operation (to be performed between the two operands) is defined by an operator .//

// // (+	Addition)	Adds two numbers together.//
// // (-	Subtraction)	Subtracts the right number from the left.//
// // (*	Multiplication)	Multiplies two numbers together.//
// //	(/ Division)	Divides the left number by the right.//

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const currentYear = 2022;
// const birthYear = 2003;
// const age = currentYear - birthYear;
// console.log(age);

// console.log(age + 10);
// console.log(age / 5);
// console.log(age ** 2); // 2 to the power of age (age^2) //

//============================================================================================================================================//

// // string operation - In JavaScript, the "+" operator can be used as a string operator to concatenate (join together) two or more strings. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const firstName = "Sami";
// const lastName = "Khan";

// console.log(firstName + " " + lastName);

//============================================================================================================================================//

// // assignment operator - An assignment operator in programming is used to assign a value to a variable or expression using the "=" symbol. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// let sum = 10 + 20;
// sum= sum + 10
// sum += 10;
// sum -= 10;
// sum *= 2;
// sum /= 2;
// sum++; // adds 1 //
// sum--; // Subtracts 1 //

// console.log(sum);

//============================================================================================================================================//

// // comparison operator - A comparison operator in programming is used to compare two values and return a Boolean value of true or false. (<, >, <=, >=) //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const ageSanji = 20;
// const ageZoro = 21;

// console.log(ageZoro < ageSanji); // false. //
// console.log(ageZoro > ageSanji);
// console.log(ageSanji <= ageZoro);
// console.log(ageSanji >= ageZoro);
// console.log(ageSanji === ageZoro);

//============================================================================================================================================//

// // oparator pracidency - Operator precedence is the order in which operators are evaluated in an expression. It determines which operators are evaluated first and which ones are evaluated later. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(2022 > 2000 + 16);
// console.log(10 + (20 - 15) * 2);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // template literals - Template literals in JavaScript are a way to create strings that can contain placeholders for variables or expressions using backticks (`) and the ${} syntax. They allow for more readable and flexible string formatting. //

//============================================================================================================================================//

// const firstName = "Monkey";
// const midName = "D";
// const lastName = "Luffy";
// const age = 19;
// const profation = "Pirate";

// console.log(
//   `${firstName} ${midName} ${lastName} is ${age} years old and he is a profational ${profation}.`
// );

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(`
// Mouley
// D
// Luffy
// Is
// 19
// Years
// Old
// And
// He
// Is
// A
// pirate
// `); // template literals can be used for multy line output. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // consditions and control structure (if/else, else-if) //

// // if/else and else-if are conditional statements in programming used to execute different code blocks depending on whether a condition is true or false. //

// // if/else: If the condition in the if statement is true, execute the code block inside the if statement. Otherwise, execute the code block inside the else statement. //

// // else-if: If the condition in the if statement is false, check the condition in the else-if statement. If it's true, execute the code block inside the else-if statement. Otherwise, execute the code block inside the else statement.//

//============================================================================================================================================//

// // (if/else) condition //

// const first = 10;
// const second = 12;

// if (first > second) {
//   console.log("first is greater then second");
// } else {
//   console.log("second is the greater number");
// }

//============================================================================================================================================//

// // else-if conditon //

// const goldBar = 0;
// const m4 = 150;
// const m762 = 160;
// const akm = 155;
// const awm = 250;
// const groza = 200;

// if (goldBar >= m4) {
//   console.log("I can buy M4");
// } else if (goldBar >= m762) {
//   console.log("I can buy M762");
// } else if (goldBar >= akm) {
//   console.log("I can buy Akm");
// } else if (goldBar >= awm) {
//   console.log("I can buy AWM");
// } else if (goldBar >= groza) {
//   console.log("I can buy Groza");
// } else {
//   console.log("Don't have enough money");
// } // this method only produce one output. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // type conversion and type coercion. //

// // Type conversion is an explicit conversion from one data type to another using built-in methods. For example, the Number() method can be used to convert a string to a number, and the String() method can be used to convert a number to a string. //

// // Type coercion, on the other hand, is an implicit conversion of data types that occurs when an operation is performed on values of different data types. For example, if a number is concatenated with a string using the + operator, the number will be coerced into a string before the concatenation occurs. //

//============================================================================================================================================//

// // type conversion. //

// const num = "10";

// console.log(typeof num);
// console.log(Number(num));

// const test = "DBZ";

// console.log(typeof test);
// console.log(Number(test)); // output = NAN (Not a Number)   // string cAn't be turned into Number. //
// console.log(typeof NAN);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(typeof 10);
// console.log(typeof String(10));
// console.log(typeof "10");
// console.log(typeof Number("10"));

//============================================================================================================================================//

// // type coercion //

// const id = "Luffy";
// console.log(id + 10 + 20);
// console.log(10 + id + 20 + 30);
// console.log(10 + 20 + 5 + id + 10 + 20);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(10 + 20);
// console.log("10" + 20);
// console.log(10 + "20");
// console.log(10 - 20);
// console.log("10" - 20);
// console.log(10 - "20");
// console.log("Luffy" - 10);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // truthy and falsy value //

// // In JavaScript, every value is either truthy or falsy. A value is considered truthy if it evaluates to true when used in a boolean context, and falsy if it evaluates to false. //

//============================================================================================================================================//

// // falsy value //

// // there are 6 false value in jsvascript. //

// // 1. false
// // 2. null
// // 3. undefined
// // 4. 0
// // 5. NaN
// // 6. '' (empty string)

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));
// console.log(Boolean(0));
// console.log(Boolean(""));

//============================================================================================================================================//

// // truthy value //

// // everything except falcy value is trouthy. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(Boolean(1));
// console.log(Boolean(" "));
// console.log(Boolean({}));

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const money = 10;

// if (money >= 10) {
//   console.log("I have money");
// } else {
//   console.log("Not enough money");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const money = 10;

// if (money) {
//   console.log("I have money");
// } else {
//   console.log("Not enough money");
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // equality operator. //

// // The equality operator in JavaScript is used to compare two values to see if they are equal or not. There are two types of equality operators in JavaScript: == and ===. //

// // The double equal == operator compares two values for equality after doing type coercion if necessary. This means that if the two values being compared are of different data types, JavaScript will try to convert one of them to match the other before checking for equality. For example, "1" == 1 would evaluate to true because JavaScript would convert the string "1" to the number 1 before checking for equality. //

// // The triple equal === operator, on the other hand, checks for equality without doing any type coercion. It only returns true if the two values being compared are of the same data type and have the same value. For example, "1" === 1 would evaluate to false because the string "1" and the number 1 are of different data types. //

// // (=) assing operator.
// // (== or ===) equality operator.
// // (!= or !==) not equal.

//============================================================================================================================================//

// // equal (== or ===) //

// // The difference between (==) and (===) in JavaScript is that (==) performs type coercion, while (===) does not. (==) converts operands to a common type before comparison, which can lead to unexpected results, especially with falsy values. (===) only returns true if operands are of the same type and have the same value. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const age = "20";

// if (age == 20) {
//   // js does type coertion if we use (==), not strict //
//   console.log("You are an adult");
// } else {
//   console.log("You are a child");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const age2 = "20";

// if (age2 === 20) {
//   // js does not type coercion , strict
//   console.log("You are a adult");
// } else {
//   console.log("You are a child");
// }

//============================================================================================================================================//

// // not equal (!= or !==) //

// // The main difference between != and !== in JavaScript is that != performs type coercion, while !== does not. //

//--------------------------------------------------------------------------------------------------------------------------------------------//

// console.log(1 != "1");
// console.log(1 !== "1");

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // prompt //

// const number = prompt("Enter a number");
// console.log(number);

// const number2 = Number(prompt("Enter a number"));
// console.log(number2);

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // nested condition //

// // Nested if...else statements in JavaScript allow us to create more complex conditional statements. //

//============================================================================================================================================//

// const age = 18;
// const passport = true;
// const NID = true;
// const birthReg = true;

// if (age === 18) {
//   if (NID) {
//     if (passport) {
//       console.log(`You are an adult and you can apply for a job`);
//     }
//   }
// } else if (age !== 18) {
//   if (birthReg) {
//     console.log(`You are achild, You can't apply for a job.`);
//   }
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // logical operator //

// // Logical operators are used in JavaScript to combine and manipulate boolean expressions. There are three logical operators in JavaScript: && (logical AND), || (logical OR), and ! (logical NOT). //

// // {&&} (logical AND): Returns true if both operands are true, and false otherwise. //

// // {||} (logical OR): Returns true if at least one operand is true, and false otherwise. //

// // {!} (logical NOT): Returns true if the operand is false, and false if the operand is true. //

//============================================================================================================================================//

// const bounty = 150000000;
// const ship = 3;
// const crewmate = 9;

// if ((ship >= 3 && crewmate >= 8) || bounty >= 100000000) {
//   console.log("Can be a King of the pirets.");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const money = 200;
// const time = 5;

// if (money >= 100 || time > 5) {
//   console.log("DO Have time to eat 😄.");
// } else {
//   console.log("Don't have the time to eat 😥.");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// // leap year //

// const year = 2023;

// if (typeof year == "number") {
//   if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//     console.log(`${year} is a leap year.`);
//   } else {
//     console.log(`${year} is not a leap year.`);
//   }
// } else {
//   console.log("Enter valid number");
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // switch statement //

// // In JavaScript, the switch statement is a flow control statement that allows you to execute different blocks of code based on different conditions. //

// // The switch statement evaluates an expression and compares its value to multiple cases. If a match is found, the code block associated with that case is executed. If no match is found, the code block associated with the default case is executed (if one is defined). //

//============================================================================================================================================//

// const day = "Sunday";

// switch (day) {
//   case "Saturday": // day === Saturday
//     console.log("Wake up and go to school.");
//     break;
//   case "Sunday":
//     console.log("Wake up and go to school.");
//     break;
//   case "Monday":
//     console.log("No school today");
//     break;
//   case "Tuesday":
//     console.log("Wake up and go to school.");
//     break;
//   case "Wednesday":
//     console.log("Wake up and go to school.");
//     break;
//   case "Thursday":
//     console.log("Wake up and go to school.");
//     break;
//   default:
//     console.log("Put a valid day.");
// }

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const temp = 0;

// switch (temp) {
//   case -10:
//     console.log("About to die 🥶.");
//     break;
//   case 0:
//     console.log("Almost too cold");
//     break;
//   case 10:
//     console.log("Very cold");
//     break;
//   case 20:
//     console.log("Not so cold.");
//     break;
//   case 30:
//     console.log("Comfortable");
//     break;
//   case 40:
//     console.log("Hot but not so mutch");
//     break;
//   case 50:
//     console.log("Very hot.");
//     break;
//   case 60:
//     console.log("About to die 🥵");
//     break;
//   default:
//     console.log("I am dead");
// }

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // statement and expression //

// // statement - A statement is a standalone instruction that performs a specific action, like assigning a value to a variable, calling a function, or looping over an array. Statements usually end with a semicolon ; in JavaScript. //

// // expression - An expression, on the other hand, is a combination of values, variables, operators, and functions that evaluates to a single value. Expressions can be used as part of statements, or they can stand alone as a value. //

//============================================================================================================================================//

// if (10 < 12) {
//   console.log("12 is a greater number.");
// } else {
//   console.log("10 is a greater number.");
// }

// // in this case if and else are the statement and the output is the expression. //

//============================================================================================================================================//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//============================================================================================================================================//

// // ternary operator //

// // In JavaScript, the ternary operator is a shorthand way of writing an if-else statement. It is a way to write a conditional expression that evaluates to one of two values depending on whether a condition is true or false. //

//============================================================================================================================================//

// let number = 10;

// number > 10 ? (number += 5) : (number -= 5);
// console.log(number);

//--------------------------------------------------------------------------------------------------------------------------------------------//

// const a = 6;
// const b = 5;
// let c;

// a > b ? (c = b - a) : (c = a - b);
// console.log(c);
