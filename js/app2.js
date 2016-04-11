//self ~= _this

$(document).ready(function() {


//initialize page
function initializePage(){
	$('#intro').fadeIn(500);
	$('#quiz').hide();
	$('#results').hide();
	$('#modal').hide();
	
};
initializePage();


//question object
var question = {
  prompt: "A, B, or C?",
  options: ["A", "B", "C"],
  answer: 1, // e.g. item index 1 in options array
  check: function(answer) {
    return answer === this.answer;
  },
  answerAlt: 2,
  explainAnswer: "That is correct and is makes sense!",
  explainAlt: "Kind of!",
  explainWrong: "Whoops! No bueno."
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
question2.answerAlt = 2;
question2.explainAnswer = 'The next step in this scenario is to tell Joe /"Hold, Joe!/" while you get yourself unclipped and settled, and then follow up with "Off Belay, Joe!" after your gear is secure. Always aim for clear, consice commands.';
question2.explainAlt = 'This is not bad, but it\'s also not accurate unless you\'re an incredibly fast mover (in which case, I think we\'re all a little surprised you\'re interested in trad).';
question2.explainWrong = 'The correct answer was \"Hold, Joe!\", because that means you are in the process of doing the command they asked. Another acceptable answer would\'ve been \"Off belay, Joe!\", because is the clearest way to respond. ';

var question3 = Object.create(question);
question3.prompt = "You down climbing and hear something hit the ground underneath you. How do you respond?";
question3.options = ["is was gear and pick it up", "Look down and see what it was it was a rock so yell ROCK", "Immediately yell Rock", "Look at your belayer so they can indicate what it was"];
question3.answer = 2;


var question4 = Object.create(question);
question4.prompt = "You\’re on top-rope and Joe is belaying you kind of tight. Now you\’re at a traverse in the climb and Joe is nearly pulling you off the wall. What do you say?";
question4.options = ['Joe, I need a little bit of slack!', 'Joe, slack please!', 'Joe, you’re pulling me off the wall!', 'Joe, slack!'];
question4.answer = 4;
question4.answerAlt = 2;
question4.explainAnswer = 'You want to be as direct as possible. Good job!';

var question5 = Object.create(question);
question5.prompt = "You’re on your first lead climb and you’re already incredibly nervous. You’re about 25 feet off the ground when you think there might be a snake in the wall and start panicking. What do you do?";
question5.options = [ 'Start moving away and get away from that area as fast as possible.', 'Start down climbing and bail on the climb', 'Ignore it and muscle through', 'Place something or go down the last piece of pro. Take, tell your belayer and then go from there.', 'None of the above'];
question5.answer = function(){
	for(var i = 0; i<question5.options.length; i++){
		return i;
	};
};
question5.explainAnswer ='Enjoy your freebie! You couldn\'t get this wrong! The point of this question was just to get your head in the game. Whatever you do, before you do it, try to take a deep breathe. As soon as you do whatever you do, tell your partner immediately. K thanks? K thanks.' ;

var question6 = Object.create(question);
question6.prompt = "You’re at the summit of the climb. A couple experienced climbers that are there being kinda careless (not anchored in, not stepping carefully, etc.). They're offering help to find the rap station, which you really want because you're nervous about getting down. What do you do?";
question6.options = ['Carefully unanchor and go see where they’re talking about', 'set up a belay and 18 minutes later, go see where they were talking about (even though they’ve long since pranced off)', 'politely decline, confident that you’ll figure it out since they clearly don’t have the wherewithal to make good choices as they hop around the summit 300ft off the wall.', 'just anchor yourself as you go. It take about 5 minutes to get 20’, but you’re safe than if you weren’t anchored at all and now you get to practice gear placement.'];
question6.answer = function(){
	for(var i = 0; i<question6.options.length; i++){
		return i;
	};
};
question6.explainAnswer ='A secret second freebie! Expected the unexpected; you\'re entering the world of trad climbing for goodness sake! Do whatever you\'re comfortable with. You\'re an adult that has decided to put themselves 300\' in the air. Birds are literally flying below you. Make the choice that suits you.';

var question7 = Object.create(question);
question7.prompt = "What's the best thing you can bring in your first aid kit";
question7.options = ['bandaids', 'anti-venom','extra caribiners in case of self-rescue', 'honey','A first aid kit from CVS'];
question7.answer = 2;
question7.answerAlt = 1;
question7.explainAnswer ='Have fun saving yourself with bandaids. In no way do you need extra caribiners; you\'re trad rack is hevy enough as is. Have fun making use of a standard first aid kit; CVS doesn\'t know diddly squat about rock climbing concers. The answer, oddly enough, is honey.';


var game = {
	questions: [],
	questionIndex: 0,
	answers: [],
	
	get score(){
		var self = this;
		return this.questions.reduce(function(score, question, index){
			var answer = self.answers[index];
			if(question.check(answer)) {
				return score+1;
			}	
			else {
				return score;
			}
		},0);
	},

	conclude: function(){
		var questionQty = this.questions.length;
		$('#quiz').hide(700);
		$('#results').show(700);
		
		if(this.score/questionQty === 1){
			$('#results h2').empty().html('Excellent Work!!!');
			$('#results h4').append(" That's an A+!");
			$('#results h4').prepend("Wow, you're so safe! ");
		}
		else if(this.score/questionQty <= 1 && this.score/questionQty >= .6){
			$('#results h4').append(" That's pretty good effort, but I can't help but reccomend you re-do the quiz until you get it perfect.");
			$('#results h4').prepend("");
		}
		else {
			$('#results h4').append(" Give the quiz another shot! Perhaps the ideas will stick better this time and everyone can be smart and safe!");
		}
		$('#results h4').append('<br><br><br><sub>Who needs safety when you have pride?<br> <i>- Said no smart person ever.</i></sub>');
	},
	renderQuestion: function(questionIndex){
		var question = this.questions[this.questionIndex];
		if(this.questionIndex < this.questions.length){
			$('#prompt').html(question.prompt);
			$('#currentQuestion').empty();
			$('#currentQuestion').html(''+(this.questionIndex+1)+'').delay(700);
			$('#options').empty();
			question.options.forEach(function(option, index){
				$('#options').append('<input name="answer" value="'+index+'" type="radio" />'+option+'<br>');
			});
			if(this.questionIndex+1 === this.questions.length){
				$('#next').text('Submit!');
			}
		}
	

	},
	renderScore: function(){
		$('.score').html(this.score);
	},
	continue: function(){
		var questionQty = this.questions.length;
		this.renderScore();
		if(this.questionIndex+1 <= questionQty){
			console.log('My index is less than qty length of ',this.questions.length,' at ', this.questionIndex+1);
			this.renderQuestion(this.questionIndex);
		} else {
			this.conclude();
		};
	},
	
	nextQuestion: function(){
		var answer = parseInt($('input[name="answer"]:checked').val());
		var questionIndex = this.questionIndex++;
		var questions = this.questions;
		this.answers.push(answer);
		console.log(this.answers);
		this.continue();
		console.log('Current score-ish is:'+this.score);
	},
	prevQuestion: function(){
		var questionIndex = this.questionIndex--;
		if(this.questionIndex<0){
			this.questionIndex = 0;
		}
		this.answers.pop();
		this.continue();
	},

	renderFeedback: function(){
		var guess = parseInt($('input[name="answer"]:checked').val());
		var correct = this.questions[this.questionIndex].answer;
		var answerAlt = this.questions[this.questionIndex].answerAlt;
		if(guess === correct) {
			console.log('That was the correct answer.');
			$('#feedback').html('<h2>'+this.questions[this.questionIndex].explainAnswer+'<h2>');
		}
		else if (guess === answerAlt){
			$('#feedback').html('<h2>'+this.questions[this.questionIndex].explainWrong+'<h2>');
		}
		else {
			$('#feedback').html('<h2>'+this.questions[this.questionIndex].explainWrong+'<h2>').text('Whoops!');
			console.log('That was the wrong answer.');
		}
		
	},

	start: function(){
		var questionQty = this.questions.length;
		this.answers = [];
		this.questionIndex = 0;
		this.continue();
		$('#intro').fadeOut(500);
		$('#quiz').delay(500).fadeIn(500);
		$('.totalQuestions').html(''+questionQty+'');
	},
	
};


var climbingQuiz = Object.create(game);
climbingQuiz.questions = [question1, question2, question3, question4, question5, question6, question7];


$('.start').click(function (){
	climbingQuiz.start();
	climbingQuiz.score = 0;
});
$('#previous').click(function(){
	climbingQuiz.prevQuestion();
});
$('#next').click(function(){
	climbingQuiz.renderFeedback();
	$('#modal').fadeIn(500);
	climbingQuiz.nextQuestion();
});


$('#reset').click(function(){
	initializePage();
});

$('#modal').click(function() {
        $('#modal').fadeOut(500);
    });



});