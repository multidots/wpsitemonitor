import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import TableRow from '@material-ui/core/TableRow';
import SiteMapReport from './SiteMapReport';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles( theme => ({
  spacing: {
    marginBottom: theme.spacing( 3 ),
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  table: {
    width: 1100,
    marginLeft: 20
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
    overflowX: 'auto',
  },
  toolbarLink: {
    padding: theme.spacing( 1 ),
    flexShrink: 0,
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[ 800 ],
    color: theme.palette.common.white,
    marginBottom: theme.spacing( 4 ),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing( 3 ),
    [ theme.breakpoints.up( 'md' ) ]: {
      padding: theme.spacing( 6 ),
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing( 3 ),
  },
  report_link: {
    float: 'right',
    margin: '10px 0px'
  },
  status_icon: {
    float: 'right',
    margin: '10px 0px'
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing( 3, 0 ),
  },
  sidebarAboutBox: {
    padding: theme.spacing( 2 ),
    backgroundColor: theme.palette.grey[ 200 ],
  },
  sidebarSection: {
    marginTop: theme.spacing( 3 ),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing( 8 ),
    padding: theme.spacing( 6, 0 ),
  },
  grid_item: {
    marginTop: '10px'
  },
  status_switch: {
    marginLeft: '10px'
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  avatar: {
    margin: theme.spacing( 1 ),
    backgroundColor: '#3F51B6',
    float: 'right',
    cursor: "pointer"
  },
  nested: {
    paddingLeft: theme.spacing( 4 ),
  },
}) );

const IOSSwitch = withStyles( theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing( 1 ),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[ 400 ]}`,
    backgroundColor: theme.palette.grey[ 50 ],
    opacity: 1,
    transition: theme.transitions.create( ['background-color', 'border'] ),
  },
  checked: {},
  focusVisible: {},
}) )( ( { classes, ...props } ) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
} );

class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      fullReportData: [],
      projectData: [],
      sitemapData: [],
      sitemapErrorMsg: 'Loading...',
      edit_data: false,
      project_id: this.props.data.match.params.id,
      update_data: [],
      error: {
        project_name: false,
        domain_url: false,
      }
    };
    this.ProjectFeaturesBox = this.ProjectFeaturesBox.bind( this );
    this.editProjectData = this.editProjectData.bind( this );
  }

  componentDidMount( props ) {
    this.getData();
  }

  getData(){
    let domain_id = this.state.project_id;
    let type = this.props.data.match.params.status;
    const token = localStorage.getItem( 'token' );
    fetch( `/wp-json/md-site-monitor/project_report?project_id=${domain_id}&type=all`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
      .then( response => {
        if ( 401 === parseInt( response.status ) ) {
          localStorage.removeItem( 'token' );
          window.location.href = '/sign-in';
        }
        return response.json();
      } )
      .then( data => {
        if ( typeof data === 'undefined' || null === data || Object.keys( data ).length === 0 ) {
          this.setState( {
            fullReportData: [],
            sitemapData: [],
            sitemapErrorMsg: 'Sitemap reports not generated yet.',
          } );
        } else {
          this.setState( {
            fullReportData: data,
            projectData: data.project_details,
            sitemapData: data.sitemap,
            sitemapErrorMsg: (Object.keys( data.sitemap ).length === 0) ? 'Sitemap reports not generated yet.' : ''
          } );
        }
      } );
  }

  xhrRequestStatus = ( project_type, project_stats ) => {
    const token = localStorage.getItem( 'token' );
    let domain_id = this.state.project_id;
    return fetch( `/wp-json/md-site-monitor/projects_status`, {
      method: 'POST',
      body: JSON.stringify( { projectID: domain_id, projectStatus: project_stats , project_type: project_type} ),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      return res.json();
    } ).then( function( response ) {
    } ).catch( err => {
      this.setState( { isLoading: false } );
    } );
  };

  xhrRequestUpdateProject = () => {
    const token = localStorage.getItem( 'token' );
    let domain_id = this.state.project_id;
    return fetch( `/wp-json/md-site-monitor/update_project`, {
      method: 'POST',
      body: JSON.stringify( this.state.projectData),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      return res.json();
    } ).then( function( response ) {
    } ).catch( err => {
      this.setState( { isLoading: false } );
    } );
  };

  handleChange( event ) {
    let project_type = event.target.value;
    let project_stats = event.target.checked;
    this.xhrRequestStatus( project_type, project_stats ).then( res => {
      this.getData();
    } );
  }

  handleUpdate( event ) {

    let key = event.target.name;
    let value = event.target.value;

    this.setState((prevState, props , ) => ({
      projectData: {
        ...prevState.projectData,
        [key] : value,
      },

    }));
  }

  editProjectData(){


    let project_name = this.state.projectData.project_name;
    let domain_url = this.state.projectData.domain_url;

    if("" === project_name){
      this.setState( {
        error: {
          project_name: true
        }
      } );
      return false;
    } else if("" === domain_url){
      this.setState( {
        error: {
          domain_url: true
        }
      } );
      return false;
    }


    if(true === this.state.edit_data){
      this.xhrRequestUpdateProject().then( res => {
        //this.getData();
      } );
    }

    let value = this.state.edit_data ? false : true;
    this.setState( { edit_data: value } );
  }

  cancelProjectData(){
    this.setState( { edit_data: false } );
    this.getData();
  }

  ProjectFeaturesBox( props ) {

    let input_type = this.state.error.project_name ? "" : "error";

    const classes = useStyles();
    const sitemap_page = '/projects/' + this.state.project_id + '/' + 'sitemap';
    return (
      <Grid container item xs={12} md={12} spacing={3}>

        <Grid container item xs={8} md={8}>
          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" paragraph>
                  Project Details
                  { this.state.edit_data ?
                    <div>
                    <Avatar className={classes.avatar} onClick={this.cancelProjectData.bind(this)}>
                    <CloseIcon/>
                    </Avatar>
                    <Avatar className={classes.avatar} onClick={this.editProjectData.bind(this)}>
                      <SaveIcon/>
                    </Avatar>
                    </div>
                    :

                    <Avatar className={classes.avatar} onClick={this.editProjectData.bind(this)}>
                      <EditIcon/>
                    </Avatar>
                  }

                </Typography>
                <Table className={classes.table} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <b>Project Name</b>
                      </TableCell>
                      <TableCell>
                        { this.state.edit_data ?
                        <TextField
                          variant="outlined"
                          margin="normal"
                          value={this.state.projectData.project_name}
                          id="project_name"
                          name="project_name"
                          onChange={this.handleUpdate.bind( this )}
                        /> : this.state.projectData.project_name
                        }
                      </TableCell>

                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <b>Domain URL</b>
                      </TableCell>
                      <TableCell>
                        { this.state.edit_data ?
                          <TextField
                            variant="outlined"
                            margin="normal"
                            value={this.state.projectData.domain_url}
                            id="domain_url"
                            name="domain_url"
                            onChange={this.handleUpdate.bind( this )}
                          /> : <a target="_blank"
                                  href={this.state.projectData.domain_url}>{this.state.projectData.domain_url}</a>
                        }
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        <b>Sitemap URL</b>
                      </TableCell>
                      <TableCell>
                        { this.state.edit_data ?
                          <TextField
                            variant="outlined"
                            margin="normal"
                            value={this.state.projectData.sitemap_url}
                            id="sitemap_url"
                            name="sitemap_url"
                            onChange={this.handleUpdate.bind( this )}
                          /> : this.state.projectData.sitemap_url ? <a target="_blank"
                                                                        href={this.state.projectData.sitemap_url}>{this.state.projectData.sitemap_url}</a> : '-'
                        }
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>

              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Sitemap History

                    <FormControlLabel className={classes.status_switch}
                      control={
                        <IOSSwitch
                          checked={parseInt(this.state.projectData.sitemap_status)}
                          onChange={this.handleChange.bind( this )}
                          value="sitemap"
                        />
                      }
                    />
                  </Typography>
                  <Typography variant="subtitle1" paragraph>
                    <SiteMapReport reportData={this.state.sitemapData} sitemapMsg={this.state.sitemapErrorMsg}/>
                  </Typography>
                  <Divider/>

                  <Link className={classes.report_link} to={{ pathname: sitemap_page }}>View More</Link>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>

        <Grid container item xs={4} md={4}>
          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Wp-Admin URL
                    <FormControlLabel className={classes.status_switch}
                    control={
                      <IOSSwitch
                        checked={parseInt(this.state.projectData.admin_status)}
                        onChange={this.handleChange.bind( this )}
                        value="admin"
                      />
                    }
                    />
                    {1 === parseInt( this.state.fullReportData.admin_status ) ? <CheckCircleRoundedIcon
                      className={classes.status_icon} style={{ color: '#43a047' }}/> : (
                      <CancelRoundedIcon className={classes.status_icon} style={{ color: '#D3302F' }}/>
                    )}
                  </Typography>
                  <Typography paragraph>
                    {1 === parseInt( this.state.fullReportData.admin_status ) ? 'Custom URL set for the WP Admin.' : (
                      'Default WP Admin URL set for the project.'
                    )}
                  </Typography>
                  <Typography paragraph className="status_text">
                    {this.state.fullReportData.admin_status_text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} className={classes.grid_item}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Robots
                    <FormControlLabel className={classes.status_switch}
                      control={
                        <IOSSwitch
                          checked={parseInt(this.state.projectData.roborts_status)}
                          onChange={this.handleChange.bind( this )}
                          value="roborts"
                        />
                      }
                    />
                    {1 === parseInt( this.state.fullReportData.robots_status ) ? <CheckCircleRoundedIcon
                      className={classes.status_icon} style={{ color: '#43a047' }}/> : (
                      <CancelRoundedIcon className={classes.status_icon} style={{ color: '#D3302F' }}/>)}
                  </Typography>
                  <Typography paragraph>
                    {1 === parseInt( this.state.fullReportData.robots_status ) ? 'We have found the robots.txt file on the root.' : (
                      'We can\'t found the robots.txt file on the root.'
                    )}
                  </Typography>
                  <Typography paragraph className="status_text">
                    {this.state.fullReportData.robots_status_text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} className={classes.grid_item}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    SSL
                    <FormControlLabel className={classes.status_switch}
                      control={
                        <IOSSwitch
                          checked={parseInt(this.state.projectData.https_status)}
                          onChange={this.handleChange.bind( this )}
                          value="https"
                        />
                      }
                    />
                    {1 === parseInt( this.state.fullReportData.ssl_status ) ? <CheckCircleRoundedIcon
                      className={classes.status_icon} style={{ color: '#43a047' }}/> : (
                      <CancelRoundedIcon className={classes.status_icon} style={{ color: '#D3302F' }}/>)}
                  </Typography>
                  <Typography paragraph>
                    {1 === parseInt( this.state.fullReportData.ssl_status ) ? 'Voila! site have a secure connection.' : (
                      'Sorry, We could not found any secure connection for this project.'
                    )}
                  </Typography>
                  <Typography paragraph className="status_text">
                    {this.state.fullReportData.ssl_status_text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} className={classes.grid_item}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Captcha
                    <FormControlLabel className={classes.status_switch}
                      control={
                        <IOSSwitch
                          checked={parseInt(this.state.projectData.captcha_status)}
                          onChange={this.handleChange.bind( this )}
                          value="captcha"
                        />
                      }
                    />
                    {1 === parseInt( this.state.fullReportData.captcha_status ) ? <CheckCircleRoundedIcon
                      className={classes.status_icon} style={{ color: '#43a047' }}/> : (
                      <CancelRoundedIcon className={classes.status_icon} style={{ color: '#D3302F' }}/>)}
                  </Typography>
                  <Typography paragraph>
                    {1 === parseInt( this.state.fullReportData.captcha_status ) ? 'We have found captcha is successfully implemented on your project.' : (
                      'Sorry! We could not found any captcha on your project.'
                    )}
                  </Typography>
                  <Typography paragraph className="status_text">
                    {this.state.fullReportData.captcha_status_text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Container maxWidth="xl">
        <this.ProjectFeaturesBox/>
      </Container>
    );
  }
}

export default ProjectDetailViews;
