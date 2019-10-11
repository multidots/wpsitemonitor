import React from 'react';
import Layout from './Layout';
import ProjectDetailViews from '../views/ProjectDetail';

class ProjectsDetail extends React.Component {

	render() {
		return (
      <Layout>
        <ProjectDetailViews data={this.props}/>
      </Layout>
		);
	}
}

export default ProjectsDetail;
