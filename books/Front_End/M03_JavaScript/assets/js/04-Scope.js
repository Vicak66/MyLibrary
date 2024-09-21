var shout = 'Shout';

function justShout() {
    console.log(shout + ', ' + shout);
    return;
}

function shoutItAllOut() {
    console.log(shout + ' it all out! ');
    return;
}

justShout();
shoutItAllOut();

// Lions is declared locally so it is available only to the sayLions function
function sayLions() {
    var animal = 'Lions';
    console.log(animal);
    return;
}

// Tigers is declared locally so it available to the sayTigers function
function sayTigers() {
    var animal = 'Tigers';
    console.log('and ' + animal + ' and ');
    return;
}
// Kept global scope
var bears = 'Bears';

// Removed local scope
function sayBears() {
    console.log(bears + ' ! OH My!');
    return;
}
sayLions();
sayTigers();
sayBears();

// Declaring sing in the outer function makes it available to the inner and outer function
function singAlong() {
    var sing = 'Sing';
    console.log(sing + ',');
    var singASong = function() {
        console.log(sing + ' a Song. ');
    };
    singASong();
}
singAlong();
