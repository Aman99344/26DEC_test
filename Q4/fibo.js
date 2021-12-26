//Write a program to find nth number of fibonacci series 


 var num = prompt("enter the number");
  num = parseInt(num);
  var a = 0;
  var b = 1;
  
  console.log(a);
  console.log(b);
  var count = 2;
  while(count < num) {
  var c = a + b;
  console.log(c);
  a = b;
  b = c;
     count = count + 1;
 }