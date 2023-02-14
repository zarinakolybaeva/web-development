let a=[1,2,3,4];
console.log(typeof(a));
console.log(a);
a.push(5);
a.pop();
console.log(a);
console.log(a.indexOf(2));
console.log(a.includes(2));

//loop
for(var i=0;i<a.length;i++){
    console.log(a[i]);

    var num=2;
}
//var num=3;
console.log(i); // if in loop was let i=0 then there will be error
console.log(num);

//loop2
console.log("loop 2 ")
for(const num of a){
    console.log(num);
}
console.log("loop 3")
//loop 3
function show(number){
   console.log(number);
}
a.forEach(function(num){
   console.log(num);
});
//loop 4
console.log("loop 4")
a.forEach(show);


var num=a.find(function(num){
    return num==3;
});
console.log(num);


a.push(-10);
console.log(a);
a.sort();

// let b=a.slice(1,3);
// console.log(a);
// console.log(b);

// console.log("splice")
// console.log(a);
// let c=a.splice(1,3);
// console.log(a);
// console.log(c);

// console.log("map");
// console.log(a);

// let d=a.map(functon(numbe,inde){
//     return numbe * inde;
// });

//arrow func
let b=a.map((number,index) => number*index);
console.log(b);
