import React from 'react'
import IconButton from 'material-ui/IconButton'
import HouseIcon from '../icons/HouseIcon'

import IconStyles from '../styles/IconStyles'

class SundayMorningMode extends React.Component {
  handleClick() {
    this.props.onClick();
  }

  render () {
    return (
      <IconButton
        iconStyle={IconStyles.largeIcon}
        style={IconStyles.large}
        touch={true}
        onTouchTap={this.handleClick.bind(this)} >
        <HouseIcon />
      </IconButton>
    )
  }
}

export default SundayMorningMode;

SundayMorningMode.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
