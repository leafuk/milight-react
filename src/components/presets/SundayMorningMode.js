import React from 'react'
import IconButton from 'material-ui/IconButton'
import HouseIcon from '../icons/HouseIcon'

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 100,
    height: 80,
  },
};

class SundayMorningMode extends React.Component {
  handleClick() {
    this.props.onClick();
  }

  render () {
    return (
      <IconButton
        iconStyle={styles.largeIcon}
        style={styles.large}
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
