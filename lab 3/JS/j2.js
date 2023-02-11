console.log('Hello from html')
var a=2;
console.log(typeof(a));
a='hello';
console.log(typeof(a));
console.log(typeof('2'));
console.log(2=='2');
console.log(2==='2')
console.log(typeof(2));
console.log(typeof(2.5));
console.log(typeof(true));
console.log(typeof(null));
console.log(typeof({'id':2}));
console.log(typeof(undefined));
console.log(typeof(Symbol('c')));
console.log(typeof(function(){}));
console.log(typeof([1,2,3]));
a=true;
console.log(typeof(a));
a=[1,2,3];
b=a;
a.push(4);
console.log(a);
console.log(b);

