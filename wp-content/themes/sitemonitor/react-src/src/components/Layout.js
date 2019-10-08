import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';

class Layout extends Component {

  render() {
    const theme = {
      spacing: 8,
    }
    return (
      <div>
        <Header />
        { this.props.children }
        <Footer />
      </div>
    );
  }
}

export default Layout;
