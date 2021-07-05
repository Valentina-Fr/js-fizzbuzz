/* 
1 - Scrivere un programma che stampi i numeri da 1 a 100
Per i multipli di 3 stampare Fizz
Per i multipli di 5 stampare Buzz
Per i multipli sia di 3 che di 5 stampare FizzBuzz.
*/

//Dichiarazione e assegnazione variabili
var numbersPlaceholder = document.getElementById("numbers");
var listItem = "";

//Stampare numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
       //Stampare FizzBuzz per multipli di 3 e 5
       listItem += "<li>" + "FizzBuzz" + "</li>";
   } else if (i % 3 === 0) {
       //Stampare Fizz per multipli di 3
       listItem += "<li>" + "Fizz" + "</li>";
   } else if (i % 5 === 0) {
       //Stampare Buzz per multipli di 5
       listItem += "<li>" + "Buzz" + "</li>";
   } else {
       //Stampare altri numeri
       listItem += "<li>" + i + "</li>";
   }
}

//Stampare nell'html
numbersPlaceholder.innerHTML = listItem;