import React from 'react'
import { HuePicker } from 'react-color'

const ColorSlider = React.createClass({
  handleColorChange(color, c) {
    this.props.onColorChange(color, c);
  },

  handleChangeComplete(color, event) {
    this.props.onColorChange(color.hex, event);
  },

  render() {
    return(
      <div>
        <HuePicker onChangeComplete={ this.handleChangeComplete } color={ this.props.color } width='auto'/>
      </div>
    )
  }
})

export default ColorSlider;

ColorSlider.propTypes = {
  onColorChange: React.PropTypes.func.isRequired,
  color: React.PropTypes.string
};
