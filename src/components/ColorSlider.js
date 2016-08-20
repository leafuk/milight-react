import React from 'react'
import { HueSpectrum } from 'react-color-picker'

const ColorSlider = React.createClass({
  handleColorChange(color, c) {
    this.props.onColorChange(color, c);
  },

  render() {
    return(
      <div>
        <HueSpectrum defaultValue="red" onDrag={this.handleColorChange} width={80} height={200} />
      </div>
    )
  }
})

export default ColorSlider;

ColorSlider.propTypes = {
  onColorChange: React.PropTypes.func.isRequired
};
