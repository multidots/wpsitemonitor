import React from 'react';
import Layout from './Layout';
import ProjectDetailStatusView from '../views/ProjectStatus';

class ProjectDetailStatus extends React.Component {

  render() {
    return (
      <Layout>
        <ProjectDetailStatusView data={this.props}/>
      </Layout>
    );
  }
}

export default ProjectDetailStatus;
