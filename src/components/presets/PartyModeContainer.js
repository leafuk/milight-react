import React from 'react'
import axios from 'axios';

import PartyMode from './PartyMode';

const baseUrl = "http://192.168.1.84:3000"

class PartyModeContainer extends React.Component {

  handleClick() {
    axios.get(baseUrl + '/master/off')
      .then(function(response) {
        axios.get(baseUrl + '/milight/discoMode')
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
      <PartyMode onClick={this.handleClick.bind(this)} />
    )
  }
}

export default PartyModeContainer;
