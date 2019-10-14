import React , {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import logo from './logo.png';

class HeaderViews extends Component {
    constructor(props) {
        super(props);
        this.Header = this.Header.bind( this );
        this.handleLogout = this.handleLogout.bind( this );
    }

    state = {
        redirect: false
    }

    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }

    handleLogout(){
       localStorage.removeItem('token');
        window.location.reload();
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return  <Redirect to={{pathname: '/sign-in'}} />
        }
    }

    Header(){
        const useStyles = makeStyles(theme => ({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
        }));
        const classes = useStyles();
        const isAlreadyAuthenticated = localStorage.getItem('token');
        return (
            <div className={classes.root}>
                <AppBar position="static" style={{ marginBottom: 20 }}>
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                           <Link to={{'pathname': "/"}}>
                            <img src={logo} alt="logo" width="35px" height="35px"/></Link>
                        </IconButton>

                        <Typography variant="h6" className={classes.title}>
                            Site Monitor
                        </Typography>
                      <Link className={'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'} to={{pathname: '/'}}>Home</Link>
                        {isAlreadyAuthenticated ?
                            <div>
                            <Link className={'MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-colorInherit'} to={{pathname: '/projects'}}>Projects</Link>
                            <Button onClick={this.handleLogout.bind(this)} color="inherit">Logout</Button>
                            </div>
                            : (
                            <div>
                            {this.renderRedirect()}
                            <Button onClick={this.setRedirect} color="inherit">Login</Button>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </div>
        );
    }

    render() {
        return (
            <this.Header/>
        );
    }
}

export default HeaderViews;
