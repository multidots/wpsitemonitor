import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import Login from './components/Login';
import Projects from './components/Projects';
import ProjectsDetail from './components/ProjectDetail';
import ProjectDetailStatus from './components/ProjectStatus';
import Authentication from './components/Authentication';


const routing = (
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/sign-in" component={Login} />
			<Route exact path="/project" component={Projects} />
			<Route exact path="/project/:id" component={ProjectsDetail} />
			<Route exact path="/project/:id/:status" component={ProjectDetailStatus} />
		</div>
	</Router>
)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
