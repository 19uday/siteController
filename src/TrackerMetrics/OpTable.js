import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { opTableActions } from '../_actions';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,   
  },
  body: {
    fontSize: 14,
    height: '10px',
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    maxWidth: '100%',
  },
});





class OpTable extends Component {

    state={
      oparray:[],
      open:false
    };

    componentDidMount(){
        this.props.getopTable()
    }
    
    render(){
        const {classes} = this.props;

          return (!this.props.loaded1 ? "Loading" :
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>Zone #</CustomTableCell>
                  <CustomTableCell numeric>No Of Trackers</CustomTableCell>
                  <CustomTableCell numeric>Operational #</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.opTable.operational.map(op => {
                  return (
                    <TableRow className={classes.row} key={op.zoneId}>
                      <CustomTableCell>
                        {op.zoneId}
                      </CustomTableCell>
                      <CustomTableCell>{op.numberOfTrackers}</CustomTableCell>
                      <CustomTableCell className={op.operationalNo === op.numberOfTrackers ? "black" : "red"}>{op.operationalNo}</CustomTableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Paper>
        );
    }

}

OpTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { loaded1, opTable } = state.opTable;
  return {
      opTable,
      loaded1
  };
}

const mapDispatchToProps = (dispatch) => ({
  getopTable: () => {
      dispatch(opTableActions.getopTable())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OpTable));