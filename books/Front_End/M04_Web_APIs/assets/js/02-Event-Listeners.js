var count = 0;

var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// Todo: add a comment describing the functionality of the following code:
function setCounterText() {
    countEl.textContent = count;
}

// Todo: add a comment describing the functionality of the following event listener:
incrementEl.addEventListener('click', function() {
    count++;
    setCounterText();
});
// Attach event listener to decrement button element 
decrementEl.addEventListener('click', function() {
    // Action will fire if count is greater then 0
    if (count > 0) {
        count--;
        setCounterText();
    }
});