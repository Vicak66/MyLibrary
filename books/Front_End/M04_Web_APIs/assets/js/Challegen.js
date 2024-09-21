let currentQuestion = 0;
let timeLeft = 36;
let timer;
let score = 0;
//
 
let questions = [
    {
        question: "Whit is the of France?",
        options: ["paris", "Barlin", "Rome", "Madrid"],
        answer: "paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Earth", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atl Ocean", "Ind Ocean", "Arc Ocean", "Pac Ocean"],
        answer: "Pac Ocean",
    },
];
//

function startQuiz() {
    const username = document.getElementById("username").valur;
    if (username.trim() === "") {
        alert("Please enter your name.");
        return;
    }

    //
    document.getElementById("start-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";

    displayQuestion();
    // Start the timer
    startTimer();
}

// Function to display a question and its options
function displayQuestion() {
    const questionContainer = document.getElementById("question");

    // Get the current question and its options
    const questionText = questions[currentQuestion].question;
    const options = questions[currentQuestion].options;

    const questionHtml = `
        <div class="question-number">Question ${currentQuestion + 1}: </div>
        <div class="question-text">${questionText}</div>
        <div class="options">$
            ${options.map((option)=> createOption(option)).join("")}
        </div>
    `;

    // Set the HTML inside the question container
    questionContainer.innerHTML = questionHtml;

    // Show the "Next" button after the question is displayed
    document.getElementById("next-question").style.display = "block";
}

// Function to create the HTML for an option
function createOption(option) {
    return `
        <div class="option">
            <input type="radio" name="answer" value="${option}"> ${option}
        </div>;
    `
}

// Function to start the countdown timer
function startTimer() {
    timer = setInterval(function () {
        if (timeLeft > 0) {
            timeLeft--;
            document.getElementById("time").textContent = timeLeft;
        } else {
            clearInterval(timer);
            document.getElementById("time").textContent = "Time's up!";
            disableOptions();
            setTimeout(nextQuestion, 2000);
        }
    }, 1000);
}

// Function to check the selected answer
function checkAnswer() {
    clearInterval(timer); // Stop the timer
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selectedAnswer) {
        feedback.textContent = "Please select an answer!";
        return;
    }

    const answer = selectedAnswer.value;
    if (answer === questions[currentQuestion].answer) {
        score++;
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = `Incorrect. The correct answer is ${questions[currentQuestion].answer}.`;
    }

    disableOptions();
    setTimeout(nextQuestion, 1000); // Move to the next question after a short delay 
}

// Function to disable all options (used after the answer is selected or time runs out)
function disableOptions() {
    document.querySelectorAll('input[type="radio"]').forEach((input) => {
        input.disabled = true;
    });
}
// Function to disable all options (used after the answer is selected or time runs out)
function nextQuestion() {}