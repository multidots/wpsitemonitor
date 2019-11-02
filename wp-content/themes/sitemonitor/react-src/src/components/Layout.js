import React , {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Pace from "react-pace-progress";
import MUIDataTable from "mui-datatables";
import {CircularProgress, Typography} from "@material-ui/core";

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
