import React from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import HardwareTv from 'material-ui/svg-icons/hardware/tv';
import ActionLightbulb from 'material-ui/svg-icons/action/lightbulb-outline';
import NotificationPower from 'material-ui/svg-icons/notification/power';
import AcUnitIcon from 'material-ui/svg-icons/places/ac-unit';

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

import ColorSlider from './ColorSliderContainer';

import IconStyles from './styles/IconStyles'

import HomeApi from '../modules/homeApi';

class Home extends React.Component{

  render() {
    return (
      <div className="page">
        <AppBar title="Main Controller" hasBackButton={false}/>

        <OnOffPanels lightType="master" switchOn={HomeApi.switchOnEverything.bind(this)} switchOff={HomeApi.switchOffEverything.bind(this)} />

        <div style={{marginTop:'50px', marginBottom:'50px', marginLeft: 'auto', marginRight: 'auto', width: '80%'}}>
          <ColorSlider changeColour={HomeApi.changeAllColours.bind(this)} />
        </div>

        <div style={{marginTop:'10px'}}>
          <div style={IconStyles.row}>
            <div style={{textAlign:'center'}}>
              <Link to={`/tv/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <HardwareTv style={IconStyles.largeIcon} />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to={`/spot-lamps/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <ActionLightbulb />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to={`/tp-link/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <NotificationPower />
                </IconButton>
              </Link>
            </div>
          </div>

          <div style={IconStyles.row}>
            <div>
              
            </div>
            <div style={{textAlign:'center'}}>
              <Link to={`/heater/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <AcUnitIcon style={IconStyles.largeIcon} />
                </IconButton>
              </Link>
            </div>
            <div>
              
            </div>
          </div>

          {/*<div style={IconStyles.row}>
            <div>
              <Link to={`/bottle-lamp/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <BottleIcon />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to={`/xmas-tree/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <EditorFormatAlignJustify />
                </IconButton>
              </Link>
            </div>
            <div style={{textAlign:'center'}}>
              <Link to={`/presets/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <SettingsIcon />
                </IconButton>
              </Link>
            </div>
          </div>*/}
        </div>
      </div>
    )
  }
}

export default Home
