import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import ProjectsDetail from './components/ProjectDetail';
import ProjectDetailStatus from './components/ProjectStatus';
import Pages from './components/Pages';


const routing = (
	<Router>
		<div>
			<Route exact path="/" component={Pages} />
			<Route exact path="/projects/:id" component={ProjectsDetail} />
			<Route exact path="/projects/:id/:status" component={ProjectDetailStatus} />
      <Route exact path="/:slug" component={Pages} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
