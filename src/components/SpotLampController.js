import React from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';
import ColorSlider from './ColorSliderContainer';
import BrightnessSlider from './BrightnessSliderContainer';

class SpotLampController extends React.Component {

  render () {
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
      </div>

    )
  }
}

export default SpotLampController
