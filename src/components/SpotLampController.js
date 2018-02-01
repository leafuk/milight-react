import React from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';
import ColorSlider from './ColorSliderContainer';
import BrightnessSlider from './BrightnessSliderContainer';

import HomeApi from '../modules/homeApi';

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   }
// };

class SpotLampController extends React.Component {

  render () {
    return (
      <div className="page">
        <AppBar title="Lights" hasBackButton={true}/>

        <Tabs>
          <Tab label="Everything" >
            <div>
              <OnOffPanels lightType="all-lights" switchOn={HomeApi.switchAllLightsOn.bind(this)} switchOff={HomeApi.switchAllLightsOff.bind(this)} />
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <ColorSlider changeColour={HomeApi.changeAllColours.bind(this)}/>
              </div>
              
            </div>
          </Tab>
          <Tab label="Main Lights" >
            <div>
              <OnOffPanels lightType="spotlamp" switchOn={HomeApi.switchBulbsLightsOn.bind(this)} switchOff={HomeApi.switchBulbsLightsOff.bind(this)}/>
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <ColorSlider changeColour={HomeApi.changeBulbsColour.bind(this)} />
              </div>
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <BrightnessSlider lightType="spotlamp" />
              </div>
              
            </div>
          </Tab>
          <Tab label="TV" >
            <div>
              <OnOffPanels lightType="tv" switchOn={HomeApi.switchTVLightsOn.bind(this)} switchOff={HomeApi.switchTVLightsOff.bind(this)} />
              
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <ColorSlider changeColour={HomeApi.changeTVColour.bind(this)} />
              </div>
            </div>
          </Tab>
        </Tabs>

      </div>

    )
  }
}

export default SpotLampController
