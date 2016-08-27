import React from 'react'
import axios from 'axios';

import SundayMorningMode from './SundayMorningMode';

const baseUrl = "http://192.168.1.84:3000"

class SundayMorningModeContainer extends React.Component {
  setTvColor() {
    return axios.post(baseUrl + '/tv/colors', {
        color: '#00ffff'
    });
  }

  setSpotLampsColor() {
    return axios.post(baseUrl + '/milight/colors', {
        color: '#f200ff'
    });
  }

  handleClick() {
    axios.get(baseUrl + '/master/on')
      .then(axios.all([this.setTvColor(), this.setSpotLampsColor()])
        .then(axios.spread(function (allOn, tv, milight) {
          // All requests are now complete
        })))
      .catch(function (error) {
        console.error(error);
      });
  }

  render () {
    return(
      <SundayMorningMode onClick={this.handleClick.bind(this)} />
    )
  }
}

export default SundayMorningModeContainer;
