import React from 'react'
import AppBar from './AppBar'

import OnOffPanels from './OnOffPanelContainer';

import HomeApi from '../modules/homeApi';

class TvController extends React.Component {

  render () {
    return (
      <div className="page">
        <AppBar title="TV" hasBackButton={true}/>
        <OnOffPanels lightType="television" switchOn={HomeApi.switchTVOn.bind(this)} switchOff={HomeApi.switchTVOff.bind(this)} />
    </div>
    )
  }
}

export default TvController
