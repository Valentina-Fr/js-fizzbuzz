/* 
1 - Scrivere un programma che stampi i numeri da 1 a 100
Per i multipli di 3 stampare Fizz
Per i multipli di 5 stampare Buzz
Per i multipli sia di 3 che di 5 stampare FizzBuzz.
*/

//Stampare numeri da 1 a 100
for (var i = 1; i <= 100; i++) {
   if (i % 3 === 0 && i % 5 === 0) {
       //Stampare FizzBuzz per multipli di 3 e 5
       console.log("FizzBuzz")
   } else if (i % 3 === 0) {
       //Stampare Fizz per multipli di 3
       console.log("Fizz")
   } else if (i % 5 === 0) {
       //Stampare Buzz per multipli di 5
       console.log("Buzz")
   } else {
       //Stampare altri numeri
       console.log(i)
   }
}
