import React from 'react'
import { Grid } from '@material-ui/core';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    formControl: {
      margin: theme.spacing.unit * 3,
      width: '100%'
    },
    paper: {
        margin: theme.spacing.unit * 2,
        boxShadow: '0px 0px 1px 0px grey'
    }
});

class Reports extends React.Component {

    render() {
        const { classes } = this.props;

        return(
            <Grid container className={classNames("flex", "h100")} justify="center" direction="row" alignItems="stretch">
                <Grid item xs={3} className={classNames("flex", classes.paper)}>

                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                
                </Grid>
                <Grid item xs={3} className={classNames("flex", classes.paper)}>
                
                </Grid>
            </Grid>
        )
    }
}

const ReportsWithStyles =  withStyles(styles, { withTheme: true })(Reports);
export { ReportsWithStyles as Reports }