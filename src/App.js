import React from 'react';
import Container from './Components/Container';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {    
      applications: 500,
      recruiterscreen: 0,
      phoneinterview: 0,
      onsiteinterview: 0,
      offer: 0,
      final: 0,
      isMarked: false,
      marks: [
        {
          value: 0,
          label: '0%',
        },
        {
          value: 0,
          label: '25%',
        },
        {
          value: 0,
          label: '75%',
        },
        {
          value: 0,
          label: '100%',
        },]   
    };
    this.handleStageChange = this.handleStageChange.bind(this);
  }
  

  handleStageChange = (value, stage) => {
    if(stage === 'applications-input'){
      this.setState({recruiterscreen: value});
    } else if(stage === 'recruiterscreen-input'){
      this.setState({phoneinterview: value});
    } else if(stage === 'phoneinterview-input'){
      this.setState({onsiteinterview: value});
    } else if(stage === 'onsiteinterview-input'){
      this.setState({offer: value});      
      if(value) {
        const newMarks = this.updatedMarks(value);
        this.setState({isMarked: true});
        this.setState({marks: []});
        this.setState({marks: newMarks});
      } else {        
        this.setState({isMarked: false});        
      };    
    } else if(stage === 'offer-input'){
      this.setState({final: value});      
    }
  }
  updatedMarks(value) {
    let setOfMarks = new Set([((value/100) * 25).toFixed(), ((value/100) * 50).toFixed(), ((value/100) * 75).toFixed(), ((value/100) * 100).toFixed()]);
    setOfMarks = Array.from(setOfMarks);
    let newMarks = [{ value: 0, label: '0%',}]
    newMarks.push({ value: ((value/100) * 100).toFixed(), label: '100%'});
    setOfMarks.forEach((el,idx) => {
      console.log(el, idx, typeof ((el/100) * 50).toFixed());
      if(idx === 0 && ((el/100) * 25).toFixed() !== '0') {
        newMarks.push({ value: ((el/100) * 25).toFixed(), label: '25%'});
      }           
      if(idx === 1 && (((el/100) * 50).toFixed() !== Number(el).toFixed())){        
        newMarks.push({ value: ((el/100) * 50).toFixed(), label: '50%'});
      }
      if(idx === 2 && ((el/100) * 75).toFixed() !== Number(el).toFixed()){
        newMarks.push({ value: ((el/100) * 75).toFixed(), label: '75%'}); 
      }            
      console.log(newMarks);
    })                    
    return newMarks;
  }

  render() {    
    return (      
        <div className="App">
          <Container propState={this.state} stageChange={this.handleStageChange}/>
        </div>        
    );
  }

}

export default App;
