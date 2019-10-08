import React from 'react';
import { Redirect } from 'react-router-dom';
import LoginViews from '../views/Login';
import Layout from './Layout';

class Login extends React.Component {

	render() {
		const isAlreadyAuthenticated = localStorage.getItem('token');
		return (
      <Layout>
        <div>
          {isAlreadyAuthenticated ? <Redirect to={{ pathname: '/project' }}/> : (
            <LoginViews />
          )}
        </div>
      </Layout>
		);
	}
}

export default Login;
