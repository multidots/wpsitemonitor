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
      .then( response => response.json() )
      .then( data => {
        if (Object.keys(data).length == 0 || typeof data === 'undefined' || null === data || 403 === data ) {
          this.setState( {
            fullReportData: [],
            sitemapData: [],
          } );
        } else {
          this.setState( {
            fullReportData: data,
            sitemapData: data.sitemap,
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
          <SiteMapReport reportData={this.state.sitemapData}/>
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
