import React, { Component } from 'react';
import './App.css';
import Child from './components/child';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
            colors: ['red', 'green', 'blue', 'orange', 'yellow', 'lightgreen'],
            current: [0,1,2]
    };
    //all event handling functions should be binded to call from the run time
    this.changeColors = this.changeColors.bind(this);
  }
  setColors() {
    for (let x in [0, 1, 2]) {
      this.state.current[x] = Math.floor(Math.random() * 6);
    }
  }
  // componentWillMount - will be called once the component is mounted i.e after constructor is created
  componentWillMount() { //deprecated.
    this.setColors();

  }

  
  changeColors() {
    //alert("Change Colors")
    this.setColors();
    this.setState(this.state);
  }


  render() {
    let code = this.state.colors.map(this.state.current.map((x)=><Child colors={x}></Child>))
    return (
      <div className="App">
        <h1>First React App</h1>
        <button onClick={this.changeColors}>Change the Colors</button>
        {/* <Child color={this.state.colors[this.state.current[0]]} textcolor="lightblue" />
        <Child color={this.state.colors[this.state.current[1]]} textcolor="red" />
        <Child color={this.state.colors[this.state.current[2]]} textcolor="white" /> */}
        {code}
      </div>
    );
  }
}

export default App;
