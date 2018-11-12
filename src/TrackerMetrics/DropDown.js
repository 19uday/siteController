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
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class DropDown extends React.Component {
  state = {
    row: '',
    name: 'hai',
    rows:["Row1", "Row2", "Row3", "Row4", "Row5", "Row6", "Row7", "Row8", "Row9", "Row10"],
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
    var op = this.state.row;
    this.props.setrow(op);
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="age-simple">Select Row</InputLabel>
          <Select
            value={this.state.row}
            onChange={this.handleChange}
            inputProps={{
              name: 'row',
              id: 'row-simple',
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.rows.map(option => (
            <MenuItem value={option} key={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </form>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setrow: (row) => {
      dispatch(trackerActions.setzrow(row))
  }
})

export default connect(mapDispatchToProps)(withStyles(styles)(DropDown));