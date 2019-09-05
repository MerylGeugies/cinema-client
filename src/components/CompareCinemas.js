import React from 'react';
//import { Link } from 'react-router-dom';


export default function CompareCinemas(props) {
  console.log('props in AllCinemas', props)
  console.log('props in allCinemas props.cinemas', props.cinemas)
  const cinemas = props
    .cinemas 
    .map(cinema => 
      <div>
         <select>
            value={this.state.selectedCinema} 
            onChange={(e) => this.setState(
            {selectedCinema: e.target.value, 
            validationError: e.target.value === "" ? "You must select a cinema" : ""})}>

        {this.state.cinemas.map((cinema) => 
          <option key={cinema.value} value={cinema.value}>{cinema.display}</option>)}
        </select> 

       

      </div>)

    return (
      <div>
        {cinemas}
      </div>
    );
}