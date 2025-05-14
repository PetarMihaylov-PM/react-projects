import trollFace from "/src/assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollFace} alt="troll-face" />
      <span>Meme Generator</span>
    </header>
  )
}