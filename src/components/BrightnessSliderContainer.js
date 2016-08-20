import React, { PropTypes } from 'react'
import axios from 'axios';

import BrightnessSlider from './BrightnessSlider'

const baseUrl = "http://192.168.1.84:3000"

class BrightnessSliderContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    brightness: 10
  }

  handleBrightnessChange(event, value){
    this.setState({brightness: value});

    var endPoint = '';
    switch(this.props.lightType){
      case 'spotlamp':
        endPoint = '/milight/brightness';
        break;
      case 'tv':
        endPoint = '/tv/brightness';
        break;
    }

    axios.post(baseUrl + endPoint, {
        level: value
      })
      .then(function(response) {
        // Do nothing
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render () {
    return(
      <BrightnessSlider onBrightnessChange={this.handleBrightnessChange.bind(this)} />
    )
  }
}

export default BrightnessSliderContainer;

BrightnessSliderContainer.propTypes = {
  lightType: React.PropTypes.oneOf(['spotlamp','tv']).isRequired
};
