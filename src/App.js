import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    persons: [
      { username: 'Bro'},
      { username: 'Dhani'},
      { username: 'Singgih'}
    ],
    note: '',
  }

  usernameChangeHandler = (event) => {
    this.setState({
      persons: [
        { username: event.target.value},
        { username: event.target.value},
        { username: event.target.value},
      ],
      note: 'Overwrite !'
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changed={this.usernameChangeHandler}/> 
        <UserOutput 
          userName={this.state.persons[0].username}
          note ={this.state.note}/>
        <UserOutput 
          userName={this.state.persons[1].username}
          note ={this.state.note} />
        <UserOutput
           userName={this.state.persons[2].username}
           note ={this.state.note} />
      </div>
    );
  }
}

export default App;
