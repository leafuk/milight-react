import React from 'react';
import AppBar from './AppBar';

import MovieModeContainer from './presets/MovieModeContainer'
import SundayMorningModeContainer from './presets/SundayMorningModeContainer'
import PartyModeContainer from './presets/PartyModeContainer'

import IconStyles from './styles/IconStyles'

class Presets extends React.Component {
  render () {
    return(
      <div className="page">
        <AppBar title="Presets" hasBackButton={true}/>
        <div style={IconStyles.row}>
          <div style={{textAlign:'center'}}>
            <MovieModeContainer />
          </div>
          <div style={{textAlign:'center'}}>
            <SundayMorningModeContainer />
          </div>
          <div style={{textAlign:'center'}}>
            <PartyModeContainer />
          </div>
        </div>
      </div>
    )
  }
}

export default Presets;
