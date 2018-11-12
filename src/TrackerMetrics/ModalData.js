import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ZoneData from './ZoneData';
import RowData from './RowData';
import DropDown from './DropDown';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class ModalData extends React.Component {

    state = {
        currentrow: '',
        open: false,
    }

    setr = (row) => {
        this.setState({currentrow: row});
        this.setState({open: true});
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root}>
            <Grid container spacing={24}>
                <Grid item xs={2}>
                <Paper className={classes.paper}>
                    <DropDown setr={this.setr}/>
                </Paper>
                </Grid>
                <Grid item xs={5}>
                <Paper className={classes.paper}>
                    <ZoneData zone={this.props.zone}/> 
                </Paper>
                </Grid>
                <Grid item xs={5}>
                    {this.state.open === true &&
                    <Paper className={classes.paper}>
                        
                        <RowData zone={this.props.zone} row={this.state.currentrow}/>
                        
                    </Paper>
                    }
                </Grid>
               
            </Grid>
            </div>
        );
    }
}

ModalData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalData);