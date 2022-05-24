
let sum = function (a,b){
    return a + b;
}

let  subtract = function (a,b){
    return a - b;
}

let multiplication = function (a,b){
    return a*b;
}

let division = function (a,b){
    return a/b;
}

let x = prompt ('Please pick a number:')
x = parseInt(x);
// 4 / x + 5 - x * (34 - x + 10) / 6 + x
console. log (sum( subtract(sum ( division( 4, x), 5), division( multiplication (x, sum ( subtract ( 34, x ), 10)), 6)), x));


let checkPalin = function (palin){
    let isPalindrome = true;
    for (let i = 0; i < palin.length; i++) {
        if (palin.charAt(i) !== palin.charAt(palin.length - 1 - i)) {
            isPalindrome = false;
        }
    }
    if (isPalindrome) {
        return 'the number is a palindrome';
    } else {
        return 'the number is NOT a palindrome';
    }
}
palin= prompt();
console.log(checkPalin(palin));

let longestWord = function (str){
    let strWords = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strWords.length; i++){
        if(strWords[i].length > longestWord){
            longestWord = strWords[i].length;
     }
  }
  return longestWord;
}

let str = prompt('Write a sentance');
console.log ( longestWord ( str));

let allFunctions= {
   sum: function sum(a, b){
       return a+b;
   },
    sub: function subtract(a,b){
        return a-b;
    },
    multiply: function multiplication(a, b){
        return a*b;
    },
    div: function division(a, b){
        return a/b;
    }
};

let factorial = function (n) {
    let fact = 1;
    if (n === 1 || n === 0){
        return 1;
    }
    else{
        if (n>0 && Math.ceil(n) === Math.floor(n)){
            for (let i=1; i<=n; i++){
                fact= fact*i;
                
            }
            return fact;
        }
    }
}

let n= prompt('Write a number to calculate the factorial')
console.log ( 'The factorial of your number is ' + factorial(n) );

let myArray= [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
let calculate= function () {
    let oper = document.getElementById ('operators').value;
    let final = document.getElementById ('result');
    let add = 0;
    let mult = 1;
    if ( oper === '+'){
        for ( let i = 0; i< myArray.length; i++){
            add += myArray[i];
        }
        console.log ( 'The sum is ' + add);
    }
    if ( oper === '*'){
        for ( let i = 0; i< myArray.length; i++){
            mult = mult * myArray[i];
        }
        console.log ( mult );
    }
}

let person = {
    firstName: 'Mihai',
    lastName: 'Popescu',
    sex: 'm',
    birthYear: '1993',
    money: '2000000',
    interestRate: '200',
    writePoliteNameToConsole: function() {
      let prefix = 'Mr. ';
      if (person.sex !== 'm') {
        prefix = 'Mrs. ';
      }
      console.log(prefix + person.firstName + ' ' + person.lastName);
    },
    calculateAge: function(){
        let age = 0;
        const d = new Date();
        let year = d.getFullYear();
        age = year - person.birthYear;
        console.log ( person.firstName + ' ' + person.lastName + ' is '+ age + ' years old');
    },
    calculateAllMoney: function(){
        let allMoney = person.money + person.interestRate;
        console.log ( person.firstName + ' ' + person.lastName + ' has a total of '+ allMoney);
    }
 };
  
 person.writePoliteNameToConsole(); 
 person.calculateAge();
 person.calculateAllMoney();