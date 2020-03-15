//Assignment 1
let dish = 'spaghetti';
let dishScore = 2;
console.log(dish, dishScore);


//Assignment 2
let firstLetter = dish.charAt(0).toUpperCase();
let dishWithoutFirstLetter = dish.substr(1);
let capitalizeDish = firstLetter + dishWithoutFirstLetter;
console.log("capitalizeDish", capitalizeDish);


//Assignment 3
let dishScores = [5, 4, 1, 3, 3, 4];
let dishScoreNames = ["Bleh", "Mwah", "Oke", "Lekker", "Mag ik nog een keer opscheppen?"];
let totalScore = 0;

for (let i = 0; i < dishScores.length; i++) {
    totalScore += dishScores[i];
    console.log(dishScores[i], dishScoreNames[dishScores[i] - 1]);
}
// for (let score of dishScores) {
//     totalScore += score;
//     console.log(score, dishScoreNames[score - 1]);
// }
// for (let score in dishScores) {
//     totalScore += dishScores[score];
//     console.log(dishScores[score], dishScoreNames[dishScores[score] - 1]);
// }
// dishScores.forEach(function(score){
//     totalScore += score;
//     console.log(score, dishScoreNames[score - 1]);
// });

console.log("totalScore", totalScore);
console.log("AVG", totalScore / dishScores.length);
console.log("MAX", Math.max(...dishScores));


// //Assignment 4 (TODO)
