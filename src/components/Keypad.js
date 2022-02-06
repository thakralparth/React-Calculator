import React, { useState } from "react";

const Keypad=({handleClick})=>{
        
        return(
            <div>
                <div className="keypad">
                    <div className="button-grid">
                        <button value="clear" onClick={handleClick} className="grid-item symbol">C</button>
                        <button value="backspace"onClick={handleClick} className="grid-item symbol">&larr;</button>
                        <button value="%" onClick={handleClick} className="grid-item symbol">%</button>
                        <button value="/" onClick={handleClick} className="grid-item symbol">&divide;</button>

                        <button value="7" onClick={handleClick} className="grid-item">7</button>
                        <button value="8" onClick={handleClick} className="grid-item">8</button>
                        <button value="9" onClick={handleClick} className="grid-item">9</button>
                        <button value="*" onClick={handleClick} className="grid-item symbol">&times;</button>

                        <button value="4" onClick={handleClick} className="grid-item">4</button>
                        <button value="5" onClick={handleClick} className="grid-item">5</button>
                        <button value="6" onClick={handleClick} className="grid-item">6</button>
                        <button value="-" onClick={handleClick} className="grid-item symbol">-</button>
                        
                        <button value="1" onClick={handleClick} className="grid-item">1</button>
                        <button value="2" onClick={handleClick} className="grid-item">2</button>
                        <button value="3" onClick={handleClick} className="grid-item">3</button>
                        <button value="+" onClick={handleClick} className="grid-item symbol">+</button>

                        <button value="0" onClick={handleClick} className="grid-item zero">0</button>
                        <button value="." onClick={handleClick} className="grid-item">.</button>
                        <button value="calculate" onClick={handleClick} className="grid-item symbol">=</button>
                        

                    </div>

                </div>
            </div>
        )
    }


export default Keypad;