import React from 'react';
import { Link } from 'react-router-dom';


export default function AllCinemas(props) {
  console.log('props in AllCinemas', props)
  console.log('props in allCinemas props.cinemas', props.cinemas)
  const cinemas = props
    .cinemas 
    .map(cinema => 
      <div className='cinema-box'
        key={cinema.id}>

        <Link
          to={`/cinema/${cinema.id}`} >
            <img className='pic' alt={cinema.name} src={cinema.picture}></img>
        </Link>
        <div className='cinema-title'>
          {cinema.name}
        </div>
      </div>)

    return (
      <div>
        {cinemas}
      </div>
    );
}