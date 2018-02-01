import React from 'react'
import AppBar from './AppBar'
import {Tabs, Tab} from 'material-ui/Tabs';
import RaisedButton from 'material-ui/RaisedButton';
import AvVolumeOff from 'material-ui/svg-icons/av/volume-off';

import OnOffPanels from './OnOffPanelContainer';

import HomeApi from '../modules/homeApi';

const style = {
  margin: 2
};

const iconButtonStyles = {
  large: {
    width: 60,
    height: 60,
    padding: 0,
  }
}

class TvController extends React.Component {

  render () {
    return (
      <div className="page">
        <AppBar title="TV" hasBackButton={true}/>

        <Tabs>
          <Tab label="All" >
            <div>
              <OnOffPanels lightType="television" switchOn={HomeApi.switchTVOn.bind(this)} switchOff={HomeApi.switchTVOff.bind(this)} />
              
            </div>
          </Tab>
          <Tab label="Samsung" >
            <div>
              <OnOffPanels lightType="samsung" switchOn={HomeApi.tvOn.bind(this)} switchOff={HomeApi.tvOff.bind(this)}/>
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <RaisedButton label="Freesat" secondary={true} style={style} fullWidth={true} onTouchTap={function(event) { HomeApi.tvFreesat()}} />
                <RaisedButton label="Chromecast" secondary={true} style={style} fullWidth={true} onTouchTap={function(event) { HomeApi.tvChromecast()}} />
                <RaisedButton label="RetroPi" secondary={true} style={style} fullWidth={true} onTouchTap={function(event) { HomeApi.tvRetroPi()}} />
                <RaisedButton label="PS4" secondary={true} style={style} fullWidth={true} onTouchTap={function(event) { HomeApi.tvPlaystation()}} />
                {/*<ColorSlider changeColour={HomeApi.changeBulbsColour.bind(this)} />*/}
              </div>
              {/*<div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
                <BrightnessSlider lightType="spotlamp" />
              </div>*/}
              
            </div>
          </Tab>
          <Tab label="Freesat" >
            <div>
              <OnOffPanels switchOn={HomeApi.freesatPowerToggle.bind(this)} hideSwitchOff={true} />
              
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign:'center'}}>
                <div>
                  <RaisedButton label="1" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('1')}} />
                  <RaisedButton label="2" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('2')}} />
                  <RaisedButton label="3" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('3')}} />
                </div>
                <div>
                  <RaisedButton label="4" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('4')}} />
                  <RaisedButton label="5" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('5')}} />
                  <RaisedButton label="6" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('6')}} />
                </div>
                <div>
                  <RaisedButton label="7" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('7')}} />
                  <RaisedButton label="8" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('8')}} />
                  <RaisedButton label="9" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('9')}} />
                </div>
                <div>
                  <RaisedButton label="0" primary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('0')}} />
                </div>
              </div>

              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign:'center'}}>
                <RaisedButton label="Back" secondary={true} style={style} onTouchTap={function(event) { HomeApi.freesatInput('Return')}} />                
              </div>
            </div>
          </Tab>
          <Tab label="Sound" >
            <div>
              <OnOffPanels switchOn={HomeApi.speakersOn.bind(this)} switchOff={HomeApi.speakersOff.bind(this)} />
              
              <div style={{marginTop:'50px', marginLeft: 'auto', marginRight: 'auto', width: '100%', textAlign:'center'}}>
                <RaisedButton
                  primary={true}
                  style={iconButtonStyles.large} 
                  onTouchTap={function(event) { HomeApi.speakersMuteToggle()}}
                  icon={<AvVolumeOff />}
                />
                {/*<IconButton iconStyle={iconButtonStyles.largeIcon} style={iconButtonStyles.large} onTouchTap={function(event) { HomeApi.speakersMuteToggle()}} >
                  <AvVolumeOff  />
                </IconButton>              */}
              </div>   
            </div>
          </Tab>
        </Tabs>

        {/*<OnOffPanels lightType="television" switchOn={HomeApi.switchTVOn.bind(this)} switchOff={HomeApi.switchTVOff.bind(this)} />*/}
    </div>
    )
  }
}

export default TvController
