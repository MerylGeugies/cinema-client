import React,{useState, useEffect} from 'react';
//import { url } from '../constant';
import {getCinemas} from '../actions/cinema';
import { connect } from 'react-redux';



function CompareCinemaContainer (props){
  const [cinemas, setCinemas] = useState([])
  const [selectedCinema, setSelectedCinema] = useState('')
  const [validationError, setValidationError] =useState('')


  // componentDidMount() {
  //   this.props.getCinemas()
  //   console.log('props.getCinemas', this.props.getCinemas())
  //   console.log('this.state', this.state)
    
    // fetch(`${url}/cinemas`)
    // .then((response) => {
    //   return response.json();
    // })
    // .then(data => {
    //   let allCinemas = data.map(cinema => { return {value: cinema, display: cinema} })
    //   this.setState({ cinemas: [{value: '', display: '(Select a cinema)'}].concat(allCinemas) });
    // }).catch(error => {
    //   console.log(error);
    // });
  //}

  useEffect(() => {
    props.getCinemas()
    console.log('useEffect props.getCinemas', props.getCinemas)
  },[])

    return (
      <div>
        <select>
        value={selectedCinema} 
              onChange={(e) => { setSelectedCinema(e.target.value) 
                return setValidationError(e.target.value === "" ? "You must select a cinema" : "")} }>

        {props.cinemas.map((cinema) => {
          console.log('cinema',cinema)
            return <option key={cinema.value} value={cinema.value}>{cinema.name}</option>
          })}
        </select>
      </div>
    )
  }



function mapStateToProps(state) {
  return {
    cinemas: state.cinemas
  }
}

export default connect(
  mapStateToProps,
  {getCinemas})(CompareCinemaContainer)