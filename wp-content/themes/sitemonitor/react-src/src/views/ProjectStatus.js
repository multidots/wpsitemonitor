import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjectDetailSidebar from './ProjectDetailSidebar';
import SiteMapReport from './SiteMapReport';


class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      sitemapData: [],
      sitemapErrorMsg: "Please wait... Data will be loaded soon.",
    };
    this.ProjectStatusBox = this.ProjectStatusBox.bind( this );
  }

  componentDidMount( props ) {
    let domain_id = this.props.data.match.params.id;
    let type = this.props.data.match.params.status;
    const token = localStorage.getItem( 'token' );
    fetch( `/wp-json/md-site-monitor/project_report?project_id=${domain_id}&type=${type}`, {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token
        }
      }
    )
      .then( response => {
        if(401 === parseInt(response.status)) {
          localStorage.removeItem('token');
          window.location.href = '/sign-in';
        }
        return response.json()
      } )
      .then( data => {
        if (typeof data === 'undefined' || null === data || Object.keys(data).length === 0) {
          this.setState( {
            sitemapData: [],
            sitemapErrorMsg: "Sitemap reports not generated yet.",
          } );
        } else {
          this.setState( {
            sitemapData: data,
            sitemapErrorMsg: "",
          } );
        }
      } );
  }

  ProjectStatusBox( props ) {
    return (
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={2}>
          <ProjectDetailSidebar project_id={this.props.data.match.params.id}/>
        </Grid>
        <Grid container item xs={10} spacing={6}>
          <SiteMapReport reportData={this.state.sitemapData} sitemapMsg={this.state.sitemapErrorMsg}/>
        </Grid>
      </Grid>
    );
  }

  render() {
    return (
      <Container maxWidth="xl">
        <this.ProjectStatusBox/>
      </Container>
    );
  }
}

export default ProjectDetailViews;
