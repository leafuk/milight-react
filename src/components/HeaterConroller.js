import React from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

import HomeApi from '../modules/homeApi';

class HeaterController extends React.Component {
  render () {
    return (
      <div className="page">
        <AppBar title="Heater" hasBackButton={true}/>
        <OnOffPanels switchOn={HomeApi.heaterOn.bind(this)} switchOff={HomeApi.heaterOff.bind(this)} />
      </div>
    )
  }
}

export default HeaterController
