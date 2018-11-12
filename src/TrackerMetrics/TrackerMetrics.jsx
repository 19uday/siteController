import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import OpTable from './OpTable';
import SiteImage from './SiteImage';
import Menu from './Menu';
import DropDown1 from './DropDown1';
import ZoneData  from './ZoneData';
import Rows from './Rows';
import RowData  from './RowData';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 20px)',
    height: 'calc(100% - 80px)',
    paddingLeft: "10px",
    paddingTop: "20px",
  },
  paper: {
    textAlign: 'center',
    color: 'silver',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: `${theme.spacing.unit * 3}px`,
    padding: '20px',
    
  },
  paper1: {
    textAlign: 'center',
    color: 'silver',
    height: '10%',
  },
  paper2: {
    textAlign: 'center',
    color: 'silver',
    height: '50%',
  },
  paper3: {
    textAlign: 'center',
    color: 'silver',
    height: '35%',
  },
  paper10: {
    textAlign: 'center',
    color: 'silver',
    height: '100%',
  },
});

class TrackerMetrics extends Component {

    constructor(props){
        super(props);
    }

    state={
        getDim: {},
        crow: '',
        openRow: false,
        czone: '',
        openZone: false,
    }

    componentWillReceiveProps = (nextProps) => {
        console.log(nextProps.currentzone);
        if(this.props.currentrow !== nextProps.currentrow)
        {
            console.log(nextProps.currentzone);
            this.setState({crow: nextProps.currentrow});
            this.setState({openRow: true});
        }

        if(this.props.currentzone !== nextProps.currentzone)
        {
            console.log(nextProps.currentzone);
            this.setState({czone: nextProps.currentzone})
            this.setState({openZone: true});
        }
    }

    render(){
        const { classes } = this.props;

        return (
            <div className={classes.root} >
            <Grid container spacing={24}>
                <Grid item xs={8}>
                    <Paper className = {classes.paper10}>
                        <Grid container item spacing={24} className = {classes.paper1}>
                            <Grid item xs={12}>
                                <div style={{textAlign: 'right'}}>
                                    <Menu />
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={24} className = {classes.paper2}>
                            <Grid container item spacing={24} xs={6}>
                                {this.state.openZone === true &&
                                    <Rows zone={this.state.czone}/>
                                }
                            </Grid>

                            <Grid item xs={6}>
                                <div style={{textAlign: 'middle'}} >
                                    {this.state.openRow === true &&
                                            <RowData row={this.props.currentrow} zone={this.props.currentzone}/>
                                    }
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={24} className = {classes.paper3}>

                            <Grid item xs={4}>
                                    <SiteImage dim={this.state.getDim} />
                            </Grid>
                            
                            <Grid item xs={5}>
                            {this.state.openZone === true &&
                                    <ZoneData zone={this.state.czone} />
                            }
                            </Grid>

                            <Grid item xs={3}>
                                <DropDown1 />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                <Grid item xs={4} container pacing={24}>
                    <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <div>
                                <div>
                                    <img className="sunimage" style={{maxWidth: "100%"}} src={ require('./sunn.png') } />
                                </div>
                                
                                <div>
                                    <p><b><font color="red" size="5">STATUS:</font> <font color="blue" size="5">ALL WELL</font></b></p>
                                </div>
                            </div>
                        </Paper>
                    </Grid>

                    <Grid item xs={12}>
                                <div>
                                    <OpTable />
                                </div>
                    </Grid>        
                    
                </Grid>
            </Grid>
            </div>
        );
    }
}

TrackerMetrics.propTypes = {
  classes: PropTypes.object.isRequired,
};


  const mapStateToProps = (state) => {
    return { currentzone: state.tracker.currentzone, currentrow: state.tracker.currentrow };
  }


const connectedOverView = connect(mapStateToProps)(withStyles(styles, { withTheme: true })(TrackerMetrics));
export { connectedOverView as TrackerMetrics };