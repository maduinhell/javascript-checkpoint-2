//first
function reverseString(str) {
  return str.split("").reverse().join("");
}
//second
let x = prompt("enter");
function stringcount(str) {
  let count = 0;
  for (let i=0; i < x.length; i++) {
    count += i;
  }
  return count;
}
//third
let y = prompt("enter");
function uppercasefirst(str) {
    return y.charAt(0).toUpperCase() + y.slice(1)
}
//fourth
arrnum = [1, 2, 3, 4, 5];
function minimum(arrnum) {
    for (let i = 0; i < arrnum.length; i++) {
        let min = arrnum[0];
        if (arrnum[i] < min) {
            min = arrnum[i];
        }
    }

        for (let i = 0; i < arrnum.length; i++) {
        let max = arrnum[0];
        if (arrnum[i] > max) {
            max = arrnum[i];
        }
    }
    return max + " " + min;
}
//fifth
arrr = [1, 2, 3, 4, 5];
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
//sixth
arrrr = [1, 2, 3, 4, 5];
function filter(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }
}
//seventh  
v = 6
function factorial(v) {
    let fact = 1;
    for (let i = 1; i <= v; i++) {
        fact *= i;
    }
    return fact;
}
//eighth
n = Number(prompt("enter"));
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "this is not prime";
        }
        else {
            return "this is prime";
        }
}
//ninth
function fibonacci(n) {
    let a = 0, b = 1, c;
    for (let i = 2; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
