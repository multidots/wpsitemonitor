import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: "50px"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  diff_links: {
    backgroundColor: "yellow",
    marginBottom: "5px"
  }
}));

export default function SiteMapReport(props) {
  const reportData = props.reportData;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      { Object.keys(reportData).length == 0 ?

        <Typography>
          {props.sitemapMsg}
        </Typography> :

          reportData.map(Data => (

              <ExpansionPanel id={'panel-main-'+ Data.id +'bh-header'} expanded={expanded === Data.id} onChange={handleChange(Data.id)}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id={'panel'+ Data.id +'bh-header'}
                >
                  <Typography className={classes.heading}>
                    Text goes here
                    <b>{Data.date}</b>
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails  id={'exp-panel-main-'+ Data.id +'bh-header'}>
                  <Typography>
                    {Data.sitemap_diff_data.map(diff => (
                      <Typography className={classes.diff_links}>{diff}</Typography>
                    ))}
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            ))}

    </div>
  );
}
