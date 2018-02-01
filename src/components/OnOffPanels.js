import React from 'react'
import Power from 'material-ui/svg-icons/action/power-settings-new';
import HighlightOff from 'material-ui/svg-icons/action/highlight-off';

const iconStyles = {
  color: '#FFF',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 60,
  height: 60,
}

class OnOffPanels extends React.Component {
  panelStyles(bgColor) {
    return {
      width:'40%',
      backgroundColor:bgColor,
      textAlign: 'center',
      paddingTop: '20px',
      paddingBottom: '20px',
      borderRadius: '100px',
      marginTop: '20px'
    }
  }

  lightBulb() {
      return (
        <HighlightOff style={iconStyles} />
    )
  }

  onSwitchOn() {
    this.props.onSwitchOn();
  }

  onSwitchOff() {
    this.props.onSwitchOff();
  }

  render() {
    let powerOff = null;
    if(!this.props.hideSwitchOff) {
      powerOff = <div style={this.panelStyles('#FB3353')} onClick={this.onSwitchOff.bind(this)}><HighlightOff style={iconStyles} /></div>;
    }
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div style={this.panelStyles('#4B53FF')} onClick={this.onSwitchOn.bind(this)}><Power style={iconStyles} /></div>
        {powerOff}
      </div>
    )
  }
}

export default OnOffPanels

OnOffPanels.propTypes = {
  onSwitchOn: React.PropTypes.func.isRequired,
  onSwitchOff: React.PropTypes.func.isRequired,
  hideSwitchOff: React.PropTypes.bool
};
