import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Container from '@material-ui/core/Container';
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';

class AddLocationDialog extends React.Component {

    constructor( props ) {
        super( props );
        this.state = {
            sm_project_name: '',
            sm_domain_url: '',
            sm_sitemap_url: '',
            sm_sitemap_option: false,
            sm_robots_option: false,
            sm_admin_option: false,
            error: {
                error_message: ''
            },
            open: false,
            setOpen: false,

        };

        this.handleClickOpen = this.handleClickOpen.bind( this );
        this.DialogContainer = this.DialogContainer.bind( this );
    }

    handleTextChange( event ) {
        this.setState( {
            [ event.target.name ]: event.target.value
        } );
    }

    handleSwitchChange = name => event => {
        this.setState( {
            [ name ]: event.target.checked
        } );
    }

    handleClickOpen() {
        this.setState( {
            open:true
        } );
    }

    handleClose() {
        this.setState( {
            open:false
        } );
    }

    DialogContainer(){

        const open = this.state.open;
        const setOpen = this.state.open;
        const Transition = React.forwardRef(function Transition(props, ref) {
            return <Slide direction="up" ref={ref} {...props} />;
        });

        const useStyles = makeStyles(theme => ({
            appBar: {
                position: 'relative',
            },
            title: {
                marginLeft: theme.spacing(2),
                flex: 1,
            },
        }));

        const classes = useStyles();


        return(
            <div>
                <React.Fragment>
                    <Tooltip title={"Add Project"}>
                        <IconButton className={classes.iconButton}  onClick={this.handleClickOpen.bind(this)}>
                            <AddIcon className={classes.deleteIcon}/>
                        </IconButton>
                    </Tooltip>
                </React.Fragment>
                <Dialog fullScreen open={open} onClose={this.handleClose.bind(this)}  TransitionComponent={Transition}>
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleClose.bind(this)}   aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Add Location
                            </Typography>
                            <Button color="inherit" >
                                Save
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <Container maxWidth="sm">
                        <form>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="sm_project_name"
                                label="Project Name"
                                name="sm_project_name"
                                onChange={this.handleTextChange.bind( this )}
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="sm_domain_url"
                                label="Domain URL"
                                type="text"
                                onChange={this.handleTextChange.bind( this )}
                                id="sm_domain_url"
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                name="sm_sitemap_url"
                                label="Sitemap URL"
                                type="text"
                                onChange={this.handleTextChange.bind( this )}
                                id="sm_domain_url"
                            />
                            <FormControl>
                                <FormControlLabel
                                    label="Sitemap"
                                    labelPlacement="start"
                                    control={
                                        <Switch
                                            checked={this.state.sm_sitemap_option}
                                            onChange={this.handleSwitchChange('sm_sitemap_option').bind(this)}
                                            value="checkedB"
                                            color="primary"
                                        />
                                    }
                                />
                                <FormControlLabel
                                    label="Robots"
                                    labelPlacement="start"
                                    control={
                                        <Switch
                                            checked={this.state.sm_robots_option}
                                            onChange={this.handleSwitchChange('sm_robots_option').bind(this)}
                                            value="checkedB"
                                            color="primary"
                                        />
                                    }
                                />

                                <FormControlLabel
                                    label="Admin"
                                    labelPlacement="start"
                                    control={
                                        <Switch
                                            checked={this.state.sm_admin_option}
                                            onChange={this.handleSwitchChange('sm_admin_option').bind(this)}
                                            value="on"
                                            color="primary"
                                        />
                                    }
                                />
                            </FormControl>

                        </form>
                    </Container>
                </Dialog>
            </div>
        )
    }

    render() {
        return (
            <this.DialogContainer />
        );
    }
}

export default AddLocationDialog;