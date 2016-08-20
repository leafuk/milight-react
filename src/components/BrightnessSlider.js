import React, { PropTypes } from 'react'
import Slider from 'material-ui/Slider';
import FontIcon from 'material-ui/FontIcon';

import BrightnessIcon from 'material-ui/svg-icons/action/settings-brightness';

const iconStyles = {
  color: '#000',
  marginLeft: '-10px',
  marginTop: '10px',
  width: 40,
  height: 40,
}

const BrightnessSlider = React.createClass({
  handleBrightnessChange(event, value) {
    this.props.onBrightnessChange(event, value);
  },
  render () {
    return (
      <div>
        <Slider
          step={1}
          value={20}
          min={0}
          max={20}
          step={1}
          defaultValue={20}
          sliderStyle={{marginBottom:0, marginTop:0}}
          style={{height: 160}}
          axis="y"
          onChange={this.handleBrightnessChange} />

        <BrightnessIcon style={iconStyles} />
      </div>
    )
  }
})

export default BrightnessSlider

BrightnessSlider.propTypes = {
  onBrightnessChange: React.PropTypes.func.isRequired
};
