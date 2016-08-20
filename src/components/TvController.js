import React, { PropTypes } from 'react'
import AppBar from './AppBar'

import OnOffPanels from './OnOffPanelContainer';
import ColorSlider from './ColorSliderContainer';
import BrightnessSlider from './BrightnessSliderContainer';

class TvController extends React.Component {

  render () {
    return (
      <div>
        <AppBar title="TV LEDs" hasBackButton={true}/>
        <OnOffPanels lightType="tv" />
          <div style={{marginTop:'50px'}}>
            <div style={{display: 'flex', height: 124, flexDirection: 'row', justifyContent: 'space-around'}}>
              <ColorSlider lightType="tv" />
            </div>
          </div>
      </div>
    )
  }
}

export default TvController
