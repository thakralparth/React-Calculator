import React from "react";

class Keypad extends React.Component{
    render(){
        return(
            <div>
                <div className="keypad">
                    <div className="button-grid">
                        <button className="grid-item">a</button>
                        <button className="grid-item">b</button>
                        <button className="grid-item">c</button>
                        <button className="grid-item">/</button>

                        <button className="grid-item">7</button>
                        <button className="grid-item">8</button>
                        <button className="grid-item">9</button>
                        <button className="grid-item">*</button>

                        <button className="grid-item">4</button>
                        <button className="grid-item">5</button>
                        <button className="grid-item">6</button>
                        <button className="grid-item">-</button>
                        
                        <button className="grid-item">1</button>
                        <button className="grid-item">2</button>
                        <button className="grid-item">3</button>
                        <button className="grid-item">+</button>

                        <button className="grid-item-0">0</button>
                        <button className="grid-item-.">.</button>
                        <button className="grid-item-=">=</button>
                        

                    </div>

                </div>
            </div>
        )
    }
}

export default Keypad;