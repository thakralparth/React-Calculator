import ResultComponent from "./components/ResultComponent";
import Keypad from "./components/Keypad";
import { useState } from "react";

function App() {
  const [result,setResult]=useState('');

  const symbols = ['+', '-', '*', '/', '.'];
  const handleClick=(e)=>{
    if(e.target.value === "clear"){
      setResult("");
    }else if(e.target.value==="backspace"){
      setResult(result.slice(0,result.length-1));
    }else if(e.target.value==="plusmin"){
      setResult(-result);
    }
    
    else if(e.target.value==="calculate"){
      try{

        setResult(eval(result).toString());
      }catch(err){
        setResult("Error");
      }
    }
    else{
      if(symbols.includes(e.target.value) && result==='' ||
      symbols.includes(e.target.value) && symbols.includes(result[result.length-1])
        ){
          return;
        }
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
