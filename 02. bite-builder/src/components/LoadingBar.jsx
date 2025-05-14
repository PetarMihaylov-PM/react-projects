export default function LoadingBar(props){
  return(
    //change the className to 'spinner' to add the loading spinner
    props.loading ? <div className="loading-bar"></div> : null
  )
}