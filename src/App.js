import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  //functional react comp
  //useState using destructure function
  state =
  {
    user: [
      {name: "Axorean", zodiac:"Libra"},
      {name: "Sugus", zodiac:"Leo"},
      {name: "Mogus", zodiac:"Gemini"}
    ]
  };

  userNameChangeHandlerOne = (event) => {
      this.setState(
        {
          user: [
            {name: event.target.value, zodiac:"Libra"},
            {name: "Sugus", zodiac:"Leo"},
            {name: "Mogus", zodiac:"Gemini"}
          ]
        }
      );
  };



  render(){
    const style = {
      backgroundColor : 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    };
    return ( 
    <div className="App"
    style = {style}
    >
    <UserInput 
    name = {this.state.user[0].name} 
    onchange={this.userNameChangeHandlerOne}/>
    <UserOutput 
    name = {this.state.user[0].name} 
    zodiac={this.state.user[0].zodiac} 
    />
    <UserOutput
    name = {this.state.user[1].name} 
    zodiac={this.state.user[1].zodiac} />
    <UserOutput
    name = {this.state.user[2].name} 
    zodiac={this.state.user[2].zodiac} />
    </div>
    )
    
  }

}

export default App;
