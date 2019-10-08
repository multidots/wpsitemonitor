import React from 'react';
import ProjectsViews from '../views/Projects';
import Layout from './Layout';

class Projects extends React.Component {

	render() {
		return (
      <Layout>
        <ProjectsViews />
      </Layout>
		);
	}
}

export default Projects;
