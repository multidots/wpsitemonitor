import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LanguageIcon from '@material-ui/icons/Language';
import SettingsIcon from '@material-ui/icons/Settings';
import DescriptionIcon from '@material-ui/icons/Description';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link, Redirect } from 'react-router-dom';


const useStyles = makeStyles( theme => ({
  spacing:{
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
    paddingLeft: theme.spacing(4),
  },
}) );

class ProjectDetailSidebar extends React.Component {

  constructor( props ) {
    super( props );

    this.Sidebar = this.Sidebar.bind( this );
  }

  handleLogout(){
    localStorage.removeItem('token');
    window.location.href='/sign-in';
  }

  Sidebar(){
    const overview_link = "/projects/" + this.props.project_id + "/";
    const classes = useStyles();
    return(
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button className={classes.spacing} component={Link} to={{pathname: overview_link}}>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Overview" />
        </ListItem>

        <ListItem button component={Link} to={{pathname: overview_link + "sitemap"}}>
          <ListItemIcon>
            <DescriptionIcon />
          </ListItemIcon>
          <ListItemText primary="Sitemap" />
        </ListItem>


        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText onClick={this.handleLogout.bind(this)} primary="Logout" />
        </ListItem>

      </List>
    )
  }

  render() {
    return (
        <this.Sidebar/>
    );
  }
}

export default ProjectDetailSidebar;
