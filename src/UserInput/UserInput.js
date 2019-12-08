import React from 'react';
import './UserInput.css'
const UserInput = (props) => {
   
    return(
        <div className="Wrapper">
            <h1 className="Title">Input Form!</h1>
            <div className="Input">
                <input type="text" id="input" onChange={props.onchange} value={props.name} className="Input-text" placeholder="Your username, e.g. Axorean"/>    
            </div>
        </div>
    )
}

export default UserInput; 