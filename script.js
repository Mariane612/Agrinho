let num1, num2, correctAnswer;
let questionsAnswered = 0;
let correctCount = 0;

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('submitBtn').addEventListener('click', checkAnswer);



function startGame() {
  questionsAnswered = 0;
  correctCount = 0;
  document.getElementById('feedback').innerText = '';
  document.getElementById('result').innerText = '';
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('answer').style.display = 'inline';
  document.getElementById('submitBtn').style.display = 'inline';
  generateQuestion();
}

function generateQuestion() {
  if (questionsAnswered >= 10) {
    showResult();
    return;
  }
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  correctAnswer = num1 * num2;
  document.getElementById('question').innerText = `Quanto é ${num1} x ${num2}?`;
  questionsAnswered++;
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById('answer').value, 10);
  if (isNaN(userAnswer)) {
    document.getElementById('feedback').innerText = 'Por favor, digite um número.';
  } else if (userAnswer === correctAnswer) {
    document.getElementById('feedback').innerText = 'Correto! Muito bem!';
    correctCount++;
  } else {
    document.getElementById('feedback').innerText = 'Errado.';
  }
  document.getElementById('answer').value = '';
  generateQuestion();
}

function showResult() {
  document.getElementById('feedback').innerText = '';
  document.getElementById('question').innerText = '';
  document.getElementById('answer').style.display = 'none';
  document.getElementById('submitBtn').style.display = 'none';
  document.getElementById('result').innerText = `Jogo terminado! Você acertou ${correctCount} de 10 perguntas.`;
}
