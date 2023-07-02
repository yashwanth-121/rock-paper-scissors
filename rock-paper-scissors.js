let score = JSON.parse(localStorage.getItem('score'))||{
    wins: 0,
    losses : 0,
    ties:0
};
updateScore();
function playGame(playerMove){
    const computermove = PickcomputerMove();
    let result = '';
    if(playerMove === 'Rock'){
        if(computermove === 'Rock'){
            result = 'Tie';
        }
        else if(computermove === 'Scissors'){
            result = 'You Win';
        }
        else if(computermove === 'Paper'){
            result = 'You Lose';
        }
    }
    else if(playerMove === 'Paper'){
        if(computermove === 'Rock'){
            result = 'You Win';
        }
        else if(computermove === 'Scissors'){
            result = 'You Lose';
        }
        else if(computermove === 'Paper'){
            result = 'Tie';
        }
    }
    else if(playerMove === 'Scissors'){
        if(computermove === 'Rock'){
            result = 'You Win';
        }
        else if(computermove === 'Scissors'){
            result = 'Tie';
        }
        else if(computermove === 'Paper'){
            result = 'You Win';
        }
    }

    if(result === 'You Win'){
        score.wins +=1;
    }
    else if(result === 'You Lose'){
        score.losses +=1;
    }
    else if(result === 'Tie'){
        score.ties +=1;
    }

    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computermove}-emoji.png" class="move-icon">
    Computer`;


    
}
function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function PickcomputerMove(){
    let computermove= '';
    const move = Math.random();
    if(move >= 0 && move < 1/3){
        computermove = 'Rock';
    }
    else if(move >= 1/3 && move <2/3){
        computermove = 'Paper';
    }
    else if(move >= 2/3 && move < 1){
        computermove = 'Scissors';
    }
    return computermove; 
}