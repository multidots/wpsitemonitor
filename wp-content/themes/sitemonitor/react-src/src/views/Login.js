import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import * as Constants from '../components/Constants';
import CustomizedSnackbars from './Message';

class LoginViews extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			sm_username: '',
			sm_password: '',
			error: {
				error_message: ''
			},
			isAuthenticate: false
		};
		this.handleSubmit = this.handleSubmit.bind( this );
		this.renderLoginViews = this.renderLoginViews.bind( this );
	}

	handleChange( event ) {
		this.setState( {
			[ event.target.name ]: event.target.value
		} );
	}

	handleSubmit( event ) {
		event.preventDefault();
		let sm_username = this.state.sm_username;
		let sm_password = this.state.sm_password;

    if("" === sm_username){
      this.setState( {
        error: {
          error_message: 'Please Enter Username'
        }
      } );
      return false;
    } else if("" === sm_password){
      this.setState( {
        error: {
          error_message: 'Please Enter Password'
        }
      } );
      return false;
    }

		const loginData = { username: sm_username, password: sm_password, };

		const requestOptions = {
			method: 'POST',
			mode: 'cors',
			body: JSON.stringify( { sm_username, sm_password } ),
		};

		fetch( `/wp-json/md-site-monitor/login`, requestOptions )
			.then( response => response.json() )
			.then( data => {
				if ( 'user_not_found' === data.code ) {
					this.setState( {
						error: {
							error_message: data.message
						}
					} );
				} else if('rest_no_route' === data.code || ( (typeof data.data !== "undefined") && 403 === parseInt(data.data.status) ) ){
          this.setState( {
            error: {
              error_message: data.message
            }
          } );
        } else {
          localStorage.setItem( 'token', data.token );
          window.location.href = '/projects';
				}
			} );

	}

	renderLoginViews(){
		const useStyles = makeStyles(theme => ({
			'@global': {
				body: {
					backgroundColor: theme.palette.common.white,
				},
			},
			paper: {
				marginTop: theme.spacing(8),
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			},
			avatar: {
				margin: theme.spacing(1),
				backgroundColor: '#3F51B6',
			},
			form: {
				width: '100%', // Fix IE 11 issue.
				marginTop: theme.spacing(1),
			},
			submit: {
				margin: theme.spacing(3, 0, 2),
			},
		}));

		const classes = useStyles();


		const error = this.state.error.error_message;
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline/>
				<div className={classes.paper}>
					<Avatar className={classes.avatar}>
						<LockOutlinedIcon/>
					</Avatar>
					<Typography component="h1" variant="h5">
						Login
					</Typography>

					<form className={classes.form}  onSubmit={this.handleSubmit.bind(this)}>

            {error ?
              <CustomizedSnackbars
                type="error"
                message={this.state.error.error_message}
              /> : ''}

						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							id="sm_username"
							label="Username"
							name="sm_username"
							onChange={this.handleChange.bind( this )}
							autoFocus
						/>
						<TextField
							variant="outlined"
							margin="normal"
							fullWidth
							name="sm_password"
							label="Password"
							type="password"
							id="sm_password"
							onChange={this.handleChange.bind( this )}
						/>
						{/*<FormControlLabel
							control={<Checkbox value="remember" color="primary"/>}
							label="Remember me"
						/>*/}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							Sign In
						</Button>
						{/*<Grid container>
							<Grid item xs>
								<Link href="#" variant="body2">
									Forgot password?
								</Link>
							</Grid>
						</Grid>*/}
					</form>
				</div>
			</Container>
		)
	}


	render() {
		return (
			<this.renderLoginViews />
		);
	}
}

export default LoginViews;
