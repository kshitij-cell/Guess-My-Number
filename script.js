const hidden=Math.trunc(Math.random()*20)+1
const high=20;
const low=1;
let score =20;
let highscore=0;
const displayMessage= function(message)
{
    document.querySelector('.guess').textContent=message;
}

const displayStartScore = function(number)
{
    document.querySelector('.startscore').textContent=number;
}
function startagn(){
    displayMessage(`Start Guessing Again!!!!!!`);
    document.querySelector('.img').textContent=`?`;
    displayStartScore(20);
    document.querySelector('.put').value='';
    document.querySelector('body').style.backgroundColor='#222222';
    }
document.querySelector('.btncheck').addEventListener('click',function(){
    const guess=Number(document.querySelector('.put').value);
    if(guess>high || guess<low)
    {
     displayMessage(`Number not in the range`);
     return;
    }
    if(!guess)
    {
        displayMessage(`Enter a number first :)`);
    }
    else if(guess==hidden)
    {
        document.querySelector('.img').textContent=hidden;
        displayMessage(`MATCH FOUND`);
        if(score>highscore)
        {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
        }
        document.querySelector('body').style.backgroundColor='green';

    }

    else if(guess!==hidden)
    {
        if(score>1)
        {
        displayMessage(guess > hidden ? `TOO HIGH`:`TOO LOW`);
        score--;
        displayStartScore(score);
        }
        else
        {
            displayMessage(`YOU LOST THE GAME`);
            displayStartScore(0);
    
        }
    }

    
})
