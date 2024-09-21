var x = 500;
var y = 550;

var exp1 = x < 550;
var exp2 = y > 600;

// console.log(x < exp1);
// console.log(x < exp2);

if (exp1 && exp2) {
    console.log('T T');

} else if (exp1) {
    console.log('T F');

} else if (exp2) {
    console.log('F T');

} else {
    console.log('F F');
}