// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// what do i need?

// First I need a collection of variables.  I know that some of these variables will 
// be questions and answers
// After I put together the questions I have to set up the function so that each
// follows the other when an input is given....how do i do that? I'm understanding how to jam
// the new stuff in there but I don't remember how to just move onto the next one after
// or if I just keep writing in the variables.
var pageDefault = document.querySelector('body');
var button = document.querySelector('.button');
var quiz = document.querySelector('.quiz');
var question1 = document.querySelector('.question1');
var question2 = document.querySelector('.question2');
var question3 = document.querySelector('.question3');
var question4 = document.querySelector('.question4')
var initials = document.querySelector('initials')

// pretty much just put together the rest of the variables.  do I really need to go in and juice up my css to make this work?
button.addEventListener('click', displayQuestion);


function displayQuestion() {
    question1.setAttribute('display: visible').addEventListener('click');

    console.log('hello');

}
