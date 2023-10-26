
//Declaration of questions for quiz
const questions = [
    {
        question: "How can you detect a phishing attempt from the text?",
        options: ["Poor Grammar", "Incorrect Spelling", "Unprofessional Language", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "What should you do when you receive a text with a link saying you have won the lottery?",
        options: ["CLICK THE LINK!", "Ponder what you will do with the money", "Delete the text, it is probably a scam", "Celebrate! You just won the lottery!"],
        correctAnswer: "Delete the text, it is probably a scam",
    },
    {
        question: "If you receive an email regarding you signing up for something but you didn't sign up for it",
        options: ["Not open it, you didn't sign up for it", "Free goodies are always good", "Sign up, love more emails", "Ignore it"],
        correctAnswer: "Not open it, you didn't sign up for it",
    },
];

// Current question index
let currentQuestionIndex = 0;

//Get each element from .html by id so can write to them later
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");
const scoreDisplay = document.getElementById("score");
const backButton = document.getElementById("backButton");

var score = 0;

//Gets the current question and writes the options to the given html elements
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    backButton.style.display = "none";
    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

//Check the answered option if it is correct, provide feedback
function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Phishtacular!";
        score=score+1;
    } else {
        feedbackElement.textContent = "Wrong. The correct answer is: " + currentQuestion.correctAnswer;
    }

    nextButton.style.display = "block";
    backButton.style.display = "none";
}

//Load next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
        backButton.style.display = "none";
    } else {
        questionElement.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = "";
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
        scoreDisplay.textContent = "You scored:  " + score;
        backButton.style.display = "block";
    }
}

//Runs when html file is launched to initally load question
loadQuestion();
nextButton.addEventListener("click", nextQuestion);