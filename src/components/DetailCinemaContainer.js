import * as React from 'react';
import { connect } from 'react-redux';
import { detailAllCinema } from '../actions/cinema';
import DetailCinema from './DetailCinema';

import './DropDownCinemas.scss'

class DetailCinemaContainer extends React.Component {
  state= {detailAllCinema: ''}

  componentDidMount() {
    this.props.detailAllCinema(this.props.match.params.id)
    // console.log('this.props.match.params.cinemaId',(this.props.match.params.id)) 
    // console.log('this.state', this.state)
  }
  
  render() 
  {
    console.log('this.props.detailCinema', this.props)
  
    return <div> 
    <DetailCinema
      detailCinema={this.props.detailCinema} />
    </div>
  }
  
}

const mapStateToProps = state => {
  console.log(' gfjuygytfytdjdfurtedrtjdtrerfjdfgcjhfgd:', state)
  return {
  detailCinema: state.fetchReview
}
}

const mapDispatchToProps ={
  detailAllCinema
  
}
// console.log('mapdispatchToProps', mapDispatchToProps)

// console.log('state.fetchReview', detailAllCinema)


export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(DetailCinemaContainer)