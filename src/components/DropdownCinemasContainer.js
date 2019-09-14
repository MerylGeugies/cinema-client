import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import DropdownCinemas from './DropdownCinemas';
import {getCinemas} from '../actions/cinema';

import './DropDownCinemas.scss'

function DropdownCinemasContainer(props) {

  const [selectedCinema, setSelectedCinema] = useState('')
  console.log('selectedCinema', selectedCinema)

  useEffect(() => {
    props.getCinemas()
    console.log('useEffect props.getCinemas', props.getCinemas)
  },[])

  const findCinema = props.cinemas.find(({name})=>name === selectedCinema)

  console.log(findCinema)

  
  const onChange = event => {
    setSelectedCinema(event.target.value)
    //console.log('onChangeId', event.target.value);
    //Change state selectedCinema = event.target.value;

  }
  
  return (
    <DropdownCinemas
      selectedCinema={selectedCinema}
      onChange={onChange}
      cinemas={props.cinemas}
      findCinema={findCinema}
    />
  )

} 

const mapStateToProps = ({cinemas}) => ({cinemas})

export default connect(
  mapStateToProps,
{getCinemas}
)(DropdownCinemasContainer)