$(document).ready(function() {

//initialize page

$('#quiz').css('opacity', 0);
$('#results').css('opacity', 0);


//question object
var question = {
  prompt: "A, B, or C?",
  options: ["A", "B", "C"],
  answer: 1, // e.g. item index 1 in options array
  check: function(answer) {
    return answer === this.answer;
  }
};

var question1 = Object.create(question);
question1.prompt = "Knot to connect ropes for rappelling";
question1.options = ['figure-8', 'clove hitch', 'water knot'];
question1.answer = 2;
question1.answerAlt = 1;

var question2 = Object.create(question);
question2.prompt = "You’re climbing with Joe. Joe has lead the climb and is safely anchored above you. You just heard him yell “Your name, OFF BELAY”. What do you say back?";
question2.options = ['Okay, Joe!', 'Okay, Joe! You are off Belay!', 'Off belay, Joe!', 'Hold, Joe!', 'Aaaaaaaaaand, you are...now off belay, Joe!'];
question2.answer = 3;

var question3 = Object.create(question);
question3.prompt = "You down climbing and hear something hit the ground underneath you. How do you respond?";
question3.options = ["is was gear and pick it up", "Look down and see what it was it was a rock so yell ROCK", "Immediately yell Rock", "Look at your belayer so they can indicate what it was"];
question3.answer = 2;



var game = {
	questions: [],
	questionIndex: 0,
	score: 0,
	
	conclude: function()
	renderQuestion: function(questionIndex){
		var question = this.questions[questionIndex];
		if(this.questionIndex < this.questions.length){
			$('#prompt').html(question.prompt);
			$('#currentQuestion').empty();
			$('#currentQuestion').html(''+(this.questionIndex+1)+'');
			$('#options').empty();
			question.options.forEach(function(option, index){
				$('#options').append('<input name="answer" value="'+index+'" type="radio" />'+option+'<br>');
			});
		}
		
	},
	renderScore: function(){
		$('.score').html(this.score);
	},
	continue: function(){
		var questionQty = this.questions.length;
		this.renderScore();
		if(this.questionIndex+1 <= questionQty){
			this.renderQuestion(this.questionIndex)
		} else {
			$('#quiz').remove();
			$('#results').css('opacity', 1);
		};
		
	},
	
	nextQuestion: function(){
		var questionIndex = this.questionIndex++;
		var questions = this.questions;
		if(this.questionIndex > questions.length-1){
			this.questionIndex = questions.length-1;
		}
		this.continue();
	},
	prevQuestion: function(){
		var questionIndex = this.questionIndex--;
		if(this.questionIndex<0){
			this.questionIndex = 0;
		}
		this.continue();
	},
	submitAnswer: function(){
		var answer = parseInt($('input[name="answer"]:checked').val());
		console.log('the answer is ',answer);
		var question = this.questions[this.questionIndex];
		if (question.check(answer)) {
			this.score++;
		}
		this.nextQuestion();

	},
	start: function(){
		var questionQty = this.questions.length;
		this.questionIndex = 0;
		this.continue();
		$('#intro').remove();
		$('#quiz').css('opacity', 1);
		$('.totalQuestions').html(questionQty);



	}
	
};


var climbingQuiz = Object.create(game);
climbingQuiz.questions = [question1, question2, question3];


$('.start').click(function (){
	climbingQuiz.start();
	climbingQuiz.score = 0;
});
$('#previous').click(function(){
	climbingQuiz.prevQuestion();
});
$('#next').click(function(){
	climbingQuiz.nextQuestion();
});

$('#submit').click(function(){
	climbingQuiz.submitAnswer();
});




});