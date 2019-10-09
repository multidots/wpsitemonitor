import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

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
      reportData: [],
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
      .then( response => response.json() )
      .then( data => {
        this.setState( {
          reportData: data,
        } );

      } );
  }

  ProjectFeaturesBox( props ) {
    const classes = useStyles();
    return (
      <Grid container item xs={12} md={12} spacing={1}>

        <Grid item xs={2} md={2}>
          <ProjectDetailSidebar project_id={this.props.data.match.params.id}/>
        </Grid>

        <Grid item xs={7} md={7}>
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Typography variant="h5" paragraph>
                  Sitemap History
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  <SiteMapReport reportData={this.state.reportData}/>
                </Typography>

              </CardContent>
            </div>
          </Card>
        </Grid>

        <Grid container item xs={3} md={3}>

          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                    Wp-Admin URL
                  </Typography>
                  <Typography paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </Typography>
                </CardContent>
              </div>
            </Card>
          </Grid>

          <Grid item xs={12} md={12}>
            <Card className={classes.card}>
              <div className={classes.cardDetails}>
                <CardContent>
                  <Typography variant="h5" paragraph>
                   Robots
                  </Typography>
                  <Typography paragraph>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
