import React, { PropTypes } from 'react'
import axios from 'axios';

import ColorSlider from './ColorSlider'

const baseUrl = "http://192.168.1.84:3000"

class ColorSliderContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '#CC0000'
    }
  }

  handleColorChange(color, c) {
    this.setState({
      color: color
    });

    var endPoint = '';
    switch(this.props.lightType){
      case 'spotlamp':
        endPoint = '/milight/colors';
        break;
      case 'tv':
        endPoint = '/tv/colors';
        break;
    }

    axios.post(baseUrl + endPoint, {
        color: color
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
      <ColorSlider onColorChange={this.handleColorChange.bind(this)} />
    )
  }
}

export default ColorSliderContainer;

ColorSliderContainer.propTypes = {
  lightType: React.PropTypes.oneOf(['spotlamp','tv']).isRequired
};
