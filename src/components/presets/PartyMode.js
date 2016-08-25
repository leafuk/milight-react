import React from 'react'
import IconButton from 'material-ui/IconButton'
import CocktailIcon from '../icons/CocktailIcon'

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

class PartyMode extends React.Component {
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
        <CocktailIcon />
      </IconButton>
    )
  }
}

export default PartyMode;

PartyMode.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
