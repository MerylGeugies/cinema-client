import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AllCinemasContainer from './components/AllCinemasContainer';
import ReviewFormContainer from './components/ReviewFormContainer';
//import DropdownCinemas from './components/DropdownCinemas';
import DropdownCinemasContainer from './components/DropdownCinemasContainer';
import DetailCinemaContainer from './components/DetailCinemaContainer';
import './App.scss';

class App extends Component {
  render() {
    return(
        <div className='app'>
          <Route exact path='/' component={DropdownCinemasContainer} />
          <Route exact path='/cinemas' component={AllCinemasContainer} />
          <Route exact path='/reviews' component={ReviewFormContainer} />
          <Route path='/cinema/:id' component={DetailCinemaContainer} />
        </div>
    );
  }
}

export default App;
