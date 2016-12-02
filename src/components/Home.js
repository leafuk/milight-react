import React from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

import TvIcon from './icons/TvIcon'
import SpotLampIcon from './icons/SpotLampIcon'
import FloorLampIcon from './icons/FloorLampIcon'
import BottleIcon from './icons/BottleIcon'
import SettingsIcon from './icons/SettingsIcon'
import ChristmasTreeIcon from './icons/ChristmasTreeIcon'

import IconStyles from './styles/IconStyles'

class Home extends React.Component{

  render() {
    return (
      <div className="page">
        <AppBar title="Main Controller" hasBackButton={false}/>

        <OnOffPanels lightType="master" />

        <div style={{marginTop:'10px'}}>
          <div style={IconStyles.row}>
            <div style={{textAlign:'center'}}>
              <Link to={`/tv/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <TvIcon style={IconStyles.largeIcon} />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to={`/spot-lamps/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <SpotLampIcon />
                </IconButton>
              </Link>
            </div>
            <div style={{textAlign:'center'}}>
              <Link to={`/floor-lamp/`} >
                <IconButton
                  iconStyle={IconStyles.largeIcon}
                  style={IconStyles.large}
                  touch={true} >
                  <FloorLampIcon />
                </IconButton>
              </Link>
            </div>
          </div>

          <div style={IconStyles.row}>
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
                  <ChristmasTreeIcon />
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
          </div>
        </div>
      </div>
    )
  }
}

export default Home
