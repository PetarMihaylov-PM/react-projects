import React from "react"

export default function Main() {

  const [meme, setMeme] = React.useState({
    topText: 'One does not simply',
    bottomText: 'Walk into Mordor',
    imgUrl: "https://i.imgflip.com/1ur9b0.jpg"
  });

  const [memeData, setMemeData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes').
      then(response => response.json()).
      then(data => setMemeData(data.data.memes));
  },[]);

  function handleClick() {
    const index = Math.floor(Math.random() * memeData.length);
    console.log(index);
    
    const memeImg = memeData[index].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      imgUrl: memeImg
    }));
  }


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

      <button 
        onClick={handleClick}>
        Get a new meme image 
        <img src="/src/assets/img-icon.png" width='16px'/>
      </button>

      <div className="memeSection">
        <img src={meme.imgUrl}/>
        <span className="top-text">{meme.topText}</span>
        <span className="bottom-text">{meme.bottomText}</span>
      </div>
    </main>
  )
}