var word = ['bread', 'corn', 'rice','meat']
//["acdc", "motleycrue", "kiss", "twistedsister"];
var randNum = Math.floor(Math.random() * word.length);
var chosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var chosenWordArr = chosenWord.split("");
console.log(chosenWordArr);
console.log(chosenWord);
var underScoreDoc = document.getElementsByClassName("underScore");
var generateUnderscore = () => {
    for (var i = 0; i < chosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
};
console.log(generateUnderscore());
// document.addEventListener('keypress', (event) => {
//     var keycode = event.keyCode;
//     console.log(keycode);
//     var keyword = String.fromCharCode(keycode);
//     console.log(keyword)
//     if (chosenWord.indexOf(keyword) > -1) {
//         console.log(true);

//         rightWord.push(keyword);
//         console.log(rightWord);
//         underScore[chosenWord.indexOf(keyword)] = keyword;
//         console.log(underScore);
//         if (underScore.join("") == chosenWord) {
//             alert("You Won!")
//         }  
//         else {
//             wrongWord.push(wrongWord);
//             console.log(wrongWord);
//         }
//     }
// });
document.onkeyup = function (e) {
    var keyword = event.key
    if (chosenWord.indexOf(keyword) > -1) {
        console.log(true);

        rightWord.push(keyword);
        console.log(rightWord);
        underScore[chosenWord.indexOf(keyword)] = keyword;
        console.log(underScore);
        if (underScore.join("") == chosenWord) {
            alert("You Won!")
        }  
        else {
            wrongWord.push(wrongWord);
            console.log(wrongWord);
        }
    }
}