let currentQuestion = 0;
let userAnswers = [];
let results = {
    sections: {},
    totalCorrect: 0
};

function startExam() {
    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('exam-container').classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const q = examData[currentQuestion];
    let html = `<div class="question-container">
        <h3>${q.section}</h3>
        <p>${q.question}</p>
        <div class="options-container">`;

    q.options.forEach((opt, index) => {
        html += `<label><input type="radio" name="answer" value="${index}"> ${opt}</label>`;
    });

    html += `</div></div>`;
    document.getElementById('question-display').innerHTML = html;
    updateProgress();
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) return;

    const userAnswer = parseInt(selected.value);
    const correct = examData[currentQuestion].correct;
    const section = examData[currentQuestion].section;

    if (!results.sections[section]) {
        results.sections[section] = { total: 0, correct: 0 };
    }
    results.sections[section].total++;
    
    let feedbackHtml = '';
    if (userAnswer === correct) {
        results.totalCorrect++;
        results.sections[section].correct++;
        feedbackHtml = createFeedback(true, userAnswer, correct, examData[currentQuestion].explanation);
    } else {
        feedbackHtml = createFeedback(false, userAnswer, correct, examData[currentQuestion].explanation);
    }

    document.getElementById('question-display').innerHTML += feedbackHtml;
    userAnswers[currentQuestion] = userAnswer;
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < examData.length) {
            showQuestion();
        } else {
            showFinalResults();
        }
    }, 3000);
}

function createFeedback(isCorrect, userAnswer, correctIndex, explanation) {
    const options = document.querySelectorAll('.options-container label');
    let feedback = `<div class="explanation">
        <strong>Explicación:</strong> ${explanation}
    </div>`;

    options.forEach((label, index) => {
        if (index === correctIndex) {
            label.classList.add('correct');
        }
        if (!isCorrect && index === userAnswer) {
            label.classList.add('incorrect');
        }
    });

    return feedback;
}

function updateProgress() {
    const progress = (currentQuestion / examData.length) * 100;
    document.querySelector('.progress').style.width = `${progress}%`;
}

function showFinalResults() {
    document.getElementById('exam-container').classList.add('hidden');
    const resultsScreen = document.getElementById('results-screen');
    resultsScreen.classList.remove('hidden');

    let sectionResultsHtml = '';
    let totalQuestions = examData.length;
    let generalPercentage = (results.totalCorrect / totalQuestions * 100).toFixed(1);
    
    // Resultados por sección
    for (const section in results.sections) {
        const sectionData = results.sections[section];
        const percentage = (sectionData.correct / sectionData.total * 100).toFixed(1);
        sectionResultsHtml += `
            <div class="section-result">
                <h4>${section}</h4>
                <p>Correctas: ${sectionData.correct}/${sectionData.total} (${percentage}%)</p>
            </div>`;
    }

    // Recomendaciones
    let recommendations = '<h3>Recomendaciones de estudio:</h3>';
    for (const section in results.sections) {
        const percentage = (results.sections[section].correct / results.sections[section].total * 100).toFixed(1);
        if (percentage < 70) {
            recommendations += `<p>➤ Deberías repasar la sección <strong>${section}</strong></p>`;
        }
    }

    document.getElementById('section-results').innerHTML = `
        <h3>Resultados generales: ${generalPercentage}%</h3>
        ${sectionResultsHtml}`;
        
    document.getElementById('recommendations').innerHTML = recommendations;
}