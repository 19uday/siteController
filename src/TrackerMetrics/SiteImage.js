import React, {Component} from 'react';
import ImageMapper from 'react-image-mapper';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalData from './ModalData';
import { siteImageActions } from '../_actions';
import { trackerActions } from '../_actions';

function getModalStyle(){
  const top = 20;
  const left = 10;

  return {
    top: `${top}%`,
    left: `${left}%`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 120,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

const ITEM_HEIGHT = 48;

class SiteImage extends Component{

  state = {
    widt:500,
    start: false,
    open: false,
    currentzone: 0,
    currentrow:"",
    open1: false,
    anchorEl: null,
    cordssite: [],
    siteUrl: "",

  };
  
  wids = [];

  componentDidMount(){
    this.props.getsiteImage();
    const rect = this.contentDiv.getBoundingClientRect();
    console.log(rect.width);
    console.log(rect.height);
    this.state.getDim = {
        width: rect.width,
        height: rect.height,
    }
  }

  componentWillReceiveProps(nextProps){
                if(this.props.siteImage !== nextProps.siteImage){
                    console.log(nextProps.siteImage.coOrdinates);
                    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                    this.wids=[];
                    console.log(this.state.getDim.width);
                    this.widw = this.state.getDim.width;
                    this.widh = this.state.getDim.height;
                    for(var i=0; i<nextProps.siteImage.coOrdinates.length; i++){
                            var widarray=[];
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[0].x1*(this.widw/533))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[1].y1*(this.widh/329))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[2].x2*(this.widw/533))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[3].y2*(this.widh/329))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[4].x3*(this.widw/533))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[5].y3*(this.widh/329))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[6].x4*(this.widw/533))));
                            widarray.push(Math.floor(parseFloat(nextProps.siteImage.coOrdinates[i].cord[7].y4*(this.widh/329))));
                            this.wids.push(widarray);
                    }
                        
                    var area=[];
                    var currr = this.curr_picc;
                    for(var i=0; i<nextProps.siteImage.coOrdinates.length; i++){
                            var obj = { _id: i , shape: "poly", coords: [this.wids[i][0],this.wids[i][1],this.wids[i][2],this.wids[i][3],this.wids[i][4],this.wids[i][5],this.wids[i][6],this.wids[i][7]] }
                            area.push(obj);
                    }
                    
                    console.log(area);
                    
                    this.MAP = {
                            name: "my-map",
                            areas: area
                    }
                    this.setState({start: true});
                }
}

  MAP={};

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

clicked=(area)=>{
  console.log("clicked" + area._id);
  this.props.setzone("Zone" + (area._id + 1));
}


render(){
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { rows } = this.state;
    const { classes } = this.props;
			
    return(
      <div
      style={{ width: "90%", height: "750%", paddingLeft: '15px'}}
      ref={ref => {
          this.contentDiv = ref;
      }}
      
  >  			
          { this.state.start === true &&
            <div>
              <div > 
                <ImageMapper className="imagediv" src={require('./sun.png')} active = {true} fillColor='rgba(0, 255, 0, 0.5)' map={this.MAP} width={this.widw} height={this.widh}
                  onClick={area => this.clicked(area)}
                />
              </div>
              
              <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
                >
                <div style={getModalStyle()} className={classes.paper}>
                    <ModalData zone={this.state.currentzone} />
                </div>
              
              </Modal>
            
            </div>
          }
      </div>
  );
  }
}


SiteImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const { loaded2, siteImage } = state.siteImage;
  return {
    siteImage,
      loaded2
  };
}

const mapDispatchToProps = (dispatch) => ({
  getsiteImage: () => {
      dispatch(siteImageActions.getsiteImage())
  },

  setzone: (zone) => {
    dispatch(trackerActions.setzone(zone));
  }

})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(SiteImage));