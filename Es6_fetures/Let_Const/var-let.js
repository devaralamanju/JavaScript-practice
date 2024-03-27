console.log("hello world");

var x;
console.log(x);


var x=100;
console.log(x);
console.log(typeof(x));

/*Type of x defined*/
x="manjula";
console.log(x);
console.log(typeof(x));
/*Type of x defined end */

/*Example start*/
for(var i=0;i<=10;i++)
{
    console.log(i)
}
console.log(i)
/*Example end*/

/*Block level scope starts*/
for(let i=0;i<=10;i++)
{
    console.log(i);
}
console.log(i);
/*Blocklevl scope ends*/


/*var and let diffenrce starts*/
var x;
let y;
{
    var z=199;
    let w=133;
    console.log(z);
    console.log(w);
}
console.log(z);
console.log(w);

/*var and let diffenrce end*/

/*let example start*/
if(10<30){
    let p=99;
}
console.log(p);
//Output : error
/*let example end*/

/*var example start*/
if(10<30){
    let p=99;
}
console.log(p);
//Output:99
/*var example end*/


