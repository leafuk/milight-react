import React from 'react'
import IconButton from 'material-ui/IconButton'
import MovieIcon from '../icons/MovieIcon'

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

class MovieMode extends React.Component {
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
        <MovieIcon />
      </IconButton>
    )
  }
}

export default MovieMode;

MovieMode.propTypes = {
  onClick: React.PropTypes.func.isRequired
};
