// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/

let input = +prompt("Enter a number");
if(input % 2 === 0){
  alert("number is even")
}else {
  alert("number is odd")
}



// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
  let input1 = Number(prompt("Enter first value"));
  let input2 = +prompt("Enter Second value");
  if(input1>input2){
    alert("First value is max");
  }else{
    alert("second value is max");
  }


// 3. Convert the above code using`?` terniary operator
let input = +prompt("Enter a number");
input % 2 === 0 ? alert('number is even') : alert('number is odd');

let input1 = Number(prompt("Enter first value"));
let input2 = +prompt("Enter Second value");
input1 > input2 ? alert("First value is max") :  alert("second value is max");



/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let house = prompt("Enter house name");
if(house === "stark"){
  alert("Winter is coming");
}else if(house === "lanister"){
  alert("A lannister always pays his debt")
}else{
  alert("All men must die");
}
// 5. Convert the above code using`?` terniary operator
let house = prompt("Enter house name");
house === "stark"  ? alert("Winter is coming") : house === "lanister"  ?   alert("A lannister always pays his debt") :alert ("All men must die");
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let month = +prompt("Enter a month number");
switch(true){
   case month === 1:
     alert("january");
     break;
     case month === 2:
      alert("february");
      break; 
      case month === 3:
      alert("march");
      break; 
      case month === 4:
      alert("april");
      break; 
      case month === 5:
      alert("may");
      break; 
      case month === 6:
      alert("june");
      break;
      case month === 7:
      alert("july");
      break; 
      case month === 8:
      alert("august");
      break; 
      case month === 9:
      alert("september");
      break; 
      case month === 10:
      alert("october");
      break; 
      case month === 11:
      alert("november");
      break; 
      case month === 12:
      alert("december");
      break; 
     default:
       alert("Incorrect Input")  
}

/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = +prompt("Enter your salary amount");
let tax,total;
switch(true){
  case salary <= 20000:
     tax = (salary * 10)/100;
    total = salary -tax;
    alert(`total = ${total}`);
    break;
    case salary <= 40000:
       tax = (salary * 20)/100;
       total = salary -tax;
      alert(`total = ${total}`);
      break;
    case salary > 50000:
       tax = (salary * 30)/100;
       total = salary -tax;
      alert(`total = ${total}`);
      break;
     default:
       alert("incorrect input"); 
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/
let marks = +prompt("Enter marks");
switch(true){
  case marks >100 :
    alert("Marks can,t be grater than 100");
    break;
  case marks > 80 && marks < 100:
    alert("GradeA");
    break; 
  case marks >50 && marks < 80:
    alert("Grade B");
    break;
  case  marks > 30 && marks < 50:
    alert("Grade C");
    break;
  case marks > 0:
    alert("Grade D")   
    break;  
    default:
      alert("Incorrect");
} 

let marks = +prompt("Enter marks");
if(marks > 100){
   alert("Marks can't be greater than 100");
}else if(marks > 80 && marks < 100){
  alert("GradeA");
}else if( marks >50 && marks < 80){
  alert("Grade B");
}else if(marks > 30 && marks < 50){
  alert("Grade C")
}else if(marks > 0){
  alert("Grade D");
}else {
  alert("Incorrect Input")
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is the weather like outside");
weather === "sunny" ? alert("Wear a T-shirt") : 
weather === "rainy" ? alert("Don't forget to take your raincoat") : 
weather === "hot" ? alert("Get a hanky") :
weather === "freezing" ? alert("Get your sweeter on") : alert("Not a valid input");