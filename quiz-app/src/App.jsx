export default function App() {
  return (
    <div className="quiz-app-container">
      <header>
        <h3>Quiz</h3>
        <div className="timer">
          <p>Time</p>
          <span>20</span>
        </div>
      </header>
      <section className="questions-container">
        <h3>The question will go here</h3>
        <button>
          <p>True</p>
        </button>
        <button>
          <p>False</p>
        </button>
        <button>
          <p>Sometimes</p>
        </button>
        <button>
          <p>Everytime</p>
        </button>
      </section>
    </div>
  )
}