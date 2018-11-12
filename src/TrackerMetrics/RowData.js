import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';   
import TableCell from '@material-ui/core/TableCell';    
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    overflowX: 'auto',
    padding: '10px',
  },

  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

function CustomizedTable(props) {
  const { classes } = props;
  const data = {
    "rowID": props.row,
    "siteName":"Chennai Pilot",
   "siteID":"site0001",
   "zoneID": props.zone,
}

return (
  <div className="pad" style={{paddingLeft: '15%'}}>
      <TableBody>
        { 
            Object.keys(data).map(key => (
              <TableRow>
                  <CustomTableCell>{key}</CustomTableCell>
                  <CustomTableCell>{data[key]}</CustomTableCell>
              </TableRow>
          ))
        }
      </TableBody>
  </div>
);
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);