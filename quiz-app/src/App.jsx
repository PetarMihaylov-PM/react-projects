import React from "react"

export default function App() {

const [questionsData, setQuestionsData] = React.useState([]);
const [currentIndex, setCurrentIndex] = React.useState(0);
const [score, setScore] = React.useState(0);
const [selectedAnswer, setSelectedAnswer] = React.useState(null);
const [isQuizOver, setIsQuizOver] = React.useState(false);
const [timeLeft, setTimeLeft] = React.useState(20);


const currentQuestion = questionsData[currentIndex];

React.useEffect(() => {
  getQuiestions();
}, []);

React.useEffect(() => {
  if(!selectedAnswer && timeLeft > 0){
    const timer = setTimeout(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }

  if(timeLeft === 0 && selectedAnswer === null){
    setSelectedAnswer('timeout');
  }
}, [timeLeft, selectedAnswer]);

async function getQuiestions() {
  const data = 
    await fetch("https://opentdb.com/api.php?amount=10&type=multiple").
    then(response => response.json());

    const processedData = data.results.map(question => ({
      ...question,
      all_answers: shuffleAnswers(question.correct_answer, question.incorrect_answers)
    }))
    setQuestionsData(processedData); 
}

function shuffleAnswers(correct, incorrect) {
  const combineAnswers = [...incorrect, correct];
  return combineAnswers.sort(() => Math.random() - 0.5);
}

function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

function handleAnswerClick(answer) {
  setSelectedAnswer(answer)
  if(answer === currentQuestion.correct_answer){
    setScore(prev => prev + 1);
  }
  if(currentIndex === questionsData.length - 1){
    setIsQuizOver(true);
  }
}

function handleNextQuestion(){
  if(currentIndex < questionsData.length - 1){
    setCurrentIndex(prev => prev + 1);
    setSelectedAnswer(null);
    setTimeLeft(20);
  }
}

async function startNewQuiz() {
  await getQuiestions();
  setCurrentIndex(0);
  setScore(0);
  setSelectedAnswer(null);
  setIsQuizOver(false);
}

  return (
    <div className="quiz-app-container">
      <header>
        <h3>Quiz</h3>
        <div className="timer">
          <p>Time: <span className="timer-counter">{timeLeft}</span> </p>
        </div>
      </header>
      { questionsData.length > 0 ? 
        (<section className="questions-container">
          <h4 className="question-counter">Question: {currentIndex + 1} / 10</h4>
          <h3>{decodeHtml(currentQuestion.question)}</h3>
          <div className="answers">
            {
              currentQuestion.all_answers.map((answer, i) => (
                <button 
                  key={i}
                  className={
                    selectedAnswer
                      ? answer === currentQuestion.correct_answer
                        ? 'correct'
                        : answer === selectedAnswer && selectedAnswer !== null
                        ? 'incorrect'
                        : 'disabled'
                      : 'answer-button'
                  }
                  onClick={() => handleAnswerClick(answer)}
                  disabled={selectedAnswer !== null}
                >
                  {decodeHtml(answer)}
                </button>
              ))
            }
          </div>
          <div className="footer">
            <span className="score-container">Score: {score}</span>
            {selectedAnswer && !isQuizOver ? 
            <button 
              className="next-button"
              onClick={handleNextQuestion}>
              Next question
            </button> 
            : null}
            {isQuizOver ? <button onClick={startNewQuiz}>New Quiz</button> : null}
          </div>
        </section>) 
        : 
        null
      }
    </div>
  )
}