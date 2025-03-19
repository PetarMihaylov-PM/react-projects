export default function MainContent() {
  return(
    <>
      <main className="mainContent">
        <div className="inputAndButton">
          <input type="text" placeholder="Type your ingredient here"/>
          <button>+ Add ingredient </button>
        </div>
        <div className="ingredients-container">
          <h1>Ingredients on hand:</h1>
          <ul>
            <li>Chicken breasts</li>
          </ul>
        </div>
      </main>
    </> 
  )
}