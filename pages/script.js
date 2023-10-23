//Constant Declarations
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

const TL_button = document.getElementById('TL_button');
const MM_button = document.getElementById('MM_button');
const BR_button = document.getElementById('BR_button');

// Add event listeners to the buttons
TL_button.addEventListener('click', function (event) {
    handleButtonClick('TL_button');
});

MM_button.addEventListener('click', function (event) {
    handleButtonClick('MM_button');
});

BR_button.addEventListener('click', function (event) {
    handleButtonClick('BR_button');
});




//Functions

function handleButtonClick(buttonId) {
    switch (buttonId) {
        case 'TL_button':
            console.log('Top Left button was pressed.');
            // Add your code for TL_button here
            alert('This level has already been complete')
            break;
        case 'MM_button':
            console.log('Middle button was pressed.');
            // Add your code for MM_button here
            break;
        case 'BR_button':
            console.log('Bottom Right button was pressed.');
            // Add your code for BR_button here
            alert('Complete previous levels to access this one')
            break;
        default:
            console.log('Unknown button was pressed.');
            break;
    }
}


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



function releasePhish() {
    document.getElementById("myPhish").style.display = "block";
}


function cancelPhish() {
    document.getElementById("myPhish").style.display = "none";
}

function byePhish() {
    alert("Your Phish is now in UQ Pond! Good luck!");
    document.getElementById("myPhish").style.display = "none";
}
function back() {

    location.href = "phish.html";
}

function openWin() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

