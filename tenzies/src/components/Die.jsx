import '/src/styles/style.css';
export default function Die(props) {
  const styles = props.isHeld ? 'dice-clicked' : 'dice'
  
  return(
    <>
      <button 
        className={styles}
        
        onClick={() => props.hold(props.id)}
      >{props.value}</button>
    </>
  )
}