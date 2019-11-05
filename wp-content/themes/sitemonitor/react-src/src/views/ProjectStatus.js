import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjectDetailSidebar from './ProjectDetailSidebar';
import SiteMapReport from './SiteMapReport';
import RobotsHistoryReport from './RobotsReports';
import Pace from "react-pace-progress";


class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      sitemapData: [],
      sitemapErrorMsg: "Please wait... Data will be loaded soon.",
      isLoading: true,
    };
    this.ProjectStatusBox = this.ProjectStatusBox.bind( this );
  }

  componentDidMount( props ) {
    let domain_id = this.props.data.match.params.id;
    let type = this.props.data.match.params.status;
    const token = localStorage.getItem( 'token' );
    this.setState( { isLoading: true } );
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
          window.location.href = '/';
        }
        return response.json()
      } )
      .then( data => {
        if (typeof data === 'undefined' || null === data || Object.keys(data).length === 0) {
          this.setState( {
            sitemapData: [],
            sitemapErrorMsg: "Reports not generated yet.",
            isLoading: false,

          } );
        } else {
          this.setState( {
            sitemapData: data,
            sitemapErrorMsg: "",
            isLoading: false,
          } );
        }
      } );
  }

  ProjectStatusBox( props ) {
    return (
      <Grid container item xs={12} spacing={6}>
        { this.props.data.match.params.status === "robots" ?
          <RobotsHistoryReport reportData={this.state.sitemapData} sitemapMsg={this.state.sitemapErrorMsg}/>
          :
          <SiteMapReport reportData={this.state.sitemapData} sitemapMsg={this.state.sitemapErrorMsg}/>
        }
      </Grid>
    );
  }

  render() {
    return (
      <Container maxWidth="xl">
        {this.state.isLoading ? <Pace color="#3f51b5"/> :
            <this.ProjectStatusBox/>
        }
      </Container>
    );
  }
}

export default ProjectDetailViews;
