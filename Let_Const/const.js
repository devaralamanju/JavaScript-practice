//Example
var a =200
const x = a;
console.log(x);//output:200


a = 900;
console.log(x);//output:200
//x we cant change a value we can change


//Example
const o = {a:300,b:400};
o={k:"manjula"};
o.a = 666;
console.log(o);//output:Uncaught TypeError: Assignment to constant variable.
//o is const a and b values we can change


//scope on const
if(10<90){
    const r = 88;
}
console.log(r);//output:const.js:24  Uncaught ReferenceError: r is not defined
//error