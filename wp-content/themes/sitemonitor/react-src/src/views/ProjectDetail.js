import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import EditIcon from '@material-ui/icons/Edit';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Pace from "react-pace-progress";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import Divider from '@material-ui/core/Divider';
import { Link, Redirect } from 'react-router-dom';

import SiteMapReport from './SiteMapReport';
import RobotsHistoryReport from './RobotsReports';

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
      robotsData: [],
      sitemapErrorMsg: 'Loading...',
      edit_data: false,
      project_id: this.props.data.match.params.id,
      update_data: [],
      error: {
        project_name: false,
        domain_url: false,
      },
      isLoading: true,
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
        console.log(response.status);
        if ( 401 === parseInt( response.status ) ) {
          localStorage.removeItem( 'token' );
          window.location.href = '/sign-in';
        }
        if ( 403 === parseInt( response.status ) ) {
          window.location.href = '/projects';
        }
        return response.json();
      } )
      .then( data => {
        if ( typeof data === 'undefined' || null === data || Object.keys( data ).length === 0 ) {
          this.setState( {
            fullReportData: [],
            sitemapData: [],
            sitemapErrorMsg: 'Sitemap reports not generated yet.',
            robotsData: [],
            robotsErrorMsg: 'Robots reports not generated yet.',
            isLoading: false
          } );
        } else {
          this.setState( {
            fullReportData: data,
            projectData: data.project_details,
            sitemapData: data.sitemap,
            sitemapErrorMsg: (Object.keys( data.sitemap ).length === 0) ? 'Sitemap reports not generated yet.' : '',
            robotsData: data.robots_data,
            robotsErrorMsg: (Object.keys( data.robots_data ).length === 0) ? 'Robots reports not generated yet.' : '',
            isLoading: false
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
    this.setState( { isLoading: true } );
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
      this.setState( { isLoading: false } );
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
    let sitemap_url = this.state.projectData.sitemap_url;
    let isValidUrl = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if("" === project_name){
      this.setState( {
        error: {
          project_name: true,
          msg: "Please enter project name"
        }
      } );
      return false;
    }
    if("" === domain_url){
      this.setState( {
        error: {
          domain_url: true,
          msg: "Please enter domain URL"
        }
      } );
      return false;
    }

    if("" !== domain_url){
      if (!isValidUrl.test(domain_url)) {
        this.setState( {
          error: {
            domain_url: true,
            msg: "Please enter valid domain URL"
          }
        } );
        return false;
      }
    }

    if("" !== sitemap_url){
      if (!isValidUrl.test(sitemap_url)) {
        this.setState( {
          error: {
            sitemap_url: true,
            msg: "Please enter valid sitemap URL"
          }
        } );
        return false;
      }
    }


    if(true === this.state.edit_data){
      this.xhrRequestUpdateProject().then( res => {
        //this.getData();
      } );
    }

    let value = this.state.edit_data ? false : true;
    this.setState( {
        edit_data: value,
        error: {
          domain_url: false,
          project_name: false
        }
      } );
  }

  cancelProjectData(){
    this.setState( { edit_data: false } );
    this.getData();
  }

  ProjectFeaturesBox( props ) {

    let input_type = this.state.error.project_name ? "" : "error";

    const classes = useStyles();
    const sitemap_page = '/projects/' + this.state.project_id + '/' + 'sitemap';
    const robots_page = '/projects/' + this.state.project_id + '/' + 'robots';


    const reportData = props.reportData;
    //const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = panel => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };

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

                            this.state.error.project_name ? <TextField error="error"
                                                                       helperText={this.state.error.msg}
                                                                       variant="outlined"
                                                                       margin="normal"
                                                                       value={this.state.projectData.project_name}
                                                                       id="project_name"
                                                                       name="project_name"
                                                                       onChange={this.handleUpdate.bind( this )}
                            />
                          : <TextField
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


                            this.state.error.domain_url ? <TextField error="error"
                                                                       helperText={this.state.error.msg}
                                                                       variant="outlined"
                                                                       margin="normal"
                                                                       value={this.state.projectData.domain_url}
                                                                       id="domain_url"
                                                                       name="domain_url"
                                                                       onChange={this.handleUpdate.bind( this )}
                                />
                                : <TextField
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


                            this.state.error.sitemap_url ? <TextField error="error"
                                                                     helperText={this.state.error.msg}
                                                                     variant="outlined"
                                                                     margin="normal"
                                                                     value={this.state.projectData.sitemap_url}
                                                                     id="sitemap_url"
                                                                     name="sitemap_url"
                                                                     onChange={this.handleUpdate.bind( this )}
                                />
                                : <TextField
                                    variant="outlined"
                                    margin="normal"
                                    value={this.state.projectData.sitemap_url}
                                    id="sitemap_url"
                                    name="sitemap_url"
                                    onChange={this.handleUpdate.bind( this )}
                                /> : <a target="_blank"
                                        href={this.state.projectData.sitemap_url}>{this.state.projectData.sitemap_url}</a>

                        }
                      </TableCell>
                    </TableRow>

                  </TableBody>
                </Table>

              </CardContent>
            </Card>
          </Grid>
          {/*<Grid item xs={12} md={12}>
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
          </Grid>*/}

          <Grid item xs={12} md={12}>


                <ExpansionPanel id={'panel-main-sitemap-bh-header'} expanded={expanded === "sitemap"} onChange={handleChange("sitemap")}>
                  <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id={'panel-sitemap-bh-header'}
                      className="sitemap_Container"
                  >
                    <Typography variant="h5" paragraph>
                      Sitemap History
                    </Typography>

                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails  id={'exp-panel-main-sitemap-bh-header'}>
                    <SiteMapReport reportData={this.state.sitemapData} sitemapMsg={this.state.sitemapErrorMsg}/>
                    <Divider/>
                    <div>
                    <Link className={classes.report_link} to={{ pathname: sitemap_page }}>View More</Link>
                      <FormControlLabel className={classes.status_switch}
                                        control={
                                          <IOSSwitch
                                            checked={parseInt(this.state.projectData.sitemap_status)}
                                            onChange={this.handleChange.bind( this )}
                                            value="sitemap"
                                          />
                                        }
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>

                <ExpansionPanel id={'panel-main-robots-bh-header'} expanded={expanded === "robots"} onChange={handleChange("robots")}>
                  <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id={'panel-robots-bh-header'}
                      className="sitemap_Container"
                  >
                    <Typography>
                      <Typography variant="h5" paragraph>
                        Robots History
                      </Typography>
                    </Typography>

                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails  id={'exp-panel-main-robots-bh-header'}>
                    <RobotsHistoryReport reportData={this.state.robotsData} sitemapMsg={this.state.robotsErrorMsg}/>
                    <Divider/>
                    <div>
                      <Link className={classes.report_link} to={{ pathname: robots_page }}>View More</Link>
                      <FormControlLabel className={classes.status_switch}
                                        control={
                                          <IOSSwitch
                                            checked={parseInt(this.state.projectData.roborts_status)}
                                            onChange={this.handleChange.bind( this )}
                                            value="roborts"
                                          />
                                        }
                      />
                    </div>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
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
        {this.state.isLoading ? <Pace color="#3f51b5"/> : <this.ProjectFeaturesBox/> }

      </Container>
    );
  }
}

export default ProjectDetailViews;
