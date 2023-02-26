let alein = {
    name: 'Madina',
    tech : "Js",
    exp : "4",
    laptop : {
     cpu : 'i7',
     ram :  '8gb',  
     brand: 'Apple',
    }

}
for (let key in alein){ // for in loop 
    console.log(key,alein[key]);
}
console.log(" Printing laptopdetails");
for (let key in alein.laptop){ // for in loop 
    console.log(key,alein.laptop[key]);
}