import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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
              <Grid container spacing={3} sm={6}   alignItems="center" justify="center" >
              <Grid item xs={12}>Number Of Jobs I Applied {this.localValues.applicationValue}              
                  <Slider id="applications-input"
                      min={0}
                      max={500}
                      value={this.localValues.applicationValue}
                      onChange={this.stageChange('applications-input')}/>
               </Grid>       

            <Grid item xs={12}>Out Of {this.props.propState.recruiterscreen} Applied. How Many Do You Think Will Advance To A Recruiter Screen?            
             <Slider id="recruiterscreen-input"
                     min={0}
                     max={this.props.propState.recruiterscreen}
                     value={this.localValues.recruiterscreenValue}
                     onChange={this.stageChange('recruiterscreen-input')}/>
            </Grid>
            <Grid item xs={12}>Out Of {this.props.propState.phoneinterview} Recruiter Screens. How Many Do You Think Will Advance To Tech/Phone Interview?
            <Slider id="phoneinterview-input"
                    min={0}
                    max={this.props.propState.phoneinterview}
                    value={this.localValues.phoneinterviewValue}
                    onChange={this.stageChange('phoneinterview-input')}/>
            </Grid>

            <Grid item xs={12}>Out Of {this.props.propState.onsiteinterview} Tech/Phone Interview. How Many Do You Think Will Advance To An Onsite Interview?
            <Slider id="onsiteinterview-input"
                    min={0}
                    max={this.props.propState.onsiteinterview}
                    value={this.localValues.onsiteinterviewValue}
                    onChange={this.stageChange('onsiteinterview-input')}/>
            </Grid>

            <Grid item xs={12}>You Have {this.props.propState.offer} Onsites. What Is Your Gut Feeling?
            <Slider id="offer-input"
                    min={0}
                    max={this.props.propState.offer}
                    value={this.localValues.offerValue}
                    onChange={this.stageChange('offer-input')}/>
            </Grid>

            {this.props.propState.final > 0 ? 
                <p>YAY! You Have {this.props.propState.final} Offer{this.props.propState.final > 1 ? 's': null}</p>
                : null
            }                  
            </Grid>        
        )
    }
}

export default Container;