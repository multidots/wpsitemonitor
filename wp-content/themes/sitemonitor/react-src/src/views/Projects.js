import React from 'react';
import { CircularProgress, Typography, withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import MUIDataTable from 'mui-datatables';
import * as Constants from '../components/Constants';
import { Link, Redirect } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

import './style.css';

import CustomToolbar from './CustomToolbar';

const defaultToolbarSelectStyles = {
  iconButton: {},
  iconContainer: {
    marginRight: '24px',
  },
};

const IOSSwitch = withStyles( theme => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing( 1 ),
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[ 400 ]}`,
    backgroundColor: theme.palette.grey[ 50 ],
    opacity: 1,
    transition: theme.transitions.create( ['background-color', 'border'] ),
  },
  checked: {},
  focusVisible: {},
}) )( ( { classes, ...props } ) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
} );

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);



class ProjectsViews extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      page: 0,
      count: 11,
      rowsPerPage: Constants.ROW_PER_PAGE,
      data: [['Loading Data...']],
      isLoading: false,
      searchText: ''
    };

  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState( { isLoading: true, data: [['Loading Data...']] } );
    this.xhrRequest( 0, '' ).then( res => {
      if ( typeof res === 'undefined' || null === res.data || 403 === res.data.status ) { //&& 403 === res.data.status
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

  xhrRequest = ( page, searchText ) => {
    const token = localStorage.getItem( 'token' );
    return fetch( `/wp-json/md-site-monitor/get_domains?sm_paged=${page}&sm_search=${searchText}`, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      if ( 403 === parseInt( res.status ) || 401 === parseInt( res.status ) ) {
        localStorage.removeItem( 'token' );
        window.location.href = '/sign-in';
      }
      if ( 404 === parseInt( res.status ) ) {
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
        if ( 'data_not_found' === response.code ) {
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

  handleDeleteProject = ( selectedRows, displayData ) => {
    this.setState( { isLoading: true, data: [['Loading Data...']] } );

    const deleteData = selectedRows.data.map( function( data, idx ) {
      return displayData[ data.index ].data[ 0 ];
    } );

    this.xhrRequestDelete( deleteData ).then( res => {
      this.getData();
    } );
  };

  xhrRequestDelete = ( deleteData ) => {
    const token = localStorage.getItem( 'token' );
    const site_url = Constants.SITE_URL;
    return fetch( `/wp-json/md-site-monitor/delete_projects`, {
      method: 'DELETE',
      body: JSON.stringify( deleteData ),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      if ( 404 === parseInt( res.status ) ) {
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

    } ).catch( err => {
      this.setState( { isLoading: false } );
    } );
  };

  xhrRequestStatus = ( project_id, project_stats ) => {
    const token = localStorage.getItem( 'token' );
    const site_url = Constants.SITE_URL;
    return fetch( `/wp-json/md-site-monitor/projects_status`, {
      method: 'POST',
      body: JSON.stringify( { projectID: project_id, projectStatus: project_stats } ),
      headers: {
        Authorization: 'Bearer ' + token
      }
    } ).then( res => {
      return res.json();
    } ).then( function( response ) {
    } ).catch( err => {
      this.setState( { isLoading: false } );
    } );
  };

  handleChange( event ) {
    let project_id = event.target.value;
    let project_stats = event.target.checked;
    this.xhrRequestStatus( project_id, project_stats ).then( res => {
      this.getData();
    } );
  }

  render() {
    const columns = [
      {
        label: 'ID', name: 'id',
        options: {
          display: false
        }
      },
      {
        label: 'Project', name: 'project_name',
        options: {
          sort: false,
          filter: false,
          customBodyRender: ( value, tableMeta, updateValue ) => {
            let project_id = tableMeta.rowData[ 0 ];
            const project_link = '/projects/' + project_id + '/';
            return (
              <Link to={{ pathname: project_link }}>{value}</Link>
            );
          }
        }
      },
      { label: 'Domain URL', name: 'domain_url' },
      {
        label: 'Report Status', name: 'cron_status',

        options: {
          filter: false,
          customBodyRender: ( value, tableMeta, updateValue ) => {

            let status_text = "";
            let cron_status = "";

            if(typeof value != 'undefined' || null != value){
              if( 1 === value.sitemap_xml && 1 === value.admin_status && 1 === value.captcha_status && 1 === value.https_status && 1 === value.robots_status){
                status_text = "Completed";
                cron_status = 1;
              } else if ( 0 === value.sitemap_xml && 0 === value.admin_status && 0 === value.captcha_status && 0 === value.https_status && 0 === value.robots_status){
                status_text = "Pending";
                cron_status = 2;
              } else {
                status_text = "In Process";
                cron_status = 0;
              }

              if(tableMeta.rowData[4] == 0){
                status_text = "On Hold";
                cron_status = 2;
              }
            }

            return (
              <PopupState className="tooltip_container" variant="popper" popupId="demo-popup-popper">
                {popupState => (

                    <HtmlTooltip  style={{backgroundColor:"#fff"}}
                                 title=""
                    >

                      <Button variant="contained" {...bindToggle(popupState)}>
                        { 1 == cron_status ?
                          <div><FiberManualRecordIcon style={{ color: '#43a047',fontSize: "small" }}/> {status_text}</div>
                          :
                          <div><FiberManualRecordIcon style={{ color: '#D3302F',fontSize: "small" }}/> {status_text}</div>
                        }

                      </Button>
                    </HtmlTooltip>

                )}
              </PopupState>


          );

          }
        }
      },
      {
        label: 'Action', name: 'roborts_status',

        options: {
          filter: false,
          customBodyRender: ( value, tableMeta, updateValue ) => {

            let project_id = tableMeta.rowData[ 0 ];
            if ( 'undefined' === typeof value ) {

            } else {
              const status = 1 === parseInt( value ) ? true : false;
              return (
                <div>
                <FormControlLabel
                  control={
                    <IOSSwitch
                      checked={status}
                      onChange={this.handleChange.bind( this )}
                      value={project_id}
                    />
                  }
                />
                  <HtmlTooltip  style={{backgroundColor:"#fff"}}
                                title={

                                  <ul className="status_tooltip">
                                    { typeof tableMeta.rowData[3] != 'undefined' || null != tableMeta.rowData[3] ?
                                      <div>
                                        <li><FiberManualRecordIcon style={{ color: tableMeta.rowData[3].sitemap_xml === 1 ? '#43a047' : '#D3302F',fontSize: "small" }}/>  Sitemap</li>
                                        <li><FiberManualRecordIcon style={{ color: tableMeta.rowData[3].admin_status === 1 ? '#43a047' : '#D3302F',fontSize: "small" }}/>  Admin URL</li>
                                        <li><FiberManualRecordIcon style={{ color: tableMeta.rowData[3].robots_status === 1 ? '#43a047' : '#D3302F',fontSize: "small" }}/>  Robots</li>
                                        <li><FiberManualRecordIcon style={{ color: tableMeta.rowData[3].https_status === 1 ? '#43a047' : '#D3302F',fontSize: "small" }}/>  SSL</li>
                                        <li><FiberManualRecordIcon style={{ color: tableMeta.rowData[3].captcha_status === 1 ? '#43a047' : '#D3302F',fontSize: "small" }}/>  Captcha</li>
                                      </div>
                                      :""}
                                  </ul>

                                }
                  >
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                  </HtmlTooltip>
                </div>
              );
            }
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
      customToolbarSelect: ( selectedRows, displayData, setSelectedRows ) => (
        <div className={classes.iconContainer}>
          <Tooltip title={'Delete Projects'}>
            <IconButton className={classes.iconButton}
                        onClick={this.handleDeleteProject.bind( this, selectedRows, displayData )}>
              <DeleteIcon className={classes.icon}/>
            </IconButton>
          </Tooltip>
        </div>
      ),
      customToolbar: () => {
        return (
          <CustomToolbar/>
        );
      },

      onTableChange: ( action, tableState ) => {

        switch ( action ) {
          case 'changePage':
            if ( tableState.searchText == null ) {
              tableState.searchText = '';
            }
            this.setState( { searchText: tableState.searchText } );
            this.changePage( tableState.page, tableState.searchText );
            break;
          case 'search':
            if ( tableState.searchText == null ) {
              tableState.searchText = '';
            }
            this.setState( { searchText: tableState.searchText } );
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

export default withStyles( defaultToolbarSelectStyles, { name: 'ProjectsViews' } )( ProjectsViews );
