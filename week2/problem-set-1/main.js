function letterCapitalize(str) {
    var toArray = str.split(" ");
    var hello = toArray.map(function(word) {
        var firstLetter = word[0];
        var restWord = word.slice(1);
        var capLetter = firstLetter.toUpperCase();
        return capLetter + restWord;
    })
    return hello.join(" ");
}

console.log(letterCapitalize("this has been challenging"));


function wordCount(a) {
    return a.split(" ").length
}

console.log(wordCount("How many words are in this sentence?"));
