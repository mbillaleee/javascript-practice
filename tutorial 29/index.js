// One Dimensional Array
//Create a function called hightScore that
//Receive a 1D array called scores
//return the score

function hightScore(scores){
// console.log(scores);
let max = scores[0];
for(var i=1; i<scores.length; i++){
    if(max < scores[i]){
        max = scores[i];
    }
}
return max;
}

let scores = [10, 20, 5, 50, 55];

var maxScore = hightScore(scores);

console.log(maxScore);