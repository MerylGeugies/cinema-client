//import React, {Component} from 'react';
import * as React from 'react';
import AllCinemas from './AllCinemas';
import { connect } from 'react-redux';
import {getCinemas} from '../actions';

class AllEventsContainer extends React.Component {
  componentDidMount() {
    this.props.getCinemas()
  }

  render() { 
     return <div> 
       <AllCinemas 
          cinemas={this.props.cinemas}
    />
    </div>
  }
}

function mapStateToProps(state) {
  return {
    cinemas: state.cinemas
  }
}

export default connect(
  mapStateToProps,
  {getCinemas}
  ) (AllEventsContainer);