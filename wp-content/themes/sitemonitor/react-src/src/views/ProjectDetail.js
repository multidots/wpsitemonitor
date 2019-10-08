import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';

import ProjectDetailSidebar from './ProjectDetailSidebar'


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

class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.ProjectFeaturesBox = this.ProjectFeaturesBox.bind( this );
  }

  ProjectFeaturesBox(props) {
    const classes = useStyles();
    const overview_link = this.props.data.match.params.id;
    const featuredPosts = [
      {
        title: 'Sitemap',
        date: 'Nov 12',
        link: overview_link + "/sitemap",
        link_slug: 'sitemap',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
      {
        title: 'Admin',
        date: 'Nov 11',
        link: overview_link + "/admin",
        link_slug: 'admin',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },{
        title: 'Robots',
        date: 'Nov 12',
        link: overview_link + "/robots",
        link_slug: 'robots',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
      },
    ];

    return (
        <Grid container item xs={12} spacing={6} >
            <Grid item xs={2}>
              <ProjectDetailSidebar project_id={this.props.data.match.params.id}/>
            </Grid>
            <Grid container item xs={10} spacing={6}>

              {featuredPosts.map(post => (
                <Grid item key={post.title} xs={4} md={4}>
                  <CardActionArea component="a" href={post.link_slug}>
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>
                        <CardContent>
                          <Link to={post.link_slug}>{post.title}</Link>

                          <Typography variant="subtitle1" paragraph>
                            {post.description}
                          </Typography>

                        </CardContent>
                      </div>
                    </Card>
                  </CardActionArea>
                </Grid>
              ))}
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
