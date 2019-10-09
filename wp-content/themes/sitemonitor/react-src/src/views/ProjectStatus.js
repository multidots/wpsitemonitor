import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjectDetailSidebar from './ProjectDetailSidebar';
import SiteMapReport from './SiteMapReport';


class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      reportData: [],
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
        this.setState( {
          reportData: data,
        } );

      } );
  }

  ProjectStatusBox( props ) {
    console.table(this.state.reportData);
    return (
      <Grid container item xs={12} spacing={6}>
        <Grid item xs={2}>
          <ProjectDetailSidebar project_id={this.props.data.match.params.id}/>
        </Grid>
        <Grid container item xs={10} spacing={6}>
          <SiteMapReport reportData={this.state.reportData}/>
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
