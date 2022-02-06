import ResultComponent from "./components/ResultComponent";
import Keypad from "./components/Keypad";
import { useState } from "react";

function App() {
  const [result,setResult]=useState('');

  const handleClick=(e)=>{
    if(e.target.value == "clear"){
      setResult("");
    }else if(e.target.value==="backspace"){
      setResult(result.slice(0,result.length-1));
    }else if(e.target.value==="%"){
      setResult(result/100);
    }
    
    else if(e.target.value==="calculate"){
      try{

        setResult(eval(result).toString());
      }catch(err){
        setResult("Error");
      }
    }
    else{
      setResult(result + e.target.value);
    }
   
  }
  return (
    <div className="App">
      
      <ResultComponent result={result}/>
      <Keypad handleClick={handleClick}/>
    </div>
  );
}

export default App;
