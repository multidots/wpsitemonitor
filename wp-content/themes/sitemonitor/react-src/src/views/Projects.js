import React from 'react';
import { CircularProgress, Typography, withStyles, createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import * as Constants from '../components/Constants';
import { Link, Redirect } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import TableCell from '@material-ui/core/TableCell';
import './style.css'; // Tell Webpack that Button.js uses these styles

import CustomToolbar from "./CustomToolbar";

const defaultToolbarSelectStyles = {
  iconButton: {
  },
  iconContainer: {
    marginRight: "24px",
  },
};

class ProjectsViews extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			page: 0,
			count: 11,
			rowsPerPage: Constants.ROW_PER_PAGE,
			data: [['Loading Data...']],
			isLoading: false,
			searchText: ""
		};

	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		this.setState( { isLoading: true, data: [['Loading Data...']] } );
		this.xhrRequest(0, "").then( res => {
			if ( typeof res === 'undefined' || null === res.data|| 403 === res.data.status ) { //&& 403 === res.data.status
				this.setState( { data: [], isLoading: false, count: 0 } );
			} else {
				this.setState( { data: res.data, isLoading: false, count: res.total } );
			}
		} );
	};

  changePage = ( page, searchText = '' ) => {

    this.setState( { isLoading: true, data: [['Loading Data...']] } );
    this.xhrRequest( page, searchText ).then( res => {

      if ( typeof res === 'undefined' || null === res.data || 403 === res.data.status ) { //&& 403 === res.data.status
        this.setState( { data: [], isLoading: false, count: 0 } );
      } else {
        this.setState( { data: res.data, isLoading: false, count: res.total } );
      }
    } );
  };

  handle403(){
    return(
      <Redirect to={{ pathname: '/sign-in' }}/>
    )
  }

	xhrRequest = (page, searchText) => {
    const token = localStorage.getItem( 'token' );
		return fetch( `/wp-json/md-site-monitor/get_domains?sm_paged=${page}&sm_search=${searchText}`, {
			method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
		} ).then( res => {
      if(403 === parseInt(res.status) || 401 === parseInt(res.status)) {
        localStorage.removeItem('token');
        window.location.href = '/sign-in';
      }
      if(404 === parseInt(res.status)){
        return new Promise( ( resolve, reject ) => {
          const data = [];
          const total = parseInt( 0 );
          resolve( {
            data, total
          } );
        } );
      }
			return res.json();
		} ).then( function( response ) {
			return new Promise( ( resolve, reject ) => {
			  if("data_not_found" === response.code){
          const data = [];
          const total = 0;
          resolve( {
            data, total
          } );
        } else {
          const data = response.data;
          const total = parseInt( response.total_data );
          resolve( {
            data, total
          } );
        }
			} );
		} ).catch( err => {
			this.setState( { isLoading: false } );
		} );
	};

  handleDeleteProject = (selectedRows,displayData) => {
    this.setState( { isLoading: true, data: [['Loading Data...']] } );

    const deleteData = selectedRows.data.map(function(data, idx) {
      return displayData[data.index].data[0];
    });

    this.xhrRequestDelete(deleteData).then( res => {
      this.getData();
    } );
  };

  xhrRequestDelete = (deleteData) => {
    const token = localStorage.getItem( 'token' );
    const site_url = Constants.SITE_URL;
    return fetch( `/wp-json/md-site-monitor/delete_projects`, {
      method: 'DELETE',
      body: JSON.stringify( deleteData),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      if(404 === parseInt(res.status)){
        return new Promise( ( resolve, reject ) => {
          const data = [];
          const total = parseInt( 0 );
          resolve( {
            data, total
          } );
        } );

      }
      return res.json();
    } ).then( function( response ) {
      console.log(response);
    } ).catch( err => {
      this.setState( { isLoading: false } );
    } );
  };


  getMuiTheme = () => createMuiTheme({
    overrides: {
      MUIDataTable: {
        root: {
          backgroundColor: "#FF000",
        },
        paper: {
          boxShadow: "none",
        }
      },
      MUIDataTableBodyCell: {
        root: {
          backgroundColor: "#FFF"
        }
      }
    }
  });

  CustomTableHead(column_name){
    return (
      <TableCell style={{cursor:"text",backgroundColor:"#3F51B6",color:"#fff"}}>
        {column_name}
      </TableCell>
    );
  }

	render() {
		const columns = [
      { label: 'ID', name: 'id',
        options: {
          display: false
        }
      },
			{ label: 'Project', name: 'project_name',
        options: {
          sort: false,
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {

            let project_id = tableMeta.rowData[0];

            project_id = process.env.NODE_ENV === 'development' ? parseInt(project_id)  : (parseInt(project_id) + 1);
            const project_link = "/projects/"+project_id+"/";
            return (
              <Link to={{pathname: project_link}}>{value}</Link>
                );
          }
        }
      },
			{ label: 'Domain URL', name: 'domain_url'},
			{ label: 'Sitemap', name: 'sitemap_status',

        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {

            const status = 1 === parseInt(value) ? true : false;
            return (
              status ? <CheckCircleRoundedIcon style={{color: '#43a047'}}/> : (
                  <CancelRoundedIcon style={{color: '#D3302F'}}/>
                )
            );
          }
        }
      },
			{ label: 'Wp-Admin URL', name: 'admin_status',
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {

            const status = 1 === parseInt(value) ? true : false;
            return (
              status ? <CheckCircleRoundedIcon style={{color: '#43a047'}}/> : (
                <CancelRoundedIcon style={{color: '#D3302F'}}/>
              )
            );
          }
        }
      },
			{ label: 'Robots', name: 'roborts_status',

        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => {

            const status = 1 === parseInt(value) ? true : false;
            return (
              status ? <CheckCircleRoundedIcon style={{color: '#43a047'}}/> : (
                <CancelRoundedIcon style={{color: '#D3302F'}}/>
              )
            );
          }
        }
        },
		];
    const { classes } = this.props;
		const { data, page, count, isLoading, rowsPerPage } = this.state;
		const options = {
			filter: false,
			filterType: 'checkbox',
			download: false,
			print: false,
			viewColumns: false,
			sort: false,
			//selectableRows: 'none',
			responsive: 'stacked',
			serverSide: true,
			rowsPerPage: rowsPerPage,
			rowsPerPageOptions: [10],
			count: count,
			page: page,
			searchText: this.state.searchText,
      customToolbarSelect: (selectedRows, displayData, setSelectedRows) => (
        <div className={classes.iconContainer}>
          <Tooltip title={"Delete Projects"}>
            <IconButton className={classes.iconButton} onClick={this.handleDeleteProject.bind(this, selectedRows,displayData)}>
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </Tooltip>
        </div>
      ),
			customToolbar: () => {
				return (
					<CustomToolbar />
				);
			},

			onTableChange: ( action, tableState ) => {

				switch ( action ) {
					case 'changePage':
						if(tableState.searchText == null){
							tableState.searchText = "";
						}
						this.setState({searchText: tableState.searchText});
						this.changePage( tableState.page,tableState.searchText );
						break;
					case 'search':
						if(tableState.searchText == null){
							tableState.searchText = "";
						}
						this.setState({searchText: tableState.searchText});
						this.changePage( tableState.page, tableState.searchText );
						break;
          default:
            return;

				}
			},
		};

		return (
				<MUIDataTable
					title={
						<Typography component={'span'} variant={'body2'}>
              <h2>Project Reports</h2>
							{isLoading &&
							<CircularProgress size={24} style={{ marginLeft: 15, position: 'relative', top: 4 }}/>}
						</Typography>
					}
					data={data}
					columns={columns}
					options={options}
				/>
		);
	}
}

export default withStyles(defaultToolbarSelectStyles, { name: "ProjectsViews" })(ProjectsViews);
