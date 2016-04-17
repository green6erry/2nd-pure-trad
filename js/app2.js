//self ~= _this

$(document).ready(function() {


//initialize page
function initializePage(){
	$('#quiz').hide();
	$('#intro').fadeIn(400);
	$('#results').hide();
	$('#modal').hide();
	$('#next').text('>');
	$('#results h4').empty();
	
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
  answerAlt: '',
  explainAnswer: "That is correct and is makes sense!",
  explainAlt: "It's wrong, but you're mind is in a good place!",
  explainWrong: "Whoops! No bueno.",
  test: parseInt($('h2').length),
  userGuess: pageGuess,
  image: ''
};



var question1 = Object.create(question);
question1.prompt = "What is the best knot to connect two ropes when making a double-rappelling";
question1.options = ['Figure-8', 'Clove hitch', 'Water knot',"I don't know what a double-rappelling is."];
question1.answer = 2;
question1.answerAlt = 3;
question1.explainAnswer = "The water-knot (or AKA 'stopper knot') is the best for this scenaro. You do that to both ends of the rope and that is not coming undone, but will also be possible to untie at the end (and not kill your rope -- yay!). <br /><br />(A figure-8 is an option, but your rope will be no good after. Your better of not wasting $200 and picking the water-knot)";
question1.explainAlt = "That's cool! A double-rappel is used for when you're so high off the ground that a single rappel (or half the length of your one rope) will not get you there. In this situation, you can use the single rope and do multiple rappels until you reach the bottom. Alternatively, you can use a double-rappel to decrease the number of rappels necessary to get to the ground. Don't do it unless you are comfortable with setting it up and know the proper knots! That being said, the set-up is very similar to a regular rappel.";
question1.explainWrong = "It's really important to know your knots for in case of an emergency. Freshen up your brains with the Google machine! <a href='http://www.animatedknots.com/indexclimbing.php#ScrollPoint' target='_blank' alt='knots practice'>Knots</a> on knots!!";



var question2 = Object.create(question);
question2.prompt = "You’re name is Fran and you're climbing with Joe. Joe has lead the climb and is safely anchored above you. You just heard him yell Fran, OFF BELAY!”. What do you say back?";
question2.options = ['HOLD, JOE!', 'Okay, Joe!', 'OKAY, JOE! You are OFF BELAY!', 'OFF BELAY, JOE!', 'Aaaaaaaaaand, you are...now off belay, Joe!'];
question2.answer = 0;
question2.answerAlt = 3;
question2.explainAnswer = 'The next step in this scenario is to tell Joe "Hold, Joe!" while you get yourself unclipped and settled, and then follow up with "Off Belay, Joe!" after your gear is secure. Always aim for clear, consice commands. <br /><br />(To yell "off belay" is kind of okay. It is concise and will not get you into trouble, but it\'s also not as accurate as "HOLD". This is because unless you\'re an incredibly fast mover (in which case, I think we\'re all a little surprised you\'re interested in trad), it takes a little time to unlock, unclip, unload belay such to officially embody the status of being "off belay".)';
question2.explainAlt = '';
question2.explainWrong = 'In pretty much all things trad climbing (and rock climbing), we want to be as clear and consise as possible. You should even feel encourages to go as far challenging to status quo of what we thing of as clear and concise; if you have an idea on how to improve, share it!';

var question3 = Object.create(question);
question3.prompt = "You are still Fran and you're down climbing and hear something hit the ground underneath you. How do you respond?";
question3.options = ["Freeze and make sure there nothing else is falling.", "Look down and see what it. It was a couple pebbles so you, Fran, resume down climbing.","Look down and see what it, it was a rock so yell ROCK", "Immediately yell \"ROCK!\"", "Look at your new belayer, Javier, so he can indicate what it was."];
question3.answer = 3;
question3.answerAlt = '';
question3.explainAnswer = 'If anything ever, ever, <i>ever</i> falls; if it sounds like a boulder or a little tiny throw pillow for the Prince of Arabia\'s left foot\'s baby toe; <b>you are hearing it fall</b>. That means it\'s probably not a leaf (since you have become desensitized to hearing leaves throughout your day of climbing being surrounded by many leaves). <b>That means that it is worth noting by yelling "ROCK!" </b>to anyone else around, even if you\'re SURE you\'re alone. <br /><br />Really and truly, it is worth the potential embarassment of realizing with was just a normal size beetle carcas plopping out of the sky. This is obviously quite a caution stance to take, but so what; it\'s the kind of habit that saves lives when weird anomalies occur. Feel empowered to yell and communicate whenever saftey is invovlved. Let\'s reiterate way rock climbing is similar to an open-door work envrionment.' ;
question3.explainAlt = 'The only answer is immediately yelling rock.';
question3.explainWrong = 'Please, really <b>bask</b> in the words above before you begin your trad adventure. Please try to find and reframe all life\'s events that taught you not to want to immediately respond to potential danger. Everyone says thank you for doing that. Proud of you.';


var question4 = Object.create(question);
question4.prompt = "You, Fran, are on top-rope and Joe back to belaying you and is doing so quite tight. Now, you’ve made it to the traverse in the climb and Joe is nearly pulling you off the wall. What do you do?";
question4.options = ['Joe, I need a little bit of slack!', 'Joe, slack please!', 'Joe, you’re pulling me off the wall!', 'JOE, SLACK!', 'Nothing for now; you\'re safe on belay so talk to him about it when you get to the top for next time.'];
question4.answer = 3;
question4.answerAlt = 4;
question4.explainAnswer = 'Just like before, you want to be as direct as possible. Putting any other words with your commands besides the bare essentials (\'name\' and \'command\') is not a worthwhile endeavor. Safety is though and direct comminucation is being that.';
question4.explainAlt = 'Putting off talking to Joe is up to you. If that\'s what makes you happy, totally fine because it doesn\'t endanger anyone else in the process.';
question4.explainWrong = 'Really, this is a scenario where you\'re more likely than not safe and not endangering anyone else regardless of what answer you choose. That being said, that element of the unknown could happen where your verbose commands could relay over to a different belayer who might suddenly think his climber is saying something who then yells down to his climber, "WHAT?". Best case scenario, you have a round of weird, outside phone tag; worst case, you disrupt an eagle\'s nest or a mistake somehow become revealed (arching to hear your belayer, you jolt to one side where you relized you\'re rope has been grating on a rock edge as sharp as a knife and now you are in danger. Shame on whoever for not mentioning it or you for not being vigilant, but that\'s another topic seperate!). Make good choices!';

var question5 = Object.create(question);
question5.prompt = "Now you're Javier and you're climbing with Joe. You're doing your first lead climb ever and you’re incredibly nervous! You’re about 25 feet off the ground when you think there might be a snake in the wall and start panicking. What do you do?";
question5.options = [ 'Start moving away and get away from that area as fast as possible because AH and holy crap yes there\'s definitely a snake and you sense that it\'s really mad at you AH.', 'Just start down climbing and bail on the climb. Not going to find out.', 'Ignore it and muscle through. It\'s probably more scared of you than you are of it.', 'Place something real quick, or down climb to the last piece of pro. Tell Joe to TAKE, then figure out what\'s going on and what your plan of action is.', 'None of the above.'];
question5.answer = 6;
question5.explainAnswer ="Enjoy your freebie! There's no wrong answer to this situation; it's whatever you're comfortable with. It's likely that all of these options are safe (although use your judgement as always). Since you're rock climbing and thus your ego died with your self-hygeine (or you're terribly conflicted and constantly finding ways to 'win' since rock climbing is so freaking hard), there's no stress in just coming down. <br /><br />Likewise, nobody minds if you think you can just muscle through. If you decide that after a few steps up, <i>Crap, that's definitley a baby Copperhead oh dear God</i>, guess what? That's totally cool if you want to bail! You're your own boss and you can change your mind if you damn well please. <br><br> The point of this question was just to get your head in the game. Whatever you do, before you do it, it's a good idea to try to take a deep breathe. As soon as you do whatever you do, tell your partner, please. K thanks? K thanks." ;
question5.freebie = true;

var question6 = Object.create(question);
question6.prompt = "You’re still Javier and you're at the summit of the climb. Way to get to the top! <br /><br /> In assessing how you're going to get down now, a couple experienced climbers come by and are there being a bit careless (not anchored in, not stepping carefully, etc.). They're offering help to find the rap station, which you really want because you're now esecially nervous about how cavalier they're being and have spent the past life-awaking moments visualizing all the terrible possible outcomes that might happen (<i>Where on earth did that angry eagle come from and why is it so mean?!</i>). What do you do?";
question6.options = ['Carefully unanchor and go see where they’re talking about the rap station being.', 'Check it out, but do it right. Set up a belay and 18 minutes later, go see approximately where they were talking about (as they have long since pranced away).', 'Politely decline. You feel confident that even though you\'re nervous, you made it up this far and you\’ll figure it out. They clearly don’t have the wherewithal to make good choices anyways as they hop around the summit 300ft up in the air.', 'Just anchor yourself as you go. Not the safest, but you\'re not asking for danger this way. It takes about 5 minutes to get 20’, but you’re safer than you would be if you weren’t anchored at all. Plus, now you get to practice gear placement and also get specific information from these people.'];
question6.answer = 2;
question6.explainAnswer ='Look, a second Freebie! The element of the unknown is at play!! <br /><br />Welcome to the world of trad climbing, where sometimes what is the most safe is not always clear! Our good habits are translation tools for us to use when and how we want to use them, preferrably to increase the likelihood of success. What does that mean? Do whatever you\'re comfortable with! You\'re an adult that has decided to put themselves 300\' in the air. Birds are literally flying below you. Make the choice that suits you and know that you\'re belayer isn\'t going to mind either way.';
question6.freebie = true;

var question7 = Object.create(question);
question7.prompt = "What's the best thing you can bring in your first aid kit?";
question7.options = ['Bandaids', 'Anti-venom','Extra caribiners (in case of self-rescue)', 'Honey','A first aid kit approved from the Board of Health'];
question7.answer = 3;
question7.answerAlt = 1;
question7.explainAnswer ='Have fun saving yourself with bandaids! You\'ve only got about 400 carabiners with you in total, so perhaps you could bring some extras (just in case...). (That was sarcasm and I don\'t reccommend you do that. In no way do you need extra caribiners). As for the first aid kit: Board of Health doesn\'t know diddly squat about rock climbing concerns. The kit will probably be useful if you scrape your knee, but deemed useless for all other life-threatening matters. <br /><br />The answer, oddly enough, is honey. It serves the purpose of many these options (except carabiners so maybe grab a few more). <a href="http://www.ncbi.nlm.nih.gov/pubmed/24393701" alt="NIH Honey" target="_blank">Here</a> is a paper from NIH talking about how crazy awesome honey is.';
question7.explainAlt ="I mean you <i>could</i> bring anti-venom, and if weight isn't a problem, go for it! But weight is probably a problem and you will become exhausted faster if you being extraneous things, and that exhaustion might lead to poor choices. <br /><br />I personally would bring anti-venom if there had been a recent snake-bite incident or a certain snake inhabits the area I'm climbing. But probably, even that would mostly be so I wouldn't exhaust myself worrying about it. It's still a good habit to make to only bring useful things.";
question7.explainWrong = "Give your wildnerness-first-aid a refresher!";

var question8 = Object.create(question);
	question8.prompt= "What's this here piece of protection called? <br> <img src='images/camalot-C4.jpg' alt='BD Camalot - C4' height='200'></img>";
	question8.image= "";
	question8.options= ['Nut','Tri-Cam','Hex','Cam','Sling'];
	question8.answer= 3;
	question8.explainAnswer= 'Black Diamond\'s famous Camalot! Known to most as a "cam", this piece of gear is as reliable as it is weird looking.';
	question8.explainWrong= 'You need to just not. Just go home. No trad climbing for you today. Maybe later, maybe not; but you are definitely going to need to learn some things about the sport before you start putting people\'s lives at stake.';

var question9 = Object.create(question);
	question9.prompt= "What's this here piece of protection called? <br> <img src='images/camalot-C4.jpg' alt='BD Camalot - C4' height='200'></img>";
	question9.image= "";
	question9.options= ['Nut','Tri-Cam','Hex','Cam','Sling'];
	question9.answer= 3;
	question9.explainAnswer= 'Black Diamond\'s famous Camalot! Known to most as a "cam", this piece of gear is as reliable as it is weird looking.';
	question9.explainWrong= 'You need to just not. Just go home. No trad climbing for you just yet. Maybe later.';

console.log(question8.prompt);

var game = {
	questions: [],
	questionIndex: 0,
	answers: [],
	
	get score(){
		var self = this;
		console.log(self.answers);
		return this.questions.reduce(function(score, question, index){
			var guess = self.answers[index];
			console.log('using index', index);
			var question = self.questions[index];
			console.log('self.questions ', index);
			if(question.check(guess)) {
				console.log('yes correct score: ',score);
				return score+1;
			}	
			else {
				console.log('correct score: ',score);
				return score;
			}
		},0);
	},

	conclude: function(){
		var questionQty = this.questions.length;
		$('#quiz').hide(700);
		$('#results').show(700);
		$('#modal').fadeOut(700);
		$('.score').html(this.score);
		
		if(this.score/questionQty == 1){
			$('#results h3').empty().html('Excellent Work!!!');
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
		$('div.overlay').removeClass('green').removeClass('orange').removeClass('red');
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
		var questionQty = this.questions.length;
		if(this.questionIndex <= questionQty-1){
			console.log('continue: Question ', this.questionIndex+1, ' of ',this.questions.length);
			this.renderQuestion(this.questionIndex);
		} else {
			this.conclude();
		}
	},
	
	nextQuestion: function(){
		var question = this.questions[this.questionIndex];
		var guess = parseInt($('input[type="radio"]:checked').val());
		var questionIndex = this.questionIndex++;
		var questions = this.questions;
		this.answers.push(guess);
		this.continue();
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
		var question = this.questions[this.questionIndex];
		var self = this;
		guess = parseInt($('input[type="radio"]:checked').val());
		var correct = this.questions[this.questionIndex].answer;
		var answerAlt = this.questions[this.questionIndex].answerAlt;
		if(question.check(guess)) {
			$('div.overlay').addClass('green');
			$('#feedback').html('<h1>That\'s Correct!!</h1><p>'+this.questions[this.questionIndex].explainAnswer+'</p>');
		}
		else if (guess === answerAlt){
			$('div.overlay').addClass('orange');
			$('#feedback').html('<h1><sub>Well, you\'re not totally right, but you\'re also...</sub> <br />Not totally wrong!</h1><p>'+question.explainAnswer+'<br><br>'+question.explainAlt+'<br><br>'+question.explainWrong+'</p>');
		}
		else {
			var question = self.questions[self.questionIndex];
			$('div.overlay').addClass('red');
			$('#feedback').html('<h1>Le Whoops! Incorrect.</h1><p>'+question.explainAnswer+'<br><br><i>'+question.explainWrong+'</i></p>');

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
climbingQuiz.questions = [question1, question2, question3, question4, question5, question6, question7, question8];


$('.start').click(function (){
	climbingQuiz.start();
	climbingQuiz.score = 0;
});
$('#previous').click(function(){
	climbingQuiz.prevQuestion();
});
$('.next').click(function(){
	var domput = parseInt($('input[type="radio"]:checked').val())+1;
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

$('.nextQuestion').click(function () {
		var domput = parseInt($('input[type="radio"]:checked').val());
		if(domput>= 0){
			climbingQuiz.nextQuestion();
	        $('#modal').fadeOut(10);
	        $('#quiz').removeClass('faded');
    	}
    	else {
    		alert('Le Whoops! Need an answer.');
    	}

    });

$(document).keydown(function (event) {
	if (event.keyCode == 13) {
		$('.next').trigger('click');
	}
	else if (event.keyCode == 37) {
		$('#previous').trigger('click');
	}
	else if (event.keyCode == 39) {
		$('.nextQuestion').trigger('click');
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