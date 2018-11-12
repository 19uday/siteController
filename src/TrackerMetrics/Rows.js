import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import Row from './Row';

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 80px)',
    height: 'calc(100% - 80px)',
    paddingLeft: '40px',
    paddingTop: '10px',
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

class Rows extends Component {

    constructor(props){
        super(props);
    }

    state={
        noOfRows: [11,13,14],
    }

    rows = [];
    row1 = [];
    row2 = [];
    row3 = [];

    componentWillMount(){

        
        switch(this.props.zone)
        {
            case 'Zone1':
            {
                var zon = 0;
                break;
            }

            case 'Zone2':
            {
                var zon = 1;
                break;
            }

            case 'Zone3':
            {
                var zon = 2;
                break;
            }
        }
        console.log(this.props.zone,this.state.noOfRows[zon]);
            for(var j=0 ; j<this.state.noOfRows[zon] ; j++)
            {
                this.rows[j] = ( "Row" + (j+1) ); 
            }

        var k=0;

        for(j=0 ; j<this.state.noOfRows[zon] ; j++)
        {   
            if(k < 5)
            {
                this.row1[k] = this.rows[j];
                k++; 
            }

            else if(k < 10)
            {
                this.row2[k-5] = this.rows[j];
                k++;
            }

            else
            {
                this.row3[k-10] = this.rows[j];
                k++;
            }
        }
    }

    componentWillReceiveProps(nextProps)
    {
        if(this.props.zone !== nextProps.zone)
        {
            this.rows = [];
            this.row1 = [];
            this.row2 = [];
            this.row3 = [];

            switch(nextProps.zone)
            {
                case 'Zone1':
                {
                    var zon = 0;
                    break;
                }
    
                case 'Zone2':
                {
                    var zon = 1;
                    break;
                }
    
                case 'Zone3':
                {
                    var zon = 2;
                    break;
                }
            }
            console.log(nextProps.zone,this.state.noOfRows[zon]);
                for(var j=0 ; j<this.state.noOfRows[zon] ; j++)
                {
                    this.rows[j] = ( "Row" + (j+1) ); 
                }
    
            var k=0;
    
            for(j=0 ; j<this.state.noOfRows[zon] ; j++)
            {   
                if(k < 5)
                {
                    this.row1[k] = this.rows[j];
                    k++; 
                }
    
                else if(k < 10)
                {
                    this.row2[k-5] = this.rows[j];
                    k++;
                }
    
                else
                {
                    this.row3[k-10] = this.rows[j];
                    k++;
                }
            }
        }
    }

    render(){
        const { classes } = this.props;
        
        return (
            <div className={classes.root} >
            <Grid container spacing={24}>
                <Grid  item xs={4} >
                {this.row1.map(row => (
                    <Row row={row}/>
                ))}
                </Grid>

                <Grid item xs={4} >
                {this.row2.map(row => (
                    <Row row={row} />
                ))}
                </Grid>

                <Grid item xs={4} >
                {this.row3.map(row => (
                    <Row row={row} />
                ))}
                </Grid>

            </Grid>
            </div>
        );
    }
}

Rows.propTypes = {
  classes: PropTypes.object.isRequired,
};


  const mapStateToProps = (state) => {
    return { currentzone: state.tracker.currentzone, currentrow: state.tracker.currentrow };
  }


export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Rows));