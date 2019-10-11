import React , {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

class FooterViews extends Component {

  Copyright() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 20 }}>
              {'Copyright © '}
              <Link color="inherit" href="https://www.multidots.com/">
                Multidots
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </footer>
    );
  }
    render() {
        return (

            <this.Copyright />

        );
    }
}

export default FooterViews;
