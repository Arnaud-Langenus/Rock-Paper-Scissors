const game = () => {
    let uScore = 0;
    let cScore = 0;

        //start the game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classlist.add('fadeOut');
            match.classList.add("fadeIn");
        })
    }
    //play a round
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".user-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })
        //computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach (option => {
           option._addEventListener('click', function() {
               //computer choice
               const computerNumber = Math.floor(Math.random() * 3);
               const computerChoice = computerOptions[computerNumber];

               setTimeout(()=> {
                   //Here we call compare hands
                   compareHands(this.textContent, computerChoice);

                   //update images
                   userHand.src = `./Pictures/${this.textContent}.png`;
                   computerHand.src = `./Pictures/${computerChoice}.png`;
               })
                setTimeout(()=>{

                }, 1000)
               //Animation
               userHand.style.animation = "shakeUser 2s ease";
               computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    }
    const updateScore = () => {
        const userScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        userScore.textContent = uScore;
        computerScore.textContent = cScore;
    }


    const compareHands = (userChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        if(userChoice === computerChoice) {
            //checks for a draw
            winner.textContent = 'It is a draw!';
            return;
        }
        //check for rock
        if(userChoice === 'rock') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'User Wins';
                uScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        //check for paper
        if(userChoice === 'paper') {
            if(computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'User Wins';
                uScore++;
                updateScore();
                return;
            }
        }
        //check for scissors
        if(userChoice === 'scissors') {
            if(computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                cScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'User Wins'
                uScore++;
                updateScore();
                return;
            }
        }
    }
    //call all inner function
    startGame();
    updateScore();
}

//start the game function
game();