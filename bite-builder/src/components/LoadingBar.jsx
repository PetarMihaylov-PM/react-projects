export default function LoadingBar(props){
  return(
    props.loading ? <div className="loading-bar"></div> : null
  )
}