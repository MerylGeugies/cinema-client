//import React, {Component} from 'react';
import * as React from 'react';
import AllCinemas from './AllCinemas';
import { connect } from 'react-redux';
import {getCinemas} from '../actions/cinema';

import './AllCinemas.scss'

class AllCinemasContainer extends React.Component {
  componentDidMount() {
    console.log('AllCinemasContainer', this.props.getCinemas)
    this.props.getCinemas()
  }

  render() { 
    console.log('this.props', this.props)
     return <div className='all-cinemas'> 
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
  ) (AllCinemasContainer);