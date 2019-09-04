import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReviewForm from './ReviewForm';
import { makeReview } from '../actions/review'; 


function ReviewFormContainer(props) {
  const [inputs, setInputs] = useState({ 
    name:'', 
    description: '',
    popcorn: '',
    seats: '',
    leg_space: '',
    break: '',
    parking: '',
    cheap: ''
   });

  const onChange = event => {
    return setInputs({ ...inputs, [event.target.name]: event.target.value })
  }
  
  const onSubmit = (event) => {
      event.preventDefault();

      props.makeReview(inputs)
      
      return setInputs({
        name:'', 
        description: '',
        popcorn: '',
        seats: '',
        leg_space: '',
        break: '',
        parking: '',
        cheap: ''
       })

    }

  return (
    <ReviewForm
      onSubmit={onSubmit}
      value={inputs}
      onChange={onChange}
    />
  )

} 

export default connect(
  null,
{makeReview}
)(ReviewFormContainer)