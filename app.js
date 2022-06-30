
// .......................DATE...................

// ANSWER 1

// var DATE =new Date()
// document.write(DATE)

// ANSWER 2

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }


// ANSWER 3

// var currentDay = new Date();
// currentDay.toString;
// var b = currentDay.toString();
// var c = b.slice(0,3);
// document.write("Today is " + c);

// ANSWER 4

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat"){
//     document.write("It's Fun Day")
// }else if(c === "Sun"){
//     document.write("It's Fun Day")
// }else if(c === "Mon"){
//     document.write("It's Fun Day")
// }else if(c === "Tue"){
//     document.write("It's Fun Day")
// }else if(c === "Wed"){
//     document.write("It's Fun Day")
// }else if(c === "Thr"){
//     document.write("It's Fun Day")
// }else if(c === "Fri"){
//     document.write("It's Fun Day")
// }

// ANSWER 5  


// ANSWER 6

// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// ANSWER 7

// var dt = new Date();
// var h = dt.getHours(),
//   m = dt.getMinutes();
// var time;
// if (h == 12) {
//   time = h + ":" + m + " PM";
// } else {
//   time = h > 12 ? h - 12 + ":" + m + " PM" : h + ":" + m + " AM";
// }
// document.write(`it's ${time}`);

// ANSWER 8

// var laterDate = new Date();
// document.write("Later date:" + laterDate)


// ANSWER 10

// var refrenceDate = new Date();
// document.write("On refrence date" + refrenceDate +","+"<br>"+"488091 seconds had passed  since beginning of 2015")

// ANSWER 11

// var currentDate = new Date();
// document.write("Current date:" + currentDate)

// ANSWER 12

// var currentDate = new Date();
// document.write("Current date:" + currentDate)


// ANSWER 13


// var userInput =prompt("Enter your dob")
// var dob = new Date("Dec 10, 2003");
// var Today = new Date ();
// var dobTime =dob.getTime();
// var TodayTime=Today.getTime()
// AccuAge = TodayTime - dobTime

// Age =((AccuAge)/(1000*60*60*24*30*12))
// Age=Math.floor(Age)
// document.write("Your age is:"+ Age +"<br>" + "Your birth year is:" + dob)




// .................FUNCTION....................

// ANSWER 1

// function myFunction() {
//     var DATE =new Date()
//     document.write(DATE)
//     var currenttime = currenttime.get
//     document.write(currenttime) 
//     }
//     console.log(myFunction())


//  ANSWER 2

// function greeting(){
//     var firstName =prompt ("enter first name")
//     var lastName =prompt ("enter last name")
//     alert(firstName+lastName)
//     }
//     console.log(greeting());

//  ANSWER 3

// function myFunction() { 
// var num1 = parseInt(prompt('Enter the first number '));
// var num2 = parseInt(prompt('Enter the second number '));
// var sum = num1 + num2;
// console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// }
// console.log(myFunction()) 


//  ANSWER 4

// function calc(opr1 ,sign ,opr2){
//     if (sign==="+"){
//     sum=opr1 + opr2
//     return sum
// }else if(sign==="-"){
//     sub =opr1 - opr2
//     return sub
// }else if (sign==="*"){
//     multi = opr1 * opr2
//     return multi
// }else{
//     return "Wrong"
// }
// }

// var result = calc (8, "+" , 6)
// var result1 = calc (8, "-" , 6)
// var result2 = calc (8, "*" , 6)
// var result3 = calc (8, "%" , 6)

// console.log (result)  
// console.log (result1)
// console.log (result2)
// console.log (result3)


//  ANSWER 5

// var sumOfSquares = function (num) {
//     var i,
//       sum = 0;
  
//     for (i = 1; i <= num; i += 1) {
//       sum += i * i;
//     }
//     return sum;
//   }
  
//   var num = parseInt(prompt("Enter a number:"), 10);

//   console.log("The sum of squares for numbers up to and including " + num + " is " +
//     sumOfSquares(num)) ;


// ANSWER 6

// let myArray = [];

//     function calculateFactorial (myFacNumber)
//     {
      
//        let result = 1;
//        let c; 
    
//       for(let x = 1; x<=myFacNumber; x++)
//       {
//          for(let j = x; j<=x;j++)
//          {
//            c= myArray[j] = x;
//            result *= c;
//          }
//       }
//      return result; 
//     }
//     console.log(calculateFactorial(5));


// ANSWER 7


// ANSWER 8

// const base = 2;
// const perpendicular = 2;
// const findHypotenuse = (base, perpendicular) => {
//    const bSquare = base ** 2;
//    const pSquare = perpendicular ** 2;
//    const sum = bSquare + pSquare;
//    const hypotenuse = Math.sqrt(sum);
//    return hypotenuse;
// };
// console.log(findHypotenuse(base, perpendicular));
// console.log(findHypotenuse(2, 2))



// ANSWER 9

// var length = prompt("Enter a whole number for the length of your rectangle.");
// var width = prompt("Enter a whole number for the width of your rectangle.");
// function area(length, width) {
//     return length * width;
// }
// function perimeter(length, width) {
//     return 2*( length + width);
// }

// document.writeln('The area of your rectangle is ' + area(length, width));         
// document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


// ANSWER 10

// function check_Palindrome(str_entry){
//        var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
//         var ccount = 0;
//         if(cstr==="") {
//             console.log("Nothing found!");
//             return false;
//         }
//         if ((cstr.length) % 2 === 0) {
//             ccount = (cstr.length) / 2;
//         } else {
//             if (cstr.length === 1) {
//                 console.log("Entry is a palindrome.");
//                 return true;
//             } else {
  
//                 ccount = (cstr.length - 1) / 2;
//             }
//         }
//         for (var x = 0; x < ccount; x++) {
   
//             if (cstr[x] != cstr.slice(-1-x)[0]) {
//                 console.log("Entry is not a palindrome.");
//                 return false;
//             }
//         }
//         console.log("The entry is a palindrome.");
//         return true;
//     }
//     check_Palindrome('madam');
//     check_Palindrome('nurses run');
//     check_Palindrome('fox');


// ANSWER 11

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// document.write("EXAMPLE STRING: the quick brown fox " + "<br>" + "EXPECTED OUTPUT :" + " " +  uppercase("the quick brown fox"));


// ANSWER 12

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi)
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));



// ANSWER 13

// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// document.write(char_count('JSresource.com', 'o'));


// ANSWER 14