import React from 'react'
import Slider from 'material-ui/Slider';

const BrightnessSlider = React.createClass({
  handleBrightnessChange(event, value) {
    this.props.onBrightnessChange(event, value);
  },
  render () {
    return (
      <div>
        <Slider
          step={1}
          value={100}
          min={0}
          max={100}
          defaultValue={100}
          sliderStyle={{marginBottom:0, marginTop:0}}
          axis="x"
          onChange={this.handleBrightnessChange}
          className="slider-control" />
      </div>
    )
  }
})

export default BrightnessSlider

BrightnessSlider.propTypes = {
  onBrightnessChange: React.PropTypes.func.isRequired
};
