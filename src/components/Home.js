import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import HardwareTv from 'material-ui/svg-icons/hardware/tv';
import EditorHighlight from 'material-ui/svg-icons/editor/highlight';
import Avatar from 'material-ui/Avatar';

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

import { browserHistory } from 'react-router'

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

class Home extends React.Component{

  render() {
    return (
      <div>
        <AppBar title="Main Controller" hasBackButton={false}/>

        <OnOffPanels lightType="master" />

        <div style={{marginTop:'30px'}}>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{textAlign:'center'}}>
              <Link to={`/tv/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <HardwareTv />
                </IconButton>
                <br/>
                TV
              </Link>
            </div>
            <div>
              <Link to={`/spot-lamps/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <EditorHighlight />
                </IconButton>
                <br/>
                Spot Lamps
              </Link>
            </div>
          </div>

          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <div style={{textAlign:'center'}}>
              <Link to={`/floor-lamp/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <Avatar>F</Avatar>
                </IconButton>
                <br/>
                Floor Lamp
              </Link>
            </div>
            <div>
              <Link to={`/bottle-lamp/`} >
                <IconButton
                  iconStyle={styles.largeIcon}
                  style={styles.large}
                  touch={true} >
                  <Avatar>B</Avatar>
                </IconButton>
                <br/>
                Bottle Lamp
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
