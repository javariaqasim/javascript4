
// .......................DATE...................

// ANSWER 1

var rightNow = new Date();
document.write(rightNow)

// ANSWER 2

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(4,7);
if (c === "Jan"){
    document.write("Current month: January")
}else if(c === "Feb"){
    document.write("Current month: February")
}else if(c === "Mar"){
    document.write("Current month: March")
}else if(c === "Apr"){
    document.write("Current month: April")
}else if(c === "May"){
    document.write("Current month: May")
}else if(c === "Jun"){
    document.write("Current month: June")
}else if(c === "Jul"){
    document.write("Current month: July")
}else if(c === "Aug"){
    document.write("Current month: August")
}else if(c === "Sep"){
    document.write("Current month: September")
}else if(c === "Oct"){
    document.write("Current month: October")
}else if(c === "Nov"){
    document.write("Current month: November")
}else if(c === "Dec"){
    document.write("Current month: December")
}


// ANSWER 3

var currentDay = new Date();
currentDay.toString;
var b = currentDay.toString();
var c = b.slice(0,3);
document.write("Today is " + c);

// ANSWER 4

var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("It's Fun Day")
}else if(c === "Sun"){
    document.write("It's Fun Day")
}else if(c === "Mon"){
    document.write("It's Fun Day")
}else if(c === "Tue"){
    document.write("It's Fun Day")
}else if(c === "Wed"){
    document.write("It's Fun Day")
}else if(c === "Thr"){
    document.write("It's Fun Day")
}else if(c === "Fri"){
    document.write("It's Fun Day")
}

// ANSWER 5  

var d = new Date();
  var n = d.getUTCDate();
  if(n<=15){
      document.write("First fifteen days of the month")
  }
  else{
      document.write("Last days of the month")
  }

// ANSWER 6

var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);

 
document.write("Current Date: " + todayDate);
document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// ANSWER 7

var d = new Date();
var n = d.getUTCHours();
var m = d.getUTCMinutes();
var s = d.getUTCSeconds();
 if(n<=12 && m==00 && s==00){
    alert("It's AM")
 }
 else{
     alert("It's PM");
 }

// ANSWER 8

var d = new Date();
d.setDate(0);
var laterDate=d;
document.write("LaterDate : " +laterDate);

// ANSWER 9

var date1 = new Date("05/18/2015"); 
var date2 = new Date("07/may/2022"); 

var Difference_In_Time = date2.getTime() - date1.getTime(); 

var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 

document.write(+Difference_In_Days+ " days have passed since 1st Ramazan,2015");


// ANSWER 10

var now1 = new Date("Jan/01/2015 01:00:00");
 var now2 =new Date();
 var Difference_In_Time = now2.getTime() - now1.getTime()/1000;
 document.write("On reference date "+now2 +", " +Difference_In_Time +" seconds has passed since beginning of 2015");


// ANSWER 11

var d = new Date();
document.write("Current Date : "+d);
d.setHours(d.getHours() - 1);
document.write(" <br>1 hour ago, It was: "+d);

// ANSWER 12

var d = new Date();
document.write("Current Date: "+d);
d.setFullYear(d.getFullYear() -100);
document.write("100 years back, It was: "+d);

// ANSWER 13


var userInput =prompt("Enter your dob")
var dob = new Date("Dec 10, 2003");
var Today = new Date ();
var dobTime =dob.getTime();
var TodayTime=Today.getTime()
AccuAge = TodayTime - dobTime

Age =((AccuAge)/(1000*60*60*24*30*12))
Age=Math.floor(Age)
document.write("Your age is:"+ Age +"<br>" + "Your birth year is:" + dob)


// ANSWER 14

