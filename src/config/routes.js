import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../components/App';
import Hello from '../components/Home';
import TvController from '../components/TvController'
import SpotLampController from '../components/SpotLampController'
import FloorLampController from '../components/FloorLampController'
import BottleLampController from '../components/BottleLampController'
import Presets from '../components/Presets'
import ChristmasTreeController from '../components/ChristmasTreeController'

export default (

		<Route path="/" component={App}>
			<IndexRoute component={Hello}/>
			<Route path="tv" component={TvController} />
			<Route path="spot-lamps" component={SpotLampController} />
			<Route path="floor-lamp" component={FloorLampController} />
			<Route path="bottle-lamp" component={BottleLampController} />
			<Route path="xmas-tree" component={ChristmasTreeController} />
			<Route path="presets" component={Presets} />
		</Route>
);
