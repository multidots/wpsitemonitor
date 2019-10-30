import React from 'react';
import PagesViews from '../views/Pages';
import Layout from './Layout';
import Login from './Login';
import Projects from './Projects';
import App from './App';

class Pages extends React.Component {

  render() {

    let slug = this.props.match.params.slug;
    switch ( slug ) {
      case 'projects':
        return (
            <Projects />
        );
        break;
      case 'sign-in':
        return (
            <Login />
        );
        break;
      default:
        if(typeof slug === 'undefined') {
          slug = "home";
        }
        return (
          <Layout>
            <PagesViews slug={slug}/>
          </Layout>
        );
    }
  }
}

export default Pages;
