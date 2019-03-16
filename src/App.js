import React, { Component } from 'react';

import Board from './Components/Board';
import StartSequence from './Components/StartSequence';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <StartSequence />
      </div>
    );
  }
}

export default App;
