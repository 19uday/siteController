import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import StopIcon from '@material-ui/icons/Stop'
import StraightenIcon from '@material-ui/icons/Straighten'
import BrightnessAutoIcon from '@material-ui/icons/BrightnessAuto'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import { Icon } from '@material-ui/core/Icon'
import { Grid, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'lightgreen'
  },
  orange: {
    backgroundColor: 'darkorange'
  },
  yellow: {
    backgroundColor: 'beige'
  },
  blue: {
    backgroundColor: 'lightskyblue'
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  }
});

class CheckboxListSecondary extends React.Component {
  state = {
    auto: [],
    stopped: []
  };

  componentDidMount(){
    console.log(this.props.trackers);
  }

  handleChange = (command, trackerID) => {
    this.props.sendCommand(trackerID, command)
    const newAuto = this.state.auto
    const newStopped = this.state.stopped
    if(command === 'STOP') {
      newStopped.push(trackerID)
      this.setState({
        stopped: newStopped
      })  
    } else if(command === 'AUTO') {
      newAuto.push(trackerID)
      this.setState({
        auto: newAuto
      })
    }
  };


  handleToggleAll = () => () => {
    this.state.all ? 
    this.setState({
      all: false,
      checked: []
    })
    :
    this.setState({
      all: true,
      checked: this.props.trackers
    })
  }

  render() {
    const { classes, trackers } = this.props;
    console.log(this.state)
    return ( 
      <div className={classes.root}>
        <Table className={classes.table}>
            <TableBody>
            <TableRow>
                      <TableCell padding="default">ZONE</TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.green} onClick={() => this.handleChange('CLEAN')}>
                          CLEAN
                          <div className={classNames(classes.rightIcon, 'cleanIcon')}></div>
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.orange} onClick={() => this.handleChange('STOW')}>
                          STOW
                          <StraightenIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.red} onClick={() => this.handleChange('STOP')}>
                          STOP
                          <StopIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.blue} onClick={() => this.handleChange('AUTO')}>
                          AUTO
                          <BrightnessAutoIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.yellow} onClick={() => this.handleChange('UT')}>
                          UPDATE TIME
                          <AccessTimeIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                    </TableRow>
            {
              trackers.map(tracker => {
                console.log(tracker);
                  return (
                    <TableRow key={tracker.trackerId}>
                      <TableCell padding="default">{tracker.trackerId}</TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.green} onClick={() => this.handleChange('CLEAN', tracker.trackerId)}>
                          CLEAN
                          <div className={classNames(classes.rightIcon, 'cleanIcon')}></div>
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" className={classes.orange} onClick={() => this.handleChange('STOW', tracker.trackerId)}>
                          STOW
                          <StraightenIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" disabled={this.state.stopped ? this.state.stopped.indexOf(tracker.trackerId) > -1 ? true : false : false } className={classes.red} onClick={() => this.handleChange('STOP', tracker.trackerId)}>
                          STOP
                          <StopIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                      <TableCell padding="default">
                        <Button variant="extendedFab" disabled={this.state.auto ? this.state.auto.indexOf(tracker.trackerId) > -1 ? true : false : false } className={classes.blue} onClick={() => this.handleChange('AUTO', tracker.trackerId)}>
                          AUTO
                          <BrightnessAutoIcon className={classes.rightIcon} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
              })
            }
            </TableBody>
        </Table> 
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);