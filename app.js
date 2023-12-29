 document.write("Q:-1"+"<br> <br>")


 function date (){
    var now = new Date()
    document.write(now)
}
date();
document.write("<br>")
document.write("Q:-2"+"<br>")

function name(){
    var fName = prompt("Enter your first name..?")
    var lName = prompt("Enter your last name ..?")
    var fullname = fName+lName
    document.write(fullname)
}

name()

 document.write("<br>"+"Q:-3"+"<br>")


function sum(){
    var num1 = +prompt("Write the first number to sum..?")
    var num2 = +prompt("Write the second number to sum ..?")
    var sum = num1+num2
    document.write(sum)
}

sum()

document.write("<br>"+"Q:-4"+"<br>")
function calculator(){
    var opt = prompt("Enter the operator exp - + * /")
    var num3 = +prompt("Enter your first number..?")
    var num4 = +prompt("Enter your second number ..?")
    if ( opt === "-"){
        document.write(num3 - num4)
    }else if (opt === "+"){
        document.write(num3 + num4)
    }else if (opt === "*"){
        document.write(num3 * num4)
    }else if (opt === "/"){
        document.write(num3 / num4)
    }else alert("plase enter the right opertor")
    
}

calculator()
document.write("<br>"+"Q:-5"+"<br>")

function sqr(){
    var sqr1 =prompt("Write the number to find the squre..!")
     document.write(Math.sqrt(sqr1)+"<br>")
}
sqr()

document.write("<br>"+"Q:-6"+"<br>")
function factoril(number){
    var fac = 1;
    if ( number == 0){
        document.write("The factoril of " + number + " is 1")
    }else if (number < 0 ){
        document.write("The factoril of -ive number  is not possible")
    }else{
        for (var i=1; i<=number;i++){
            fac = fac*i
            
        }
    }document.write(fac)
}
factoril(prompt("Write the number to finde the factoril"))

document.write("<br>"+"Q:-7"+"<br>")

function count(){
    var cnt1 = prompt("Enter start number to counting")
    var cnt2 = prompt("Enter last  number to  counting")
    for( var i=cnt1; i<=cnt2; i++){
        document.write(i)  
    }
  
}

count()
document.write("<br>"+"Q:-8"+"<br>")

function out(){
  var hight=prompt("write down the value of the height to finde the hypotunse")
   var base=prompt("write down the value of the base to finde the hypotunse")

    function iner(){
   var bsquare = base**2
    var psquare = hight**2
    var sum = bsquare + psquare;
    var hypotenuse =Math.sqrt(sum) 
    document.write(hypotenuse)

    }
    iner()
}
out()

document.write("<br>"+"Q:-9"+"<br>")

function woo(height,width){
    var height=prompt("write down the value of the height to finde the rectangle");
      var width=prompt("write down the value of the width to finde the rectangle");
      var area = height*width;


 document.write("The area of your rectangle is :"+area)}
woo()


document.write("<br> <br>"+"Q:-10"+"<br>")

function pal (str) {
           var str1 = str.split('').reverse().join('')
           
           if(str1.toUpperCase() === str.toUpperCase()){
           document.write(str.toUpperCase() +' '+ 'is a palindromes')
           
           } else {
             document.write(str.toUpperCase() +' '+ 'is  not a palindromes')
           }
           
         }
         
         pal(prompt('Entar a palindromes word'))

 document.write("<br> <br>"+"Q:-11"+"<br>")

function uppercase (str){
    var array1 = str.split(" ");
  
    var newarray1 = [];
    for(var x = 0; x <array1.length; x++){
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1)); 
 
    }
    return newarray1.join(" ");
   
}
 
document.write(uppercase(prompt("Write a peragraph to capitalize the first word ")))

 document.write("<br> <br>"+"Q:-12"+"<br>")
function long (word){
    var word1 = word.match(/\w[a-z]{0,}/gi);
    var result = word1[0];
    for (var i=0; i<word1.length; i++){
        if(result.length < word1[i].length){
            result = word1[i]
        }
    }
    return result
}

document.write(long(prompt("write the peragraph to check which word is bigger..?")))

document.write("<br> <br>"+"Q:-13"+"<br>")

function chek(){
    var word = prompt("Write the paragraph to finde the word count");
    var chek_letter = prompt("Write the word you want to find");


    var count = 0;
    for(var i=0; i<= word.length;i++){
        if(word[i] == chek_letter ){
            count++;
        }
    }
    document.write("This letter " +"("+chek_letter+") " +  count + " time")
}
chek()


document.write("<br> <br>"+"Q:-14"+"<br>")

function calcCircumfrence(radius) {
    //PI formula 3.14/22 by 7 k equal hy
    //is liy 3.14 ko maltipal radius k sath kya 
    var a = (Math.PI * radius) * 2;
  document.write("The circumfrence is " + a + "."+"<br>");
  }
  function calcArea(radius) {
    var b = (Math.PI * radius) * radius;
  document.write("The area is " + b + ".");
  }
  
  calcCircumfrence(prompt("Enter a calc number "));
  calcArea(prompt("Enter the area number"));









