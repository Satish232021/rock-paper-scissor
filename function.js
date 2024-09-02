let score = JSON.parse(localStorage.getItem('score')) || {/* what happens here was as it returns null value..when we reset...so in booleann null means falsy statement so left was falsy so it excutes the right one and regain the default values of score */
    wins: 0,
    losses: 0,
    ties: 0
};
updateScoreElement();

/*         or we can use below if statement too both are same*/
/* !null is also equal to score === null as we learned in boolean operators */
/* we use this cuz as if we add the above thing if we reset and reload and click on any button it gives error as null in the score objectcuz it erases the score objects if we rest..so we need to again assign those values to that by this if statement*/
/*     if(score === null){ 
score = {
    wins: 0,
    losses: 0,
    ties: 0
}
} */


function reset(){
    score.wins = 0;
    score.losses= 0;
    score.ties= 0;
    localStorage.removeItem('score');
    updateScoreElement();
}
function result(userSelection){
const value = Math.floor(Math.random()*3)+1;

let computerMove = '';
let final = '';

if (value === 1){
    computerMove = 'rock';
}else if(value === 2){
    computerMove = 'paper';
}else if(value === 3){
    computerMove = 'scissors';
}




if(userSelection === computerMove){
    final = 'Tie';
}
if(userSelection === 'rock' && computerMove === 'paper'){
    final = 'You Lose!!';
}
if(userSelection === 'rock' && computerMove === 'scissors'){
    final = 'You Win!!!';
}
if(userSelection === 'paper' && computerMove === 'rock'){
    final = 'You Win!!!';
}
if(userSelection === 'paper' && computerMove === 'scissors'){
    final = 'You Lose!!';
}
if(userSelection === 'scissors' && computerMove === 'rock'){
    final = 'You Lose!!';
}
if(userSelection === 'scissors' && computerMove === 'paper'){
    final = 'You Win!!!';
}

if(final === 'You Win!!!'){
    score.wins += 1;
}else if(final === 'You Lose!!'){
    score.losses += 1;
}else if(final === 'Tie'){ 
    score.ties += 1;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();
document.querySelector('.js-result').innerHTML = final;
document.querySelector('.js-moves').innerHTML = `
    You
    <img class="move-icon" src="./images/${userSelection}-emoji.png" alt="">
    <img class="move-icon" src="./images/${computerMove}-emoji.png" alt="">
    Computer'`;/* `` these are called template strings */
}
function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = ` wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;

}
