import React from 'react'
import IconButton from 'material-ui/IconButton'
import MovieIcon from '../icons/MovieIcon'

import IconStyles from '../styles/IconStyles'

class MovieMode extends React.Component {
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
        <MovieIcon />
      </IconButton>
    )
  }
}

export default MovieMode;

MovieMode.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
