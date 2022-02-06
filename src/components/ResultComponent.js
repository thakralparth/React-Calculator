import React, { Component, useState } from "react";

const Result=({result})=>{
    // const [result,setResult]=useState('Res');
        return(
            <div >
                <input className="result-screen" type="text" value={result}/>
            </div>
        )
    }


export default Result;