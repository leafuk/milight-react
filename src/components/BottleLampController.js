import React, { PropTypes } from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';
import ColorSlider from './ColorSlider';
import BrightnessSlider from './BrightnessSlider';

class SpotLampController extends React.Component {
  render () {
    return (
      <div className="page">
        <AppBar title="Bottle Lamp" hasBackButton={true}/>
        <OnOffPanels lightType="bottlelamp" />
      </div>

    )
  }
}

export default SpotLampController
