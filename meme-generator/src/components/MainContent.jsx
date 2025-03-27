import React from "react"

export default function Main() {

  const [meme, setMeme] = React.useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imgUrl: "https://cdn-useast1.kapwing.com/static/templates/old-man-cup-of-coffee-meme-template-full-f29f4df8.webp"
  });

  function handleChange(event) {
    const {value, name} = event.currentTarget;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  }

  return(
    <main className="main">
      <div>
        <div className="form">
          <label> Top Text
            <input
            type="text" 
            placeholder="One does not simply"
            name="topText"
            onChange={handleChange}
            value={meme.topText} />
          </label>

          <label> Bottom Text
            <input 
            type="text" 
            placeholder="Walk into Modor"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText} />
          </label>
        </div>
      </div>

      <button>Get a new meme image <img src="/src/assets/img-icon.png" width='16px'/></button>

      <div className="memeSection">
        <img src={meme.imgUrl}/>
        <span className="top-text">{meme.topText}</span>
        <span className="bottom-text">{meme.bottomText}</span>
      </div>
    </main>
  )
}