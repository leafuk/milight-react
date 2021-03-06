import React from 'react'

import OnOffPanels from './OnOffPanels';

class OnOffPanelContainer extends React.Component {
  render () {
    return(
      <OnOffPanels 
        onSwitchOn={this.props.switchOn.bind(this)} 
        onSwitchOff={this.props.switchOff !== undefined ? this.props.switchOff.bind(this) : function(){}} 
        hideSwitchOff={this.props.hideSwitchOff} />
    )
  }
}

export default OnOffPanelContainer;

OnOffPanelContainer.propTypes = {
  switchOn: React.PropTypes.func.isRequired,
  switchOff: React.PropTypes.func,
  hideSwitchOff: React.PropTypes.bool
};
