import React from 'react'
import IconButton from 'material-ui/IconButton'
import CocktailIcon from '../icons/CocktailIcon'

import IconStyles from '../styles/IconStyles'

class PartyMode extends React.Component {
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
        <CocktailIcon />
      </IconButton>
    )
  }
}

export default PartyMode;

PartyMode.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
