export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? 'lightgreen' : 'white'
  }
  return(
    <>
      <button 
        style={styles}
        onClick={() => props.hold(props.id)}
      >{props.value}</button>
    </>
  )
}