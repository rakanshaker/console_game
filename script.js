/********
 * Full Game non-modular

(function() {
  var Question = function(questions, answArr, correctAnswer) {
    this.questions = questions;
    this.answArr = [answArr];
    this.correctAnswer = correctAnswer;
  };

  var q1 = new Question(
    "Who teaches this course?",
    [" 0. Rakan", " 1. Billy", " 2. Jonas"],
    2
  );

  var q2 = new Question(
    "Do you drink coffee?",
    [" 0. Duh", " 1. No", " 2. What's Coffee?"],
    0
  );

  var q3 = new Question(
    "What's my favorite PC game?",
    [" 0. CODMW", " 1. Minecraft", " 2. MS Paint"],
    0
  );
  var currentScore = 0;
  function runGame() {
    var qContainer = [q1, q2, q3];
    var randNum = Math.round(Math.random() * 2);
    console.log(
      qContainer[randNum].questions + " " + qContainer[randNum].answArr
    );
    var windowPrompt = prompt(
      "Please enter the correct answer (the corresponding number)"
    );
    if (windowPrompt == "exit") {
      return;
    } else if (windowPrompt == qContainer[randNum].correctAnswer) {
      console.log("You got it!");
      currentScore++;
    } else {
      console.log("Oh, not quite...");
    }
    console.log("You're Score: " + currentScore);
    runGame();
  }
  runGame();
})();
 */

/********
 * Guided - Modular/Object Oriented - Prototypes
 */

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callBack) {
    var sc;

    if (ans === this.correct) {
      console.log("Correct!");
      sc = callBack(true);
    } else {
      console.log("You dumb");
      sc = callBack(false);
    }
    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is " + score);
    console.log("-------------------------------------");
  };

  var q1 = new Question(
    "this Javascript the coolest programming language in the world?",
    ["yes", "no"],
    0
  );

  var q2 = new Question(
    "what's the name of this course's teacher?",
    ["John", "Michael", "Jonas"],
    2
  );

  var q3 = new Question(
    "What best describes coding?",
    ["boring", "hard", "fun", "tedious"],
    2
  );
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var answer = prompt("Please select the correct answer");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
