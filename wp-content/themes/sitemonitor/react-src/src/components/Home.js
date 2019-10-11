import React , {Component} from 'react';
import Layout from './Layout';
import HomeViews from '../views/Home';
class Home extends Component {
    render() {
        return (
          <Layout>
            <HomeViews />
          </Layout>
        );
    }
}

export default Home;
