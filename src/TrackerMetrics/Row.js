import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { trackerActions } from '../_actions';

const styles = theme => ({
    paper: {
      textAlign: 'center',
      color: 'silver',
    },
  });

class Row extends Component{

    set = () => {
        console.log(this.props.row);
        this.props.setrow(this.props.row);
    }

    render(){
        const { classes } = this.props;
        return(
                <Grid item xs={12}>
                    <Paper className={classes.paper} >
                        <p onClick={this.set} style={{cursor: 'pointer'}}>{this.props.row}</p>
                    </Paper>
                </Grid>
        );
    }
}

Row.propTypes = {
    classes: PropTypes.object.isRequired,
  };

const mapStateToProps = (state) => {
    return { currentrow: state.tracker.currentrow};
  }

const mapDispatchToProps = (dispatch) => ({
    setrow: (row) => {
        dispatch(trackerActions.setrow(row));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Row));