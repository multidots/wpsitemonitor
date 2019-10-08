import React from 'react';
import { Redirect } from 'react-router-dom';
import * as Constants from './Constants';

class Authentication extends React.Component{

	constructor( props ) {
		super( props );
		this.state = {
			isAuthenticate: this.isAuthentication(Constants.SITE_URL)
		};
		this.isAuthentication = this.isAuthentication.bind( this );
	}

	isAuthentication(site_url) {
		const token = localStorage.getItem('token');

		if(null === token){
			this.setState({isAuthenticate:false});
			return;
		}
		return fetch( `/wp-json/jwt-auth/v1/token/validate`,{
			method: 'post',
			headers: {
				Authorization: 'Bearer ' + token
			}
		} ).then( res => {
			return res.json();
		} ).then(function(data) {
			if(200 === data.data.status){
				this.setState({isAuthenticate:true});
				return Promise.all([data.status, data.code]);
			} else {
				localStorage.removeItem('token');
				this.setState({isAuthenticate:false});
			}
		}).catch( err => {
			this.setState( {
				error: {
					error_message: Constants.DEFAULT_ERROR
				}
			} );
		} );
	}

	render() {
		const isAlreadyAuthenticated = this.state.isAuthenticate;
		return(
			<div>
				{isAlreadyAuthenticated ? <Redirect to={{ pathname: this.props.location.pathname }}/> : (
					<Redirect to={{ pathname: '/sign-in' }}/>
				)}
			</div>
		);
	}
}

export default Authentication;
