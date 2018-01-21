function populate() {
  if(quiz.isEnded()) {
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show choices
      var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
};


function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  }
}


function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
  var gameOverHtml = "<h1>Result</h1>";
  gameOverHtml += "<h2 id= 'score'>Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHtml;
}


var questions = [
    new Question("Which among these is my favorite food?", ["Pizza", "Burger", "Biryani", "Chicken Popcorn"], "Chicken Popcorn"),
    new Question("What kind of Music do I like to listen to?", ["EDM", "Pop", "Bollywood", "Classical"], "Classical"),
    new Question("Which sport do I like the most?", ["Soccer", "Basketball", "Cricket", "Hockey"], "Basketball"),
    new Question("What stream did I do my Master's degree in?", ["Computer Integrated Design Engineering", "Computer Integrated Prototyping", "Computer Integrated Manufacturing", "Computer Integrated Analysis"], "Computer Integrated Manufacturing"),
    new Question("Do you love me xD ?", ["Yes :)", "Of course, Yes :D", "Hell Yeah xD xD", "All"], "All")
];

var quiz = new Quiz(questions);

populate();
