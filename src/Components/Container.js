import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";
import Slider from '@material-ui/core/Slider';
import Input from "@material-ui/core/Input";
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
    inputStageChange = event => {
        if(event.target.id === 'applications-stage'){
            this.localValues.applicationValue = event.target.value;
            this.props.stageChange(event.target.value, 'applications-input');
        } else if(event.target.id === 'recruiterscreen-stage'){
            this.localValues.recruiterscreenValue = event.target.value;
            this.props.stageChange(event.target.value, 'recruiterscreen-input');
        } else if(event.target.id === 'phoneinterview-stage'){
            this.localValues.phoneinterviewValue = event.target.value;
            this.props.stageChange(event.target.value, 'phoneinterview-input');
        } else if(event.target.id === 'onsiteinterview-stage'){
            this.localValues.onsiteinterviewValue = event.target.value;
            this.props.stageChange(event.target.value, 'onsiteinterview-input');
        } else if(event.target.id === 'offer-stage'){
            this.localValues.offerValue = event.target.value;
            this.props.stageChange(event.target.value, 'offer-input');
        }

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
                <Grid item xs={12} className="stage-grid">
                    <Paper elevation={3} className="paper-stage"> 
                        <Grid container spacing={2}>
                            <Grid item xs={12}>How Many <span className="stage">Number of Jobs Did I Apply </span>? <span className="digit">{this.localValues.applicationValue}</span></Grid>
                            <Grid item xs={10}><Slider id="applications-input"
                                min={0}
                                max={500}
                                value={this.localValues.applicationValue}
                                onChange={this.stageChange('applications-input')}/>                        
                            </Grid>
                            <Grid item xs={2}>
                                <Input                                    
                                    value={this.localValues.applicationValue}
                                    margin="dense"
                                    id="applications-stage"
                                    onChange={this.inputStageChange}
                                    onBlur={this.inputStageChange}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 500,
                                    type: "number",
                                    "aria-labelledby": "input-slider"
                                    }}
                                />
                            </Grid>
                        </Grid>   
                    </Paper>
               </Grid> 

                <Grid item xs={12} className="stage-grid">
                <Paper elevation={3} className="paper-stage">
                  <Grid container spacing={2}>                    
                    <Grid item xs={12}>Out Of <span className="digit">{this.props.propState.recruiterscreen}</span> Applied. How Many Do You Think Will Advance To A <span className="stage">Recruiter Screen?</span></Grid>                    
                    <Grid item xs={10}><Slider id="recruiterscreen-input"
                                min={0}
                                max={this.props.propState.recruiterscreen}
                                value={this.localValues.recruiterscreenValue}
                                onChange={this.stageChange('recruiterscreen-input')}/>
                    </Grid>   
                    <Grid item xs={2}>
                                <Input                                    
                                    value={this.localValues.recruiterscreenValue}
                                    margin="dense"
                                    id="recruiterscreen-stage"
                                    onChange={this.inputStageChange}
                                    onBlur={this.inputStageChange}
                                    inputProps={{
                                    step: 10,
                                    min: 0,
                                    max: 500,
                                    type: "number",
                                    "aria-labelledby": "input-slider"
                                    }}
                                />                                                        
                </Grid>            
                </Grid>
                </Paper>                
                </Grid>
            
            <Grid item xs={12} className="stage-grid">
                <Paper elevation={3} className="paper-stage">
                <Grid container spacing={2}>  
                    <Grid item xs={12}>Out Of <span className="digit">{this.props.propState.phoneinterview}</span> Recruiter Screens. How Many Do You Think Will Advance To <span className="stage">Tech/Phone Interview?</span></Grid>
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
                    <Grid item xs={12}>Out Of <span className="digit">{this.props.propState.onsiteinterview}</span> Tech/Phone Interviews. How Many Do You Think Will Advance To An <span className="stage">Onsite Interview?</span></Grid>
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
                    <Grid item xs={12}>Now You Have <span className="digit">{this.props.propState.offer}</span> Onsite Interviews. <span className="stage"> What's Your Gut Feeling</span> To Advance Through?</Grid>
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
            </Grid>
            </Paper>     
        )
    }
}

export default Container;