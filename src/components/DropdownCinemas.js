import React from 'react';

function CompareCinemaContainer (props){

    return (
      <div className='dropdown'>
        <select
        value={props.selectedCinema} 
              onChange={props.onChange}>

        {props.cinemas.length === 0 ? <></> : props.cinemas.map((cinema) => {
          //console.log('cinema',cinema)
            return <option key={cinema.id} value={cinema.picture}>{cinema.name}</option>
          })}
        </select>
          <div className='text'> Name of the cinema:
            <p className='text-cinema'> 
            <img className='pic' alt={props.selectedCinema} src={props.selectedCinema}></img>
            {/* {props.selectedCinema} */}
            </p>
          <div>
            {/* value={props.findCinema}
            {props.cinemas.length === 0 ? <></> : props.findCinema } */}
          {/* //console.log('cinema',cinema) */}

          </div>
          
          
          </div>

      </div>
    )
  }

export default CompareCinemaContainer;