  import React from 'react'

export default function ReviewForm (props) {
  const {
    onSubmit,
    value,
    onChange
  } = props

  return <div>
    <form onSubmit={onSubmit}> 
    <h1>Give you review</h1>
      <p>Name:</p>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={value.name}
        onChange={onChange}
      />
      <p>Overal experiance:</p>
      <input
        type='text'
        placeholder='description'
        name='description'
        value={value.description}
        onChange={onChange}
      />
      <p>How is the popcorn?</p>
      <input
        type='number'
        placeholder='./5'
        name='popcorn'
        value={value.popcorn}
        onChange={onChange}
      />
      <p>How are the seats?</p>
      <input
        type='number'
        placeholder='./5'
        name='seats'
        value={value.seats}
        onChange={onChange}
      />
      <p>Is there enough leg space?</p>
      <input
        type='number'
        placeholder='./5'
        name='leg_space'
        value={value.leg_space}
        onChange={onChange}
      />
       <p>Is there a break during the movie?</p>
      <input
        type='number'
        placeholder='./5'
        name='break'
        value={value.break}
        onChange={onChange}
      />
      <p>Is there enough parking space?</p>
      <input
        type='number'
        placeholder='./5'
        name='parking'
        value={value.parking}
        onChange={onChange}
      />
      <p>How much did you pay?</p>
      <input
        type='number'
        placeholder='./5'
        name='cheap'
        value={value.cheap}
        onChange={onChange}
      />

      <button type='submit'>Send</button>
    </form>
  </div>
}