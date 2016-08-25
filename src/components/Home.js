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

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 100,
    height: 80,
  },
};

class Home extends React.Component{

  render() {
    return (
      <div className="page">
        <AppBar title="Main Controller" hasBackButton={false}/>

        <OnOffPanels lightType="master" />

        <div style={{marginTop:'10px'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div style={{textAlign:'center'}}>
              <Link to={`/tv/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <TvIcon style={styles.largeIcon} />
                </IconButton>
              </Link>
            </div>
            <div>
              <Link to={`/spot-lamps/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <SpotLampIcon />
                </IconButton>
              </Link>
            </div>
            <div style={{textAlign:'center'}}>
              <Link to={`/floor-lamp/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <FloorLampIcon />
                </IconButton>
              </Link>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <div>
              <Link to={`/bottle-lamp/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <BottleIcon />
                </IconButton>
              </Link>
            </div>
            <div style={{textAlign:'center'}}>
              <Link to={`/presets/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <SettingsIcon />
                </IconButton>
              </Link>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
