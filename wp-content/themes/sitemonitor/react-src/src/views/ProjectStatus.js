import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ProjectDetailSidebar from './ProjectDetailSidebar'

class ProjectDetailViews extends React.Component {

  constructor( props ) {
    super( props );
    this.ProjectStatusBox = this.ProjectStatusBox.bind( this );
  }

  ProjectStatusBox(props) {
    return (
      <Grid container item xs={12} spacing={6} >
        <Grid item xs={2}>
          <ProjectDetailSidebar project_id={this.props.data.match.params.id}/>
        </Grid>
        <Grid container item xs={10} spacing={6}>
          <h3>Reports generate..., Please wait few mins</h3>
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
