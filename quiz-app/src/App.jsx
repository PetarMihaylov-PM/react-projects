import React from "react"

export default function App() {

const [questionsData, setQuestionsData] = React.useState([]);
const [currentIndex, setCurrentIndex] = React.useState(0);
const [score, setScore] = React.useState(0);
const [selectedAnswer, setSelectedAnswer] = React.useState(null);

const currentQuestion = questionsData[currentIndex];

React.useEffect(() => {
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

  getQuiestions();
}, []);

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
}

  return (
    <div className="quiz-app-container">
      <header>
        <h3>Quiz</h3>
        <div className="timer">
          <p>Time</p>
          <span>20</span>
        </div>
      </header>
      { questionsData.length > 0 ? 
        (<section className="questions-container">
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
                        : answer === selectedAnswer
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
          <div>
            <span>Score: {score}</span>
          </div>
        </section>) 
        : 
        null
      }
    </div>
  )
}