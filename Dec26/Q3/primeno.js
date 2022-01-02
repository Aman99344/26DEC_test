//Write a program to take input from user and check //whether that is prime or not.


var num = prompt("Enter the number");
{  
  for(i = 2; i <= num/2; i++)
{
  if(num % i == 0)
{
  break;
}
}

 if(i > num/2)
  alert("it is  a Prime Number");
  else
  alert (it is not a prime number");
  }