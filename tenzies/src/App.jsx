import React from "react";
import Die from "./components/Die";

export default function App(){
  return(
    <>
      <main className="mainContent">
        <div className="dice-container">
          <Die value={1}/>
          <Die value={2}/>
          <Die value={3}/>
          <Die value={4}/>
          <Die value={5}/>
          <Die value={6}/>
          <Die value={7}/>
          <Die value={8}/>
          <Die value={9}/>
          <Die value={10}/>
        </div>
        
      </main>
    </>
  )
}