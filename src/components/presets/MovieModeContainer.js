import React from 'react'
import axios from 'axios';

import MovieMode from './MovieMode';

const baseUrl = "http://192.168.1.84:3000"

class MovieModeContainer extends React.Component {
  handleClick(){
    axios.get(baseUrl + '/master/off')
      .then(function(response) {
        axios.post(baseUrl + '/tv/colors', {
            color: '#CC0000'
          })
          .then(function(response) {
            // Do nothing
          });
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render () {
    return(
      <MovieMode onClick={this.handleClick.bind(this)} />
    )
  }
}

export default MovieModeContainer;
