function greet(user)
{
 return `this is a function ${user} !`;
}
let user = 'madina';
let str = greet(user);
console.log(str);


let add = function (num1,num2) //anonymous function ans its doesnt have name 
        {
return num1 + num2 ;
        }
        let sum = add;
        let result = add(5,8);
        console.log(sum);

