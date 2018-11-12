import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { trackerActions } from '../_actions';
import {connect} from 'react-redux';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class DropDown1 extends React.Component {
  state = {
    zone: '',
    name: 'hai',
    zones:["Zone1", "Zone2", "Zone3"],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    var op = event.target.value;
    this.props.setzone(op)
  };

  componentWillReceiveProps(nextProps){
    console.log(this.props.currentzone);
    if(this.props.currentzone !== nextProps.currentzone)
    {
      this.setState({zone: nextProps.currentzone});
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select Zone</InputLabel>
          <Select
            value={this.state.zone}
            onChange={this.handleChange}
            inputProps={{
              name: 'zone',
              id: 'zone-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.zones.map(option => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

DropDown1.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return { currentzone: state.tracker.currentzone};
}
const mapDispatchToProps = (dispatch) => ({
  setzone: (zone) => {
      dispatch(trackerActions.setzone(zone));
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(DropDown1));
