//self ~= _this

$(document).ready(function() {


//initialize page
function initializePage(){
	$('#quiz').hide().removeClass('faded');
	$('#intro').fadeIn(400);
	$('#results').hide();
	$('#modal').hide();
	$('#next').text('>');
	
}
initializePage();

var pageGuess = $(document).find('input[type="radio"]:checked').val();

//question object
var question = {
  prompt: "A, B, or C?",
  options: ["A", "B", "C"],
  answer: 1, // e.g. item index 1 in options array
  check: function(guess) {
  	if(this.freebie){
  		return true;
	 }
	 else {
	 	return guess === this.answer;
	 }
  },
  answerAlt: 2,
  explainAnswer: "That is correct and is makes sense!",
  explainAlt: "Kind of!",
  explainWrong: "Whoops! No bueno.",
  test: parseInt($('h2').length),
  userGuess: pageGuess,
  image: ''
};



var question1 = Object.create(question);
question1.prompt = "Knot to connect ropes for rappelling";
question1.options = ['figure-8', 'clove hitch', 'water knot'];
question1.answer = 2;
question1.answerAlt = 0;
question1.explainAnswer = "The water-knot (or AKA 'stopper knot') is the best for this scenaro. You do that to both ends of the rope and that is not coming undone, but will also be possible to untie at the end (and not kill your rope).";
question1.explainAlt = "A figure-8 is an option, but your rope will be no good after. Your better of not wasting $200 and picking the water-knot";
question1.explainWrong = "It's really important to know your knots for in case of an emergency. Freshen up your brains with the Google machine!";



var question2 = Object.create(question);
question2.prompt = "You’re climbing with Joe. Joe has lead the climb and is safely anchored above you. You just heard him yell “Your name, OFF BELAY”. What do you say back?";
question2.options = ['Okay, Joe!', 'Okay, Joe! You are off Belay!', 'Off belay, Joe!', 'Hold, Joe!', 'Aaaaaaaaaand, you are...now off belay, Joe!'];
question2.answer = 3;
question2.answerAlt = 2;
question2.explainAnswer = 'The next step in this scenario is to tell Joe "Hold, Joe!" while you get yourself unclipped and settled, and then follow up with "Off Belay, Joe!" after your gear is secure. Always aim for clear, consice commands.';
question2.explainAlt = 'To immediately say \"Off belay, Joe!\" is in most cases good enough. The problem is that it\'s not accurate unless you\'re just an incredibly fast mover (in which case, I think we\'re all a little surprised you\'re interested in trad).';
question2.explainWrong = 'When you first hear that the person is off belay, you start the process of doing the command they asked (to take them off belay). By saying hold and not nothing or off belay immediately, you are minimizing volume pollution (so they don\'t have to ask again) and keeping steady, open communication. ';

var question3 = Object.create(question);
question3.prompt = "You down climbing and hear something hit the ground underneath you. How do you respond?";
question3.options = ["is was gear and pick it up", "Look down and see what it was it was a rock so yell ROCK", "Immediately yell Rock", "Look at your belayer so they can indicate what it was"];
question3.answer = 2;


var question4 = Object.create(question);
question4.prompt = "You’re on top-rope and Joe is belaying you kind of tight. Now you’re at a traverse in the climb and Joe is nearly pulling you off the wall. What do you say?";
question4.options = ['Joe, I need a little bit of slack!', 'Joe, slack please!', 'Joe, you’re pulling me off the wall!', 'Joe, slack!'];
question4.answer = 3;
question4.answerAlt = 2;
question4.explainAnswer = 'You want to be as direct as possible. Good job!';

var question5 = Object.create(question);
question5.prompt = "You’re on your first lead climb and you’re already incredibly nervous. You’re about 25 feet off the ground when you think there might be a snake in the wall and start panicking. What do you do?";
question5.options = [ 'Start moving away and get away from that area as fast as possible.', 'Start down climbing and bail on the climb', 'Ignore it and muscle through', 'Place something or go down the last piece of pro. Take, tell your belayer and then go from there.', 'None of the above'];
question5.answer = 6;
question5.explainAnswer ='Enjoy your freebie! You couldn\'t get this wrong! The point of this question was just to get your head in the game. Whatever you do, before you do it, try to take a deep breathe. As soon as you do whatever you do, tell your partner immediately. K thanks? K thanks.' ;

var question6 = Object.create(question);
question6.prompt = "You’re at the summit of the climb. A couple experienced climbers that are there being kinda careless (not anchored in, not stepping carefully, etc.). They're offering help to find the rap station, which you really want because you're nervous about getting down. What do you do?";
question6.options = ['Carefully unanchor and go see where they’re talking about', 'set up a belay and 18 minutes later, go see where they were talking about (even though they’ve long since pranced off)', 'politely decline, confident that you’ll figure it out since they clearly don’t have the wherewithal to make good choices as they hop around the summit 300ft off the wall.', 'just anchor yourself as you go. It take about 5 minutes to get 20’, but you’re safe than if you weren’t anchored at all and now you get to practice gear placement.'];
question6.answer = 2;
question6.explainAnswer ='Yup!!! A secret second freebie! Expected the unexpected; you\'re entering the world of trad climbing for goodness sake! Do whatever you\'re comfortable with. You\'re an adult that has decided to put themselves 300\' in the air. Birds are literally flying below you. Make the choice that suits you.';
question6.explainWrong = 'The correct answer was \"Hold, Joe!\", because that means you are in the process of doing the command they asked. Another acceptable answer would\'ve been \"Off belay, Joe!\", because is the clearest way to respond. ';
question6.userGuess = 2;
question6.freebie = true;

var question7 = Object.create(question);
question7.prompt = "What's the best thing you can bring in your first aid kit";
question7.options = ['bandaids', 'anti-venom','extra caribiners in case of self-rescue', 'honey','A first aid kit from CVS'];
question7.answer = 2;
question7.answerAlt = 1;
question7.explainAnswer ='Have fun saving yourself with bandaids. In no way do you need extra caribiners; you\'re trad rack is hevy enough as is. Have fun making use of a standard first aid kit; CVS doesn\'t know diddly squat about rock climbing concers. The answer, oddly enough, is honey.';

var question8 = Object.create(question);
	question8.prompt= "What's this here piece of protection called? <br> <img src='images/camalot-C4.jpg' alt='BD Camalot - C4' height='200'></img>";
	question8.image= "";
	question8.options= ['Nut','Tri-Cam','Hex','Cam','Sling'];
	question8.answer= 3;
	question8.explainAnswer= 'Black Diamond\'s famous Camalot! Known to most as a "cam", this piece of gear is as reliable as it is weird looking.';
	question8.explainWrong= 'You need to just not. Just go home. No trad climbing for you just yet. Maybe later.';
	question8.freebie= true;

console.log(question8.prompt);

var game = {
	questions: [],
	questionIndex: 0,
	answers: [],
	
	get score(){
		console.log('* score getter enacted');
		var self = this;
		return this.questions.reduce(function(score, question, index){
			var guess = self.answers[index];
			var question = self.questions[self.questionIndex];
			console.log('score ',guess);
			if(question.check(guess)) {
				return score+1;
			}	
			else {
				return score;
			}
		},0);
	},

	freebieTinker: function(){
		console.log('* freebieTinker enacted');
		if(this.questions[this.questionIndex].answer > 9){

		}
	},

	conclude: function(){
		console.log('* conclude enacted');
		var questionQty = this.questions.length;
		$('#quiz').hide(700);
		$('#results').show(700);
		$('#modal').fadeOut(700);
		$('.score').html(this.score);
		
		if(this.score/questionQty === 1){
			$('#results h2').empty().html('Excellent Work!!!');
			$('#results h4').append(" That's an A+!");
			$('#results h4').prepend("Wow, you're so safe! ");
		}
		else if(this.score/questionQty <= 1 && this.score/questionQty >= 6){
			$('#results h4').append(" That's pretty good effort, but I can't help but reccomend you re-do the quiz until you get it perfect.");
			$('#results h4').prepend("");
		}
		else {
			$('#results h4').append(" Give the quiz another shot! Perhaps the ideas will stick better this time and everyone can be smart and safe!");
		}
		$('#results h4').append('<br><br><br><sub>Who needs safety when you have pride?<br> <i>- Said no smart person ever.</i></sub>');
	},
	renderQuestion: function(questionIndex){
		console.log('* renderQuestion enacted');
		var question = this.questions[this.questionIndex];
		if(this.questionIndex < this.questions.length){
			$('#prompt').html(question.prompt).after(question.image);
			$('#currentQuestion').empty();
			$('#currentQuestion').html(''+(this.questionIndex+1)+'');
			$('#options').empty();
			question.options.forEach(function(option, index){
				$('#options').append('<input name="answer" required value="'+index+'" title="('+index+')" type="radio" />'+option+'<br>');
			});
			if(this.questionIndex+1 === this.questions.length){
				$('#next').text('Submit!');
			}
		}
	

	},

	continue: function(){
		console.log('* continue enacted');
		var questionQty = this.questions.length;
		if(this.questionIndex+1 <= questionQty){
			console.log('continue: Question ', this.questionIndex+1, ' of ',this.questions.length);
			this.renderQuestion(this.questionIndex);
		} else {
			this.conclude();
		}
	},
	
	nextQuestion: function(){
		console.log('* nextQuestion enacted');
		var question = this.questions[this.questionIndex];
		var guess = parseInt($('input[type="radio"]:checked').val());
		var questionIndex = this.questionIndex++;
		var questions = this.questions;
		this.answers.push(guess);
		console.log(this.answers);
		this.continue();
		console.log('nextQuestion fx: Current score is '+this.score);
	},
	prevQuestion: function(){
		console.log('* prevQuestion enacted');
		var questionIndex = this.questionIndex--;
		if(this.questionIndex<0){
			this.questionIndex = 0;
		}
		this.answers.pop();
		this.continue();
	},

	renderFeedback: function(){
		console.log('* renderFeedback enacted');
		var question = this.questions[this.questionIndex];
		var self = this;
		guess = parseInt($('input[type="radio"]:checked').val());
		var correct = this.questions[this.questionIndex].answer;
		var answerAlt = this.questions[this.questionIndex].answerAlt;
		if(question.check(guess)) {
			console.log('renderFeedback: That was the correct answer.');
			$('#feedback').html('<h1>That\'s Correct!!</h1><p>'+this.questions[this.questionIndex].explainAnswer+'</p>');
		}
		else if (guess === answerAlt){
			$('#feedback').html('<h1>That\'s not perfect.</h1><p>'+question.explainAnswer+'<br><br>'+question.explainAlt+'</p>');
			console.log('renderFeedback says: That was the alternate answer.');
		}
		else {
			var question = self.questions[self.questionIndex];
			$('#feedback').html('<h1>Le Whoops! Incorrect.</h1><p>'+question.explainAnswer+'<br><br><i>'+question.explainWrong+'</i></p>');
			console.log('renderFeedback: That was the wrong answer.');
			console.log('renderFeedback: That was the wrong ', question.explainAnswer);

		}
		
	},

	start: function(){
		console.log('* start enacted');
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
climbingQuiz.questions = [question8, question1, question6, question2, question3, question4, question5, question7];


$('.start').click(function (){
	climbingQuiz.start();
	climbingQuiz.score = 0;
});
$('#previous').click(function(){
	climbingQuiz.prevQuestion();
});
$('#next').click(function(){
	var domput = parseInt($('input[type="radio"]:checked').val());
	console.log('HEEEEY', domput);
	if (domput) {
		climbingQuiz.renderFeedback();
		$('#modal').fadeIn(300);
		$('#quiz').addClass('faded');
		}
	else {
		alert('nooooo. need to select one.');
		}
});


$('.reset').click(function(){
	initializePage();
	$('#quiz').fadeOut(10);
});

$('#nextQuestion').click(function () {
		var domput = parseInt($('input[type="radio"]:checked').val());
		if(domput){
			climbingQuiz.nextQuestion();
	        $('#modal').fadeOut(10);
	        $('#quiz').removeClass('faded');
    	}
    	else {
    		alert('Le Whoops! Need an answer.');
    	}

    });

$(document).keydown(function (event) {
	if (event.keyCode == 39) {
		$('#next').trigger('click');
	}
	else if (event.keyCode == 37) {
		$('#previous').trigger('click');
	}
	else if (event.keyCode == 13) {
		$('#nextQuestion').trigger('click');
	}
	else if (event.keyCode == 49) {
		$('input[name="answer"]:nth-of-type(1)').trigger('click');
	}
	else if (event.keyCode == 50) {
		$('input[name="answer"]:nth-of-type(2)').trigger('click');
	}
	else if (event.keyCode == 51) {
		$('input[name="answer"]:nth-of-type(3)').trigger('click');
	}
	else if (event.keyCode == 52) {
		$('input[name="answer"]:nth-of-type(4)').trigger('click');
	}
	else if (event.keyCode == 53) {
		$('input[name="answer"]:nth-of-type(5)').trigger('click');
	}
	else if (event.keyCode == 82) {
		$('.reset').trigger('click');
	}
	else if (event.keyCode == 32) {
		$('.start').trigger('click');
	}
});

$('button').tooltip({
        show: {
            effect: "slideDown",
            delay: 100
        }
    });

$('header h1').mouseover(function(event){
	$('.yay').switchClass('hidden', 'faded', 10);
}).mouseout(function(event){
	$('.yay').switchClass('faded', 'hidden', 10);
});



});