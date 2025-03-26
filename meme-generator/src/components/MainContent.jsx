export default function Main() {
  return(
    <main className="main">
      <div>
        <div className="form">
          <label> Top Text
            <input type="text" 
            placeholder="One does not simply"
            name="topText" />
          </label>

          <label> Bottom Text
            <input type="text" 
            placeholder="Walk into Modor"
            name="bottomText" />
          </label>
        </div>
      </div>

      <button>Get a new meme image <img src="/src/assets/img-icon.png" width='16px'/></button>

      <div className="memeSection">
        <img src="https://cdn-useast1.kapwing.com/static/templates/old-man-cup-of-coffee-meme-template-full-f29f4df8.webp" alt="meme" />
      </div>
    </main>
  )
}