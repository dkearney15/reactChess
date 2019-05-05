import React, { Component } from 'react';

import Game from './Components/Game';
import StartSequence from './Components/StartSequence';
import RootStyle from './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
        <StartSequence />
      </div>
    );
  }
}

export default App;
