
//Set in JavaScript:  using "for of" loop we iterate the set and get the output.

let data = new Set();
data.add(3);
data.add(45);
data.add(3);
data.add(4);
data.add('Kiran');
data.add('Shannu');
data.add('Raghu');

for(let n of data){
    console.log(n);
}
