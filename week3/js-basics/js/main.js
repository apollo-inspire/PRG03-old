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
let dishScores = [5, 4, 1, 3, 3, 4, 2, 4, 1];
let dishScoreNames = ["Bleh", "Mwah", "Oke", "Lekker", "Mag ik nog een keer opscheppen?"];
let totalScore = 0;

for (let i = 0; i < dishScores.length; i++){
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


//Assignment 4
/**
 * @param dishScore
 * @param score
 */
function addScore(dishScore, score)
{
    return dishScore + score;
}

console.log("dishScore after addScore", addScore(dishScore, 5));

/**
 * @param myArray
 * @returns {number}
 */
function calculateAverageScores(myArray)
{
    let total = 0;

    for (let value of myArray) {
        total += value;
    }

    return total / myArray.length;
}

console.log("calculateAverageScores([1, 2, 3])", calculateAverageScores([1, 2, 3]));


//Assignment 5
let theDish = {
    name: 'spaghetti',
    dishScores: [3],

    /**
     * @param score
     */
    addScore: function (score)
    {
        this.dishScores.push(score);
    },

    /**
     * @returns {number}
     */
    calculateAverageScores: function ()
    {
        let total = 0;

        for (let value of this.dishScores) {
            total += value;
        }

        return total / this.dishScores.length;
    }
};

theDish.addScore(5);
console.log("spaghetti.dishScores", theDish.dishScores);

theDish.addScore(3);
console.log("spaghetti.calculateAverageScores()", theDish.calculateAverageScores());
