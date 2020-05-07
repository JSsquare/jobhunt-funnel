import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import '../App.css';

class Container extends React.Component {
    constructor(props) {        
        super(props);
        this.localValues = {
            applicationValue: 0,
            recruiterscreenValue: 0,
            phoneinterviewValue: 0,
            onsiteinterviewValue: 0,
            offerValue: 0,
        }; 
        this.stageChange = this.stageChange.bind(this);     
    }
    stageChange = sliderName => (e, newValue) => {        
        if(sliderName === 'applications-input') {
            this.localValues.applicationValue = newValue;
        } else if(sliderName === 'recruiterscreen-input') {
            this.localValues.recruiterscreenValue = newValue;
        } else if(sliderName === 'phoneinterview-input') {
            this.localValues.phoneinterviewValue = newValue;
        } else if(sliderName === 'onsiteinterview-input') {
            this.localValues.onsiteinterviewValue = newValue;
        } else if(sliderName === 'offer-input') {
            this.localValues.offerValue = newValue;
        }
        this.props.stageChange(newValue, sliderName);
    }    
    render(){        
        return ( 
            <Paper elevation={6} className="paper-container">              
             <Grid container spacing={3} xs={10}  alignItems="center" justify="center" >
                <Grid item xs={12} >
                    <Paper elevation={3} className="paper-stage"> 
                        <Grid container spacing={2}>
                            <Grid item xs={12}>How Many Jobs Did I Apply? <span className="digit">{this.localValues.applicationValue}</span></Grid>
                            <Grid item xs={12}><Slider id="applications-input"
                                min={0}
                                max={500}
                                value={this.localValues.applicationValue}
                                onChange={this.stageChange('applications-input')}/>                        
                            </Grid>
                        </Grid>   
                    </Paper>
               </Grid> 

            <Grid item xs={12}>
                <Paper elevation={3} className="paper-stage">
                <Grid container spacing={2}>                    
                    <Grid item xs={12}>Out Of <span className="digit">{this.props.propState.recruiterscreen}</span> Applied. How Many Do You Think Will Advance To A Recruiter Screen?</Grid>
                        <Slider id="recruiterscreen-input"
                                min={0}
                                max={this.props.propState.recruiterscreen}
                                value={this.localValues.recruiterscreenValue}
                                onChange={this.stageChange('recruiterscreen-input')}/>
                </Grid>            
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper elevation={3} className="paper-stage">
                <Grid container spacing={2}>  
                    <Grid item xs={12}>Out Of {this.props.propState.phoneinterview} Recruiter Screens. How Many Do You Think Will Advance To Tech/Phone Interview?</Grid>
                    <Grid item xs={12}><Slider id="phoneinterview-input"
                            min={0}
                            max={this.props.propState.phoneinterview}
                            value={this.localValues.phoneinterviewValue}
                            onChange={this.stageChange('phoneinterview-input')}/>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>

            <Grid item xs={12} >
                <Paper elevation={3} className="paper-stage">
                <Grid container spacing={2}>
                    <Grid item xs={12}>Out Of {this.props.propState.onsiteinterview} Tech/Phone Interviews. How Many Do You Think Will Advance To An Onsite Interview?</Grid>
                    <Grid item xs={12}><Slider id="onsiteinterview-input"
                            min={0}
                            max={this.props.propState.onsiteinterview}
                            value={this.localValues.onsiteinterviewValue}                            
                            onChange={this.stageChange('onsiteinterview-input')}/>
                    </Grid>
                </Grid>
                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper elevation={3} className="paper-stage">
                <Grid container spacing={2}>
                    <Grid item xs={12}>Now You Have {this.props.propState.offer} Onsite Interviews. What's Your Gut Feeling To Advance Through?</Grid>
                    <Grid item xs={12}><Slider id="offer-input"
                                min={0}
                                max={this.props.propState.offer}
                                value={this.localValues.offerValue}
                                marks={this.props.propState.isMarked ? this.props.propState.marks : null}
                                valueLabelDisplay="auto"
                                step={null}
                                onChange={this.stageChange('offer-input')}/> 
                    </Grid>              
                    </Grid>
                </Paper>
            </Grid>

            {this.props.propState.final > 0 ? 
                <p>YAY! You Have {this.props.propState.final} Offer{this.props.propState.final > 1 ? 's': null}</p>
                : null
            }                  
            </Grid>
            </Paper>     
        )
    }
}

export default Container;