import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllCinemasContainer from './components/AllCinemasContainer';
import ReviewFormContainer from './components/ReviewFormContainer';
import CompareCinemasContainer from './components/CompareCinemasContainer';

import './App.scss';

class App extends Component {
  render() {
    return(
        <div className='app'>
          <Route exact path='/' component={CompareCinemasContainer} />
          <Route exact path='/cinemas' component={AllCinemasContainer} />
          <Route exact path='/reviews' component={ReviewFormContainer} />
        </div>
    );
  }
}

export default App;
