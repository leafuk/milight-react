import React from 'react'
import axios from 'axios';

import BrightnessSlider from './BrightnessSlider'

const baseUrl = "http://192.168.1.84:3000"

class BrightnessSliderContainer extends React.Component {

  state = {
    brightness: 20
  }

  handleBrightnessChange(event, value){
    this.setState({brightness: value});

    var endPoint = this.props.lightType === 'spotlamp' ? '/milight/brightness' : '/tv/brightness';

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
