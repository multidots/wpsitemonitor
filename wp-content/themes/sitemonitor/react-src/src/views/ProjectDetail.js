import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { Link, Redirect } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';

import ProjectDetailSidebar from './ProjectDetailSidebar';
import SiteMapReport from './SiteMapReport';

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
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing( 4 ),
  },
}) );

class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      fullReportData: [],
      sitemapData: [],
      sitemapErrorMsg: "Loading...",
    };
    this.ProjectFeaturesBox = this.ProjectFeaturesBox.bind( this );
  }

  componentDidMount( props ) {
    let domain_id = this.props.data.match.params.id;
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
        if ( typeof data === 'undefined' || null === data || Object.keys(data).length === 0 ) {
          this.setState( {
            fullReportData: [],
            sitemapData: [],
            sitemapErrorMsg: "Sitemap reports not generated yet.",
          } );
        } else {
          this.setState( {
            fullReportData: data,
            sitemapData: data.sitemap,
            sitemapErrorMsg: (Object.keys(data.sitemap).length === 0) ? "Sitemap reports not generated yet." : ""
          } );
        }
      } );
  }

  ProjectFeaturesBox( props ) {

    const classes =useStyles();
    const sitemap_page = '/projects/' + this.props.data.match.params.id + '/' + 'sitemap';
    return (
      <Grid container item xs={12} md={12} spacing={3}>
          <Grid item xs={8} md={8}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Sitemap History
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
          <Grid container item xs={4} md={4} >
            <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Wp-Admin URL
                    {1 === parseInt( this.state.fullReportData.admin_status ) ? <CheckCircleRoundedIcon
                      className={classes.status_icon} style={{ color: '#43a047' }}/> : (
                      <CancelRoundedIcon className={classes.status_icon} style={{ color: '#D3302F' }}/>
                    )}
                  </Typography>
                  <Typography paragraph>
                    {1 === parseInt( this.state.fullReportData.admin_status ) ? 'Custom URL set for the admin' : (
                      'Default URL set for the admin '
                    )}
                  </Typography>
                  <Typography paragraph className="status_text">
                    {this.state.fullReportData.admin_status_text}
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>
            <Grid item xs={12} md={12} className={classes.grid_item} >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="h5" paragraph>
                      Robots
                      { 1 === parseInt(this.state.fullReportData.robots_status) ? <CheckCircleRoundedIcon className={classes.status_icon} style={{color: '#43a047'}}/> : (
                          <CancelRoundedIcon className={classes.status_icon} style={{color: '#D3302F'}}/> ) }
                    </Typography>
                    <Typography paragraph>
                      { 1 === parseInt(this.state.fullReportData.robots_status) ?   "robots.txt is available on the root."  : (
                          "robots.txt is not available on the root."
                      ) }
                    </Typography>
                    <Typography paragraph className="status_text">
                      {this.state.fullReportData.robots_status_text}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} className={classes.grid_item} >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="h5" paragraph>
                      SSL
                      { 1 === parseInt(this.state.fullReportData.ssl_status) ? <CheckCircleRoundedIcon className={classes.status_icon} style={{color: '#43a047'}}/> : (
                          <CancelRoundedIcon className={classes.status_icon} style={{color: '#D3302F'}}/> ) }
                    </Typography>
                    <Typography paragraph>
                      { 1 === parseInt(this.state.fullReportData.ssl_status) ?   "Site is secure."  : (
                          "Site does not have any SSL certificate."
                      ) }
                    </Typography>
                    <Typography paragraph className="status_text">
                      {this.state.fullReportData.ssl_status_text}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} md={12} className={classes.grid_item} >
              <Card className={classes.card}>
                <div className={classes.cardDetails}>
                  <CardContent>
                    <Typography variant="h5" paragraph>
                      Captcha
                      { 1 === parseInt(this.state.fullReportData.captcha_status) ? <CheckCircleRoundedIcon className={classes.status_icon} style={{color: '#43a047'}}/> : (
                          <CancelRoundedIcon className={classes.status_icon} style={{color: '#D3302F'}}/> ) }
                    </Typography>
                    <Typography paragraph>
                      { 1 === parseInt(this.state.fullReportData.captcha_status) ?   "Captcha successfully implemented on contact form."  : (
                          "Missing captcha on contact form"
                      ) }
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
