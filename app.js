// 1
function sum(num1, num2){
     return num1+num2;
}

sum(34,60);


// 2
function average(num1, num2) {
    return num1-num2;
}



// 3
// function findFactorial(num) {
    
// }

// 4
function round (number) {
    return Math.round(number);
}

// 5

function toThePowerOf(base, exponent,) {
    return Math.pow(base, exponent)
}


// 6

function randomNumber(num) {
    return Math.random(num)
}


// 7

function oneOrZero(num) {
    return Math.floor(randomNumber() * num);
}

// 8

// function randomRange(number) {
//     return Math.floor(randomNumber() + (number) + number)
// }

// 9

function includeOf(string, character) {

    if (string.includes(character)) {
        
        return true;
    }else{
        return false
    }
}


// Array task

// 1
function addToArray(array, string) {
     array.push(string);
     console.log(array);
}

addToArray(["Hello", "i", "am"], "John")




// 2
function convertToString(arr) {
  return arr.join(' ');
   
}


// 3

// function updateValue(array, index, value) {
//     if (condition) {

//         let update = index.splice()
//         return "there is no element to updated in this index"
//     } else {
        
//     }
// }


// 4

function onlyString(array) {
    let arr = []
    let res = array.filter( array == 'string');
    return arr.push;
}


// 5

// const users = [
//     ["Jane", "123456" ],
//     ["admin", "abc123" ],
//   ];
  
// function login (username, password) {
//     if (users[0] == username && password) {
//         return "Login Successful";
//     } else {
//         return "Login Failed";
//     }
// }


// 6
function maximumNumber(numbers) {
  return  Math.max(...numbers)  
}


// 7

// function reversString (string) {
//     string.split(reverse());
//     string.reverse()
//     console.log(string);
// }

// reversString('hi');