document.write("<h1>K-Electric Bill</h1>");
document.write("Customer Name : <strong>ABC Customer</strong>");
var monthNames = ["jan", "febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var now = new Date();
 var month=now.getMonth();
 var nameOfCurrentMonth=monthNames[month];
 document.write("<br>Month : " +"<b>"+nameOfCurrentMonth +"</b>");
var units=prompt("Enter Number of units")
var charges=16;
document.write("<br>Number of units : " +"<b>"+units+"</b>" +"<br>Charges per unit : "+"<b>"+charges +"<b/><br>");
var Net_Amount_Payable= units * charges;
document.write("<br>Net Amount Payable (within Due Date) : " +"<b>" +Net_Amount_Payable + "</b>");
var lateCharges =350;
document.write("<br>Late Payment Charges : " +lateCharges);
var Gross_Amount_Payable = Net_Amount_Payable + lateCharges;
document.write("<br>Gross Amount Payable (after Due Date) : "+Gross_Amount_Payable);

// .................FUNCTION....................

// ANSWER 1

function myFunction() {
    var DATE =new Date()
    document.write(DATE)
    var currenttime = currenttime.get
    document.write(currenttime) 
    }
    console.log(myFunction())


//  ANSWER 2

function add(a,b){
    return (a + b)
}
var One=+prompt("Enter 1st number ");
var two=+prompt("Enter 2nd number ");
document.write(add(One,two));

//  ANSWER 3

function myFunction() { 
var num1 = parseInt(prompt('Enter the first number '));
var num2 = parseInt(prompt('Enter the second number '));
var sum = num1 + num2;
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
}
console.log(myFunction()) 


//  ANSWER 4

function name(num1, num2, operator) {
    if (operator=="+"){
        return "Sum = "+(num1 + num2)
    }
    else if(operator=="-"){
        return "sub = "+((num1 - num2))
    }
    else if(operator=="*"){
        return "Multiply = "+((num1 * num2))
    }
    else if(operator=="/"){
        return "Divide = "+((num1 / num2))
    }
    else if(operator=="%"){
        return "Reminder = "+((num1 % num2))
    }
    else{
        return "Operator is not valid "
    }
}
    var first=+prompt("Enter 1st number")
    var second=+prompt("Enter 2nd number")
    var operator1 =prompt("Enter the operator")
    document.write(name(first,second,operator1));

//  ANSWER 5

var sumOfSquares = function (num) {
    var i,
      sum = 0;
  
    for (i = 1; i <= num; i += 1) {
      sum += i * i;
    }
    return sum;
  }
  
  var num = parseInt(prompt("Enter a number:"), 10);

  console.log("The sum of squares for numbers up to and including " + num + " is " +
    sumOfSquares(num)) ;


// ANSWER 6

function factorial(n){
    if (n == 0){
        return 1
    }
    else{
        return n * factorial(n-1)
}
}
var num =+prompt("Enter An Integer ");
document.write(factorial(num));

// ANSWER 7

function count(num1,num2){
var numb=[] 
        temp=num1
        for(i=0;i<num2;i++){
         numb[i]=num1
         num1++
        }
        return numb
    }
    
    var start=prompt("Enter start num")
    var end=prompt("Enter end num")
    
    startI=parseInt(start)
    endI=parseInt(end)
    
    document.writeln(count(startI,endI))

// ANSWER 8

 function hypo(num1,num2){

        return ((num1*num1)+(num2*num2))
    }
    num3=+prompt("enter base")
    
    num4=+prompt("enter perp")
    document.write(hypo(num3,num4))



// ANSWER 9

var length = prompt("Enter a whole number for the length of your rectangle.");
var width = prompt("Enter a whole number for the width of your rectangle.");
function area(length, width) {
    return length * width;
}
function perimeter(length, width) {
    return 2*( length + width);
}

document.writeln('The area of your rectangle is ' + area(length, width));         
document.writeln('The perimeter of your rectangle is ' + perimeter(length, width));


// ANSWER 10

var wordR=""
var ln = prompt("Enter to check palindrome")

var tempWord = ln.split("");
for(i=tempWord.length-1;i>=0;i--){

 wordR=wordR+tempWord[i]
}
if (ln==wordR) {
 document.write("word is a palindrome")
}
 else {
  document.write("word isn't a palindrome")
}

// ANSWER 11

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
document.write("EXAMPLE STRING: the quick brown fox " + "<br>" + "EXPECTED OUTPUT :" + " " +  uppercase("the quick brown fox"));


// ANSWER 12

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi)
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
document.write(find_longest_word('Web Development Tutorial'));



// ANSWER 13

function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write(char_count('JSresource.com', 'o'));


// ANSWER 14

function calcCircumference(radius){
    return "The circumference is"+(2*3.14*radius)
}
var num1=+prompt("Enter the radius");
document.write(calcCircumference(num1));
function calcCircumference1(radius){
    return "<br>The area is"+(3.14*radius*radius)
}
document.write(calcCircumference1(num1));