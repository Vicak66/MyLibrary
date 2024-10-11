var factorial = function(num) {
    var result = 1;

    for (var i = num; i > 1; i--) {
        result = result * i;
    }

    return result;
};