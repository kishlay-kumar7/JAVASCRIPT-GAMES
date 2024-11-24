const userInput=document.querySelector('.guessField');
const submit=document.querySelector('#subt');
const para=document.querySelector('.display');
const play=document.querySelector('#start');
const hide=document.querySelectorAll('.hide-content');
let remaning_chances=document.querySelector('.lastResult');
const last_result=document.querySelector('.guesses');

let played=0;
let random_number=parseInt(Math.random()*100+1);
console.log(random_number);
let turn=10;
let previousGuess=[];
let canIplay=false;
let guess;
if(!canIplay){
    userInput.setAttribute('disabled','');
}

play.addEventListener('click',function(e){
    if (played > 0) { 
        para.innerHTML='';
        newgame(); 
    } else {
        canIplay = true;
        userInput.disabled = false;
        play.style.display = 'none';
    }
    canIplay=true;
    userInput.disabled=false;
    play.style.display='none';
    hide.forEach(e=>e.style.display='block');
    
    submit.addEventListener('click',function(e){
        e.preventDefault();
        guess=parseInt(userInput.value);
        validateInput(guess);
    })
})


function validateInput(guess){
    if(guess<1){
        alert('Please enter number between 1 to 100');
        userInput.value='';
    }else if(guess>100){
        alert('Please enter number between 1 to 100');
        userInput.value='';
    }else if(isNaN(guess)){
        alert('Please enter a number');
        userInput.value='';
    }else{
        if(turn>1){
            previousGuess.push(guess);
            check(guess);
            
            last_result.innerHTML+=`${guess} ,`;
            turn--;
            remaning_chances.innerHTML=`${turn}`;
            userInput.value='';
        }else{
            display('<h3>Sory!!..You lost the game</h3>')
            endGame();
        }
    }
}

function check(guess){
    if(guess==random_number){
        display('<h2>You guessed it right !!<br>Game Ended.!</h2>');
        endGame();
    }
    if(guess>random_number){
        display('<h3>HINT:</h3>Try entering smaller number');
    }
    if(guess<random_number){
        display('<h3>HINT:</h3>Try entering greater number')
    }
}
function display(message){
    para.innerHTML=`${message}`;
}
function endGame() {
    canIplay = false; 
    setTimeout(() => {
        hide.forEach(e => e.style.display = 'none');
        play.style.display = 'inline-block'; 
        if (played > 0) {
            play.innerHTML = 'Play again'; 
        }
    }, 4000);
    played++;
}
function newgame() {
    random_number = parseInt(Math.random() * 100 + 1);
    turn = 10; 
    previousGuess = []; 
    last_result.innerHTML = ''; 
    remaning_chances.innerHTML = `${turn}`;
    userInput.value = '';
    canIplay = true; 
    userInput.disabled = false; 
    play.style.display = 'none'; 
    hide.forEach(e => e.style.display = 'block');
}
