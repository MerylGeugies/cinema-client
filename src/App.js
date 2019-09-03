import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return(
        <div className='app'>
          <ButtonList />
          <Route exact path='/' component={AllCinemasContainer} />

        </div>
    );
  }
}

export default App;
