import React from 'react';
import { Link } from 'react-router-dom';


export default function AllCinemas(props) {
  const cinemas = props
    .cinemas 
    .map(cinema => 
      <div
        key={cinema.id}>

        <Link
          to={`/cinema/${cinema.id}`} >
            <img alt={cinema.name} src={cinema.picture}></img>
        </Link>
        {cinema.name}

      </div>)

    return (
      <div>
        {cinemas}
      </div>
    );
}