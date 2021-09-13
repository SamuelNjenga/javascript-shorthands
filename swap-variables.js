let x = 1, y = 2;

//Long Version
const temp = x;
x = y;
y = temp;
console.log(x, y);

//Shorthand Version -> with array destructuring you can swap two variables without using a third one
[x,y] = [y,x]
console.log(x, y)
