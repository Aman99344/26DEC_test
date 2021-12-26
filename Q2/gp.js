
//Write a program to find nth number of arithmetic progression(GP)


var a = 2; 
var r = 3; 
var n = 5;

var gp;
    for (var i = 0; i < n; i++) {
        gp = a * Math.pow(r, i);
        console.log(gp + " ");
    }