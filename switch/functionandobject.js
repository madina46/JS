let alein = {
    name: 'Madina',
    tech : "Js",
    exp : "4",
    laptop : ()=> {
     console.log(this.exp);
     
    }

    
}

alein.laptop();

//for of loop Set in JavaScript:  using "for of" loop we iterate the set and
// get the output.

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

//
let obj = {
    name : "Madina",
    roll_no : "071246",
    branch : "Information",
    subject : {
        Java :"Mruthunjaya Swami",
        c : "S. M. Kulkarni",
        BE : "NKP",
        CO : "MPP"

    }
}
let data1 = obj.subject.Java;
console.log(data1);
for (let key in obj)
{
    console.log(key,obj[key]);
    // if (typeof (obj[key]) == "object")
    // {
    //     for(let key_1 in obj[key])
    //     {
    //         console.log(`${key_1}` +" = "+ `${obj[key][key_1]}`)
    //     }
    // }
}