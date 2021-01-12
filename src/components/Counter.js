import React, { Component } from 'react';

class Counter extends Component {

  constructor()
  {
    super();
    this.state = {
      count: 0,
    }
  }

  render() {

    const { count } = this.state;

    const increment = () => {
      // this.setState({count: count + 1
      // }, () => { console.log("Callback: " + this.state.count) } )
      
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }), () => console.log("Callback: " + this.state.count))
    }

    // Will not increment five times with the commented code above
    // This happens because React groups multiple setState calls into a
    // single update for better performance.
    // So the callsbacks are called and the setState is called only one time.
    // const incrementFive = () => {
    //   increment();
    //   increment();
    //   increment();
    //   increment();
    //   increment();
    // }

    return(
      <div>
        <p>Count: {count}</p>
        <button onClick={() => increment()}>Add one!</button>
      </div>
    )
  }
}

export default Counter;