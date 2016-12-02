import React from 'react'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';
import ColorSlider from './ColorSliderContainer';
import BrightnessSlider from './BrightnessSliderContainer';

class SpotLampController extends React.Component {

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleColorSelection = (e) => {
    var c = document.getElementById("color");
    alert(c.value);
  };

  componentDidMount = () => {
    var c = document.getElementById("color");
    c.addEventListener("input", this.handleColorSelection, false);
  };

  render () {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div className="page">
        <AppBar title="Spot Lamps" hasBackButton={true}/>
        <OnOffPanels lightType="spotlamp"/>
        <div style={{marginTop:'50px'}}>
          <div style={{display: 'flex', height: 124, flexDirection: 'row', justifyContent: 'space-around'}}>
            <ColorSlider lightType="spotlamp" />
            <BrightnessSlider lightType="spotlamp" />
          </div>
        </div>

        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <input id="color" type="color" value="#FFFFFF" />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <ColorSlider lightType="spotlamp" />
        </Dialog>
      </div>

    )
  }
}

export default SpotLampController
