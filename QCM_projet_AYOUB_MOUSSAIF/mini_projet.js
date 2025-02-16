const questionTimers = [30,30,30,30,30,30,30,30]; // Set the time for each question in seconds
let currentQuestion = 0;
let timers = [];

function startTimer(questionIndex) {
    let timeLeft = questionTimers[questionIndex];
    const timerElement = document.getElementById(`timer${questionIndex + 1}`);
    const questionDiv = document.querySelectorAll('.question')[questionIndex];

    timers[questionIndex] = setInterval(() => {
        timerElement.textContent = `Time left: ${timeLeft} seconds`;
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timers[questionIndex]);
            disableQuestion(questionDiv); // Disable the question
            moveToNextQuestion();
        }
    }, 1000);
}

function disableQuestion(questionDiv) {
    // Disable all checkboxes in the question
    const checkboxes = questionDiv.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.disabled = true;
    });

    // Add a visual indication that the question is disabled
    questionDiv.classList.add('disabled');
}

function moveToNextQuestion() {
    if (currentQuestion < questionTimers.length - 1) {
        currentQuestion++;
        startTimer(currentQuestion);
    } else {
        alert("Time's up! Submitting your answers.");
        calculateScore();
    }
}

function calculateScore() {
    const selectedAnswers = {};

    // Loop through each question set (options1, options2, options3, ...)
    for (let i = 1; i <= 8; i++) {
        const selectedOptions = [];

        // Get all checkboxes for the current question
        const checkboxes = document.querySelectorAll(`input[name="options${i}"]:checked`);

        // Loop through the checked checkboxes
        checkboxes.forEach(checkbox => {
            const label = document.querySelector(`label[for="${checkbox.id}"]`);
            selectedOptions.push(label.textContent.trim()[0]);
        });

        // Store the selected options for the question
        selectedAnswers[`Question ${i}`] = selectedOptions.length > 0 ? selectedOptions : [];
    }

    let score = 0;
    for (let i = 0; i < 8; i++) {
        const questionNumber = i + 1;
        const correctAnswer = answers[i];
        const userAnswer = selectedAnswers[`Question ${questionNumber}`];

        if (arraysEqual(userAnswer, correctAnswer)) {
            score++;
        }
    }

    // Display the score at the top of the page
    const scoreDisplay = document.getElementById('scoreDisplay');
    scoreDisplay.textContent = `Your score: ${(score * 20 / 8).toFixed(2)}/20`;

    // Scroll to the top of the page to show the score
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function arraysEqual(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// Start the timer for the first question
startTimer(currentQuestion);

let answers = [["A"], ["B"], ["B"], ["A"], ["A"], ["B"], ["A"], ["A", "B", "C", "D"]];
document.getElementById("quizForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing
    alert("Submitting your answers.");
    while (currentQuestion<questionTimers.length){
        const questionDiv = document.querySelectorAll('.question')[currentQuestion];
        disableQuestion(questionDiv);
        currentQuestion++;
    }
    timers.forEach(timerId => clearInterval(timerId));
    calculateScore();

});