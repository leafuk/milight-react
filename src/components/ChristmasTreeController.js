import React from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

class ChristmasTreeController extends React.Component {
  render () {
    return (
      <div className="page">
        <AppBar title="Christmas Tree" hasBackButton={true}/>
        <OnOffPanels lightType="xmastree" />
      </div>

    )
  }
}

export default ChristmasTreeController
