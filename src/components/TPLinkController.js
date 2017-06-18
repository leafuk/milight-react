import React from 'react'

import AppBar from './AppBar';
import OnOffPanels from './OnOffPanelContainer';

import HomeApi from '../modules/homeApi';

class TPLinkController extends React.Component {
  render () {
    return (
      <div className="page">
        <AppBar title="Bookcase" hasBackButton={true}/>
        <OnOffPanels lightType="tplink" switchOn={HomeApi.switchTPLinkOn.bind(this)} switchOff={HomeApi.switchTPLinkOff.bind(this)} />
      </div>
    )
  }
}

export default TPLinkController
