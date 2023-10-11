const questions = [
    {
        question: "How can you detect a phishing attempt from the text?",
        options: ["Poor Grammer", "Incorrect Spelling", "Unprofessional Language", "All of the above"],
        correctAnswer: "All of the above",
    },
    {
        question: "What should you do when you receive a text with a link saying you have won the lottery?",
        options: ["CLICK THE LINK!", "Ponder what you will do with the money", "Delete the text, it is probably a scam", "Celebrate! You just won the lottery!"],
        correctAnswer: "Delete the text, it is probably a scam",
    },
];

let currentQuestionIndex = 0;

const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("answers");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("nextButton");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Phishtacular!";
    } else {
        feedbackElement.textContent = "Wrong. The correct answer is: " + currentQuestion.correctAnswer;
    }

    nextButton.style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
    } else {
        questionElement.textContent = "Quiz Complete!";
        optionsContainer.innerHTML = "";
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
    }
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);