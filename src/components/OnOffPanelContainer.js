import React, { PropTypes } from 'react'
import axios from 'axios';

import OnOffPanels from './OnOffPanels';

const baseUrl = "http://192.168.1.84:3000"

class OnOffPanelContainer extends React.Component {
  constructor(props) {
    super(props);
   }

  handleSwitchOn(){
    var endPoint = '';
    switch(this.props.lightType){
      case 'master':
        endPoint = '/master/on';
        break;
      case 'spotlamp':
        endPoint = '/milight/on';
        break;
      case 'floorlamp':
        endPoint = '/on/2';
        break;
      case 'bottlelamp':
        endPoint = '/on/1';
        break;
      case 'tv':
        endPoint = '/tv/on';
        break;
    }

    axios.get(baseUrl + endPoint)
      .then(function(response) {
        // Do nothing
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  handleSwitchOff(){
    var endPoint = '';
    switch(this.props.lightType){
      case 'master':
        endPoint = '/master/off';
        break;
      case 'spotlamp':
        endPoint = '/milight/off';
        break;
      case 'floorlamp':
        endPoint = '/off/2';
        break;
      case 'bottlelamp':
        endPoint = '/off/1';
        break;
      case 'tv':
        endPoint = '/tv/off';
        break;
    }

    axios.get(baseUrl + endPoint)
      .then(function(response) {
        // Do nothing
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render () {
    return(
      <OnOffPanels onSwitchOn={this.handleSwitchOn.bind(this)} onSwitchOff={this.handleSwitchOff.bind(this)}/>
    )
  }
}

export default OnOffPanelContainer;

OnOffPanelContainer.propTypes = {
  lightType: React.PropTypes.oneOf(['master','spotlamp','floorlamp','bottlelamp','tv']).isRequired
};
