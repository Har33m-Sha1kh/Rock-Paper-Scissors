window.addEventListener('load', function () {

    var user_score = 0;
    var comp_score = 0;
    var user_score_span = document.getElementById('user-score');
    var comp_score_span = document.getElementById('comp-score');
    var result = document.querySelector('.result p');
    var rock_div = document.querySelector('#r');
    var paper_div = document.querySelector('#p');
    var scissors_div = document.querySelector('#s');


    function getCompChoice() {
        const ary = ['ROCK', 'PAPER', 'SCISSORS'];
        const randomNumber = Math.floor(Math.random() * 3);
        return ary[randomNumber];


    }


    

    function win(user, comp) {
        user_score++;
        user_score_span.innerHTML = user_score;
        comp_score_span.innerHTML = comp_score;
        result.innerHTML = user + ' beats ' + comp + ' YOU WIN!';

        if (user == 'ROCK') {
            rock_div.classList.add('green-glow');
            setTimeout(function () {
                rock_div.classList.remove('green-glow');
            }, 300)
        } else if (user == 'PAPER') {
            paper_div.classList.add('green-glow');
            setTimeout(function () {
                paper_div.classList.remove('green-glow');
            }, 300)
        } else {
            scissors_div.classList.add('green-glow');
            setTimeout(function () {
                scissors_div.classList.remove('green-glow');
            }, 300)
        }


    }



    function lose(user, comp) {
        comp_score++;
        user_score_span.innerHTML = user_score;
        comp_score_span.innerHTML = comp_score;
        result.innerHTML = user + ' is lost by ' + comp + ' COMPUTER WIN!';

        if (user == 'ROCK') {
            rock_div.classList.add('red-glow');
            setTimeout(function () {
                rock_div.classList.remove('red-glow');
            }, 300)
        } else if (user == 'PAPER') {
            paper_div.classList.add('red-glow');
            setTimeout(function () {
                paper_div.classList.remove('red-glow');
            }, 300)
        } else {
            scissors_div.classList.add('red-glow');
            setTimeout(function () {
                scissors_div.classList.remove('red-glow');
            }, 300)
        }
    }




    function draw(user, comp) {
        user_score_span.innerHTML = user_score;
        comp_score_span.innerHTML = comp_score;
        result.innerHTML = user + ' is equal to ' + comp + ' GAME DRAW';

        if (user == 'ROCK') {
            rock_div.classList.add('grey-glow');
            setTimeout(function () {
                rock_div.classList.remove('grey-glow');
            }, 300)
        } else if (user == 'PAPER') {
            paper_div.classList.add('grey-glow');
            setTimeout(function () {
                paper_div.classList.remove('grey-glow');
            }, 300)
        } else {
            scissors_div.classList.add('grey-glow');
            setTimeout(function () {
                scissors_div.classList.remove('grey-glow');
            }, 300)
        }
    }



    function game(userChoice) {
        var compChoice = getCompChoice();
        switch (userChoice + compChoice) {
            case 'ROCKPAPER':
            case 'PAPERSCISSORS':
            case 'SCISSORSROCK':
                win(userChoice, compChoice);
                break;
            case 'PAPERROCK':
            case 'SCISSORSPAPER':
            case 'ROCKSCISSORS':
                lose(userChoice, compChoice);
                break;
            case 'ROCKROCK':
            case 'PAPERPAPER':
            case 'SCISSORSSCISSORS':
                draw(userChoice, compChoice);
                break;

        }

    }



    function main() {

        rock_div.addEventListener('click', function () {
            game('ROCK');

        });

        paper_div.addEventListener('click', function () {
            game('PAPER');
        });

        scissors_div.addEventListener('click', function () {
            game('SCISSORS');
        });
    }

    main();


})
