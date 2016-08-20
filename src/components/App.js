import React from 'react';
import ReactDOM from 'react-dom';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import ThemeIndigo from './themes/ThemeIndigo';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Tabs, Tab} from 'material-ui/Tabs';

import { RouteTransition, presets } from 'react-router-transition';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

var App = React.createClass({
  propTypes: {
    route: React.PropTypes.object,
    location: React.PropTypes.object
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  render: function(){

    return (
      <MuiThemeProvider muiTheme={getMuiTheme(ThemeIndigo)}>
        <div>
          {/* <AppBar onRefreshClick={this.refreshFunds} /> */}

          <RouteTransition
            pathname={this.props.location.pathname}
            {...presets.pop}
            style={{position: 'relative'}}
          >
            {this.props.children}
          </RouteTransition>
        </div>
      </MuiThemeProvider>
    );
  }
});


export default App;
