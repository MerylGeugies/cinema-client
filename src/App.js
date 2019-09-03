import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllCinemasContainer from './components/AllCinemasContainer';

import './App.css';

class App extends Component {
  render() {
    return(
        <div className='app'>
          {/* <header> <img alt='logo' src=''> </img></header> */}
          <Route exact path='/cinemas' component={AllCinemasContainer} />
        </div>
    );
  }
}

export default App;
