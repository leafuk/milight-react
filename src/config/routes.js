import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Hello from '../components/Home';
import TvController from '../components/TvController'
import SpotLampController from '../components/SpotLampController'
import Presets from '../components/Presets'
import TPLinkController from '../components/TPLinkController'
import HeaterConroller from '../components/HeaterConroller';

export default (

		<Route path="/" component={App}>
			<IndexRoute component={Hello}/>
			<Route path="tv" component={TvController} />
			<Route path="spot-lamps" component={SpotLampController} />
			<Route path="tp-link" component={TPLinkController} />
			<Route path="presets" component={Presets} />
			<Route path="heater" component={HeaterConroller} />
		</Route>
);
