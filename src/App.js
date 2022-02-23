import React from "react";

class App extends React.Component{

  state ={
    count:0,
  }
  
  add=()=>{
    this.setState(current => ({
      count: current.count +1
    }))
  }

  minus=()=>{
    this.setState({count: this.state.count - 1})
  }

  render(){
    return (
      <div>
        <div>
          this state number: {this.state.count}
        </div>
        <button onClick={this.add}>+++ PUSH +++</button>
        <button onClick={this.minus}>--- PUSH ---</button>
      </div>
    )
  }
}
export default App;
