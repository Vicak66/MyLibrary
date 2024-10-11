// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    var result = [];

    var words = str.split(' '); // words = ["hello", "word"];
    
    for (var i = 0; i < words.length; i++) {
        var word = words[i].split(''); // word = ["h", "e", "l", "l", "o"]; ["w", "o", "r", "l", "d"];

        word[0] = word[0].toUpperCase();

        result.push(word.join('')); // result = ["Hello"]; ["Word"];
    }

    return result.join(' '); // ["Hello World"]
};

titleCase("hello world")