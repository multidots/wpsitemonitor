import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import ProjectsDetail from './components/ProjectDetail';
import ProjectDetailStatus from './components/ProjectStatus';
import Pages from './components/Pages';
import Login from './components/Login';

//import './pase.js';
//import './pase.css';

//import './views/style.css';

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={Login} />
			<Route exact path="/projects/:id" component={ProjectsDetail} />
			<Route exact path="/projects/:id/:status" component={ProjectDetailStatus} />
      <Route exact path="/:slug" component={Pages} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
