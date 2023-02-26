function Constructor(name,tech) {
this.name = name;
this.tech = tech;

this.work = () =>{
console.log("JS practice session");
}
}

let cnstr = new Constructor('Madina','JS') ;

console.log(cnstr);
console.log(cnstr.work);

