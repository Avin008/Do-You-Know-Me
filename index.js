let rs = require('readline-sync');
let chalk = require('chalk');

let quiz = [{
  question: "Where Do i Live? \n a: Banglore \n b: Delhi \n c: Odissa \n Enter your choice: ",
  answer: "c"
},
{
  question: "Which Os Do i Use? \n a: Mac Os \n b: Windows 10 \n c: Linux \n Enter your Choice: ",
  answer: "c"
},
{
  question: "Who is my Fav Youtuber? \n a: Sandeep Maheshwari \n b: Gary Vee \n c: veritasium \n Enter your Choice: ",
  answer: "a"
},
{
  question: "What Programming Language Do i use? \n a: JavaScript \n b: Python \n c: C++ \n Enter your Choice: ",
  answer: "a"
},
{
  question: "What Genre of Movies Do i Like ? \n a: Sci-fi \n b: Horror-Comedy \n c: Adventure \n Enter your Choice: ",
  answer: "a"
}];

let scoreBoard = [{
  name: "Bhumi",
  score: 25
},
{
  name: "Armaan",
  score: 20,
},
{
  name: "Aakash",
  score: 15
}];



console.log(chalk.bgBlackBright.greenBright("Welcome to Do You Know Me? Quiz"));
let playerName = rs.question(chalk.cyanBright(" Please enter your name: "));

console.log(chalk.yellowBright("\nHi "+ playerName + ". Get ready for Do You Know Me Quiz \nEnter a/ b/ c for each question. For each correct answer you will get 5 points. Beating the top scores will get you a place on the Score Board. Higer the Score the better you know me. \n"));

// score keeper
let score = 0;

//function to play the game
function play(quest) {
    for (let x = 0; x < quiz.length; x++) {
        let ques = rs.keyIn(chalk.cyanBright(x + 1 + ")", quest[x].question), ({limit: '$<a-c>'}));
        if (quest[x].answer === ques.toLowerCase()) {
            score += 5;
            console.log(chalk.yellowBright.bold("Currect Answer!"));
            console.log(chalk.yellowBright("5 points awarded! \n"));
        } else {
          console.log(chalk.red.bold("Oops!! Wrong Answer"))
            console.log(chalk.green("Currect Answer is: " +  quest[x].answer)+ "\n");
        }
    }
    totalScore();   
}



play(quiz);
updateScore(scoreBoard);
printScoreBoard(scoreBoard);




//function to check & update scores
function updateScore(scores) {
    if (scores[0].score <= score) {
        scores[0].score = score;
        scores[0].name = playerName;
        console.log(chalk.green.bold('Hurray!! you Got the First Place on the scoreBoard. \n'));
    } else if (scores[1].score <= score) {
        scores[1].score = score;
        scores[1].name = playerName;
                console.log(chalk.green.bold('Hurray!! you Got the Second Place on the scoreBoard. \n'));
    } else if (scores[2].score <= score) {
        scores[2].score = score;
        scores[2].name = playerName;
                console.log(chalk.bgBlack.green.bold('Hurray!! you Got the Third Place on the scoreBoard. \n'));
    }else {
      console.log(chalk.bgBlack.green.bold('Sorry!! you Got no place on the scoreBoard. \n'));
    }

   
}

//function to print total score of the player 
function totalScore() {
    console.log(chalk.bold.bgBlack("Hey! " + playerName.toUpperCase() + " Thanks for taking out the time to play the quiz. your Total score is " + score + "/25"));
    console.log("");
}

// function to print the scoreBoard
function printScoreBoard(scores) {
   console.log(chalk.bgYellow("___Top Scores___"));
    scores.forEach((score) => {
        console.log(score.name, score.score);
    })
}


