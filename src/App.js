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
      final: 0    
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
    } else if(stage === 'offer-input'){
      this.setState({final: value});
    }
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
