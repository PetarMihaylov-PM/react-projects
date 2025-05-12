import { createContext, useState } from "react";
import runChat from "../config/config";

export const Context = createContext();

const ContextProvider = (props) => {
  
  const [input, setInput] = useState('');
  const [recentPrompt, setRecentPrompt] = useState('');
  const [previousPrompts, setPreviousPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState('');

  function delayPara(index, nextWord) {
    setTimeout(() => {
      setResultData(prev => prev + nextWord);
    },75*index)
  }

  function newChat() {
    setLoading(false);
    setShowResult(false);
  }

  const onSent = async (prompt) => {

    setResultData('');
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    }
    else {
      setPreviousPrompts(prev => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }
    const responseArray = response.split('**');
    let newResponse = '';
    responseArray.forEach((word, index) => {
      if(index === 0 || index % 2 === 0) {
        newResponse += word
      }
      else {
        newResponse += '<b>' + word + '</b>';
      }
    });

    const newResponse2 = newResponse.split('*').join('</br>');

    let newResponseArray = newResponse2.split(' ');
    newResponseArray.forEach((word, index) => {
      delayPara(index, word + ' ');
    })
    setLoading(false);
    setInput('');
  }

  const contextValue = {
    previousPrompts,
    setPreviousPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
  }
 
  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider;