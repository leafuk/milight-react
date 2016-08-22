//import 'style/url!file!./../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './index.css';
import './../node_modules/react-color-picker/index.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

let app = document.getElementById('root');
render(<Router history={browserHistory} routes={routes}/>, app);
