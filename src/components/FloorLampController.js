import React from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

class SpotLampController extends React.Component {

  render () {
    return (
      <div className="page">
        <AppBar title="Floor Lamp" hasBackButton={true}/>
        <OnOffPanels lightType="floorlamp"/>
      </div>

    )
  }
}

export default SpotLampController
