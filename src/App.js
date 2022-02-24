import React from "react";

class App extends React.Component{

  constructor(props){
    super(props)
  }

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
          {console.log('render')}
          this state number: {this.state.count}
        </div>
        <button onClick={this.add}>+++ PUSH +++</button>
        <button onClick={this.minus}>--- PUSH ---</button>
      </div>
    )
  }

  componentDidMount(){
    console.log('mount')
  }

  componentDidUpdate(){
    console.log('update')
  }
}
export default App;
