import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import * as Constants from '../components/Constants';
import CustomizedSnackbars from './Message';
import { Typography } from '@material-ui/core';

const defaultToolbarStyles = {
  iconButton: {},
};

const useStyles = makeStyles( theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing( 2 ),
    flex: 1,
  },
}) );

const Transition = React.forwardRef( function Transition( props, ref ) {
  return <Slide direction="up" ref={ref} {...props} />;
} );

function CustomToolbar() {

  const classes = useStyles();
  const [open, setOpen] = React.useState( false );

  const [state, setState] = React.useState( {
    sm_project_name: '',
    sm_domain_url: '',
    sm_sitemap_url: '',
    sm_sitemap_option: true,
    sm_robots_option: true,
    sm_admin_option: true,
    form_error_msg: ""
  } );

  const handleSwitchChange = name => event => {
    setState( { ...state, [ name ]: event.target.checked } );
  };

  const handleTextChange = event => {
    setState( { ...state, [ event.target.name ]: event.target.value } );
  };

  function handleClickOpen() {
    setOpen( true );
  }

  function handleClose() {
    setOpen( false );
  }

  function handleLocationSubmit( event ) {
    event.preventDefault();

    if("" === state.sm_project_name){
      setState( {...state, ['form_error_msg']: "Please Enter Project Name"} );
      return false;
    } else if("" === state.sm_domain_url){
      setState( {...state, ['form_error_msg']: "Please Enter Domain URL"} );
      return false;
    } else if("" !== state.sm_domain_url){
      let isValidUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      if (!isValidUrl.test(state.sm_domain_url)) {
        setState( {...state, ['form_error_msg']: "Please Enter valid Domain URL"} );
        return false;
      }
      if("" !== state.sm_sitemap_url){
        if (!isValidUrl.test(state.sm_sitemap_url)) {
          setState( {...state, ['form_error_msg']: "Please Enter valid Sitemap URL"} );
          return false;
        }
      }
    }

    const token = localStorage.getItem( 'token' );
    const site_url = Constants.SITE_URL;
    fetch( `${site_url}/wp-json/md-site-monitor/add_project`, {
      method: 'POST',
      body: JSON.stringify( state ),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      return res.json();
    } ).then( function( response ) {
      handleClose();
      //window.location.href = '/projects';
    } ).catch( err => {

    } );
  }

  return (

      <React.Fragment>
        <Tooltip title={'Add Project'} className="add_btn">
          <IconButton onClick={handleClickOpen} >
            <AddIcon/>
          </IconButton>
        </Tooltip>

      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <form onSubmit={handleLocationSubmit}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon/>
              </IconButton>
              <Typography>
                Add Project
              </Typography>
            </Toolbar>
          </AppBar>

              <Container maxWidth="sm">


                {
                  state.form_error_msg ?

                    <CustomizedSnackbars
                      type="error"
                      message={state.form_error_msg}
                    />

                    :
                    ''
                }

                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  id="sm_project_name"
                  label="Project Name *"
                  name="sm_project_name"
                  onChange={handleTextChange}
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="sm_domain_url"
                  label="Domain URL *"
                  type="text"
                  onChange={handleTextChange}
                  id="sm_domain_url"
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="sm_sitemap_url"
                  label="Sitemap URL"
                  type="text"
                  onChange={handleTextChange}
                  id="sm_domain_url"
                />

                <FormControlLabel
                  label="Sitemap"
                  labelPlacement="end"
                  control={
                    <Checkbox
                      checked={state.sm_sitemap_option}
                      onChange={handleSwitchChange( 'sm_sitemap_option' )}
                      value="checkedB"
                      color="primary"
                    />
                  }
                />
                <FormControlLabel
                  label="Robots"
                  labelPlacement="end"
                  control={
                    <Checkbox
                      checked={state.sm_robots_option}
                      onChange={handleSwitchChange( 'sm_robots_option' )}
                      value="checkedB"
                      color="primary"
                    />
                  }
                />

                <FormControlLabel
                  label="Admin"
                  labelPlacement="end"
                  control={
                    <Checkbox
                      checked={state.sm_admin_option}
                      onChange={handleSwitchChange( 'sm_admin_option' )}
                      value="on"
                      color="primary"
                    />
                  }
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Add Project
                </Button>
              </Container>

        </form>
      </Dialog>
      </React.Fragment>
  );

}

export default withStyles( defaultToolbarStyles, { name: 'CustomToolbar' } )( CustomToolbar );
