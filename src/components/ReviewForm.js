  import React from 'react'

  import './ReviewForm.scss'

export default function ReviewForm (props) {
  const {
    onSubmit,
    value,
    onChange
  } = props

  return <div className='contains-form'>
    <form className='form-and-heading' onSubmit={onSubmit}> 
    <h1 className='form-title'>Give you review</h1>

      <div className='form'>
      <input type='hidden' value={props.cinema} name='cinemaId' />

      <div className='form-box'>
      <p>Name:</p>
      <input
        type='text'
        placeholder='name'
        name='name'
        value={value.name}
        onChange={onChange}
      />
      </div>

      <div className='form-box'>
      <p>Overal experiance:</p>
      <input
        type='text'
        placeholder='description'
        name='description'
        value={value.description}
        onChange={onChange}
      />
      </div>

      <div className='form-box'>
      <p>How was the popcorn?</p>
      <span className="rating">

        <input id="rating5" type="radio" name="popcorn" value='5' onChange={onChange}/>
        <label htmlFor="rating5">5</label>

        <input id="rating4" type="radio" name="popcorn" value="4" onChange={onChange}/>
        <label htmlFor="rating4">4</label>

        <input id="rating3" checked="checked" type="radio" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating3">3</label>

        <input id="rating2" type="radio" name="popcorn" value="2" onChange={onChange}/>
        <label htmlFor="rating2">2</label>
        
        <input id="rating1" type="radio" name="popcorn" value="1" onChange={onChange}/>
        <label htmlFor="rating1">1</label>
      </span>
      </div>

      <div className='form-box'>
      <p>How where the seats?</p>
      <span className="rating">

        <input id="rating52" type="radio" name="seats" value='5' onChange={onChange}/>
        <label htmlFor="rating52">5</label>

        <input id="rating42" type="radio" name="seats" value="4" onChange={onChange}/>
        <label htmlFor="rating42">4</label>

        <input id="rating32" checked="checked" type="seats" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating32">3</label>

        <input id="rating22" type="radio" name="seats" value="2" onChange={onChange}/>
        <label htmlFor="rating22">2</label>

        <input id="rating21" type="radio" name="seats" value="1" onChange={onChange}/>
        <label htmlFor="rating12">1</label>
      </span>
      </div>

      <div className='form-box'>
      <p>Was there enough space for you legs?</p>
      <span className="rating">

        <input id="rating53" type="radio" name="leg_space" value='5' onChange={onChange}/>
        <label htmlFor="rating53">5</label>

        <input id="rating43" type="radio" name="leg_space" value="4" onChange={onChange}/>
        <label htmlFor="rating43">4</label>

        <input id="rating33" checked="checked" type="leg_space" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating33">3</label>

        <input id="rating23" type="radio" name="leg_space" value="2" onChange={onChange}/>
        <label htmlFor="rating23">2</label>

        <input id="rating13" type="radio" name="leg_space" value="1" onChange={onChange}/>
        <label htmlFor="rating13">1</label>
      </span>
      </div>

      <div className='form-box'>
       <p>Is there a break during the movie?</p>
       <span className="rating">

        <input id="rating54" type="radio" name="break" value='5' onChange={onChange}/>
        <label htmlFor="rating54">5</label>

        <input id="rating44" type="radio" name="break" value="4" onChange={onChange}/>
        <label htmlFor="rating44">4</label>

        <input id="rating34" checked="checked" type="break" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating34">3</label>

        <input id="rating24" type="radio" name="break" value="2" onChange={onChange}/>
        <label htmlFor="rating24">2</label>

        <input id="rating14" type="radio" name="break" value="1" onChange={onChange}/>
        <label htmlFor="rating14">1</label>
      </span>
      </div>

      <div className='form-box'>
      <p>Was there enough parking space?</p>
      <span className="rating">

        <input id="rating55" type="radio" name="parking" value='5' onChange={onChange}/>
        <label htmlFor="rating55">5</label>

        <input id="rating45" type="radio" name="parking" value="4" onChange={onChange}/>
        <label htmlFor="rating45">4</label>

        <input id="rating35" checked="checked" type="parking" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating35">3</label>

        <input id="rating25" type="radio" name="parking" value="2" onChange={onChange}/>
        <label htmlFor="rating25">2</label>

        <input id="rating15" type="radio" name="parking" value="1" onChange={onChange}/>
        <label htmlFor="rating15">1</label>
      </span>
      </div>

      <div className='form-box'>
      <p>Was the visit expencive?</p>
      <span className="rating">

        <input id="rating50" type="radio" name="cheap" value='5' onChange={onChange}/>
        <label htmlFor="rating50">5</label>

        <input id="rating40" type="radio" name="cheap" value="4" onChange={onChange}/>
        <label htmlFor="rating40">4</label>

        <input id="rating30" checked="checked" type="cheap" name="popcorn" value="3" onChange={onChange}/>
        <label htmlFor="rating30">3</label>

        <input id="rating20" type="radio" name="cheap" value="2" onChange={onChange}/>
        <label htmlFor="rating20">2</label>

        <input id="rating10" type="radio" name="cheap" value="1" onChange={onChange}/>
        <label htmlFor="rating10">1</label>
      </span>
      </div>

      </div>

      <div className='form-box'>
      <button className='button' type='submit'>Send</button>
      </div>

    </form>
  </div>
}