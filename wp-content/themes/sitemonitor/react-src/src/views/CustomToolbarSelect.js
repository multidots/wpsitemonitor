import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import BlockIcon from "@material-ui/icons/Block";
import { withStyles } from "@material-ui/core/styles";

const defaultToolbarSelectStyles = {
  iconButton: {
  },
  iconContainer: {
    marginRight: "24px",
  },
  inverseIcon: {
    transform: "delete",
  },
};

class CustomToolbarSelect extends React.Component {

  constructor(props) {
    super(props);
  }

  handleClickBlockSelected = () => {

    const nextSelectedRows = this.props.displayData.reduce((nextSelectedRows, _, index) => {
      if ( !this.props.selectedRows.data.find( selectedRow => selectedRow.index === index ) ) {
        nextSelectedRows.push( index );
      }
    });
    console.log(nextSelectedRows);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
      <div className={classes.iconContainer}>
        <Tooltip title={"Block selected"}>
          <IconButton className={classes.iconButton} onClick={this.handleClickBlockSelected}>
            <BlockIcon className={classes.icon} />
          </IconButton>
        </Tooltip>
      </div>
      </div>
    );
  }
}

export default withStyles(defaultToolbarSelectStyles, { name: "CustomToolbarSelect" })(CustomToolbarSelect);
