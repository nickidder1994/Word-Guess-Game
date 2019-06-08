const word = ["acdc", "motleycrue", "kiss", "twistedsister"];
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord= [];
var wrongWord = [];
var underScore = [];
console.log(chosenWord[0]);
var generateUnderscore = () => {
    for(var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
};
console.log(generateUnderscore());
document.addEventListener('keypress', (event) =>{
    var keycode = event.keyCode;
    console.log(keycode);
    var keyword = String.fromCharCode(keycode);
    console.log(keyword)
    if(chosenword.indexOf(keyord) > -1) {
        console.log(true);
    
    rightWord.push(keyword);
    console.log(rightWord);
    underScore[chosenWord.indexOf(keyword)] = keyword;
    console.log(underScore);
    if(underScore.join("" )== chosenWord);
        alert("You Won!")
    }
});
else {
wrongWord.push(wrongWord);
    console.log(wrongWord);
}  