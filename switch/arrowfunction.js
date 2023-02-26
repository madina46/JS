let greet = () =>`this is a function ${user} !`;

let user = 'madina';
let str = greet(user);
console.log(str);


let add = (num1,num2) =>
{
  num1 = Math.abs(num1)
  num2 = Math.abs(num2)
    return num1 + num2
}
 let sum = add(-5,-6)
 console.log(sum)