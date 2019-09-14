import * as React from 'react';

export default function DetailCinema(props) {
  // console.log('props.detailCinema', props.detailAllCinema)
  console.log('props', props)
  if (!props.detailCinema) return 'Loading events...'
  

  return (
    <div> 
      <h3>{props.detailCinema.name}</h3>

        <div className='cinema-info'>  

          <img className='picture'alt={props.detailCinema.name} src={props.detailCinema.picture}></img>
          <div className='info'>
            <p>location: {props.detailCinema.location} </p>

            <p>Reviews: {props.detailCinema.review} </p>

          </div>
        </div>
        

    </div>
  )
} 