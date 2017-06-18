import React from 'react'

import ColorSlider from './ColorPicker'

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

    this.props.changeColour(color);
  }

  render () {
    return(
      <ColorSlider onColorChange={this.handleColorChange.bind(this)} color={this.state.color} />
    )
  }
}

export default ColorSliderContainer;

ColorSliderContainer.propTypes = {
  changeColour: React.PropTypes.func.isRequired
};
