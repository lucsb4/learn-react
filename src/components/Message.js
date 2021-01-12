import React, { Component } from 'react';

class Message extends Component {

  constructor()
  {
    super();
    this.state = { 
      message: "Welcome visitor.",
    }
  }

  render() {
    
    const changeMessage = () => {
      this.setState({
        message: "Thanks for subscribing."
      })
    }

    return(
      <div>
        <p>{this.state.message}</p>
        <button onClick={changeMessage}>Subscribe</button>
      </div>
    )
  }
}

export default Message;