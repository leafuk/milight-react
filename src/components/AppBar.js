import React from 'react'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

export default class AppBarBack extends React.Component {
  renderBackButton() {
    if(this.props.hasBackButton){
      return(
        <IconButton onTouchTap={() => this.context.router.goBack()}>
          <FontIcon className="material-icons">arrow_back</FontIcon>
        </IconButton>
      )
    }
  }

  render () {
    return (
      <div>

        <AppBar
          title={this.props.title}
          iconElementLeft={this.renderBackButton()}
          showMenuIconButton={this.props.hasBackButton}
        />
      </div>
    )
  }
}

export default AppBarBack

AppBarBack.contextTypes = {
  router: React.PropTypes.object
};

AppBarBack.defaultProps = {
  hasBackButton: true
};

AppBarBack.propTypes = {
  title: React.PropTypes.string
};
