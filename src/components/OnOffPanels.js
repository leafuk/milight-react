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
      width:'50%',
      backgroundColor:bgColor,
      textAlign: 'center',
      paddingTop: '50px',
      paddingBottom: '50px'
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
    return (
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
        <div style={this.panelStyles('#8BC34A')} onClick={this.onSwitchOn.bind(this)}><Power style={iconStyles} /></div>
        <div style={this.panelStyles('#FF4081')} onClick={this.onSwitchOff.bind(this)}><HighlightOff style={iconStyles} /></div>
      </div>
    )
  }
}

export default OnOffPanels

OnOffPanels.propTypes = {
  onSwitchOn: React.PropTypes.func.isRequired,
  onSwitchOff: React.PropTypes.func.isRequired
};
