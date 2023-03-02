// console.log // line(8-15)

// variables {
// variable declaration. // lene(30-41)
// }

// variabel naming conventios. {
// camel case. // line(64-72)
// spatule cases. // line(76-85)
// variable naming limitations. // line(89-103)
// }

// data types {
// typeof. // line(137-151)
// }

// re-assign. // line(160-177)

// operator. {
// math operator. // line(212-232)
// string operation. // line(236-243)
// assignment operator. // line(249-262)
// comparison oparator. // line(266-277)
// oparator pracidency. // lien(283-288)
// }

//

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

// // in programming, a variable is a value that can change, depending on conditions or on information passed to the program. //

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

// // A variable name must begin with a letter or an underscore character (_). A variable name cannot start with a digit. A variable name can only contain alpha-numeric characters and underscores ( a-z, A-Z , 0-9 , and _ ). Variable names are case-sensitive (age, Age and AGE are three different variables) //

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

// 1. Arithmetic Operators: Used to perform arithmetic operations on numerical values, such as addition (+), subtraction (-), multiplication (*), division (/), and modulus (%). //

// 2. Assignment Operators: Used to assign values to variables, such as simple assignment (=), compound assignment (+=, -=, *=, /=, %=), and bitwise assignment operators. //

// 3. Comparison Operators: Used to compare two values and return a Boolean value of true or false, such as equality (==), strict equality (===), inequality (!=), strict inequality (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=). //

// 4. Logical Operators: Used to combine two or more Boolean expressions and return a Boolean value of true or false, such as AND (&&), OR (||), and NOT (!). //

// 5. Conditional (Ternary) Operator: Used to simplify if/else statements into a single line, such as the syntax: (condition) ? value1 : value2. //

// 6. Type Operators: Used to determine the type of a value or variable, such as typeof and instanceof. //

// 7. Bitwise Operators: Used to perform bitwise operations on numerical values, such as bitwise AND (&), bitwise OR (|), bitwise XOR (^), bitwise NOT (~), left shift (<<), and right shift (>>). //

// 8. Unary Operators: Used to perform operations on a single operand, such as increment (++), decrement (--), logical NOT (!), and bitwise NOT (~). //

// 9. String Operators: Used to concatenate two or more strings using the + operator. //

//============================================================================================================================================//

// // math operator

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

// // comparison oparator - A comparison operator in programming is used to compare two values and return a Boolean value of true or false. (<, >, <=, >=) //

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

// // consditions and control structure (if/else, else-if) - if/else and else-if are conditional statements in programming used to execute different code blocks depending on whether a condition is true or false. //

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
