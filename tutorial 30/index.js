// Two Dimensional Array
// 2D array
//Create a function called hightRunScorer that will
//Receive a 2D array called playerInfo
//Based on highest score, return the name of the player

function hightRunScorer(playerInfo){
    // console.log(playerInfo)
    var hightScorer = playerInfo[0][0];
    var hightScore = playerInfo[0][1];

    // console.log(hightScorer);
    
    for(var i=1; i<playerInfo.length; i++){
        
        if(hightScore < playerInfo[i][1]){
            
            hightScorer = playerInfo[i][1];
            hightScore = playerInfo[i][0];

        }

    }
    return hightScore;
}

var playerInfo = [
    ["Tamim", 95],
    ["Riyad", 525],
    ["Musfic", 35],
    ["Sakib", 4445],
];
var name = hightRunScorer(playerInfo);

console.log(name);