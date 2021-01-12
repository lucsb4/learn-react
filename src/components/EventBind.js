import { Component } from 'react';

class EventBind extends Component {

  constructor(props)
  {
    super(props);

    this.state = {
      message: "hello"
    }

    // this.clickHandler = this.clickHandler.bind(this);
  }

  // clickHandler() {
  //   console.log(this);
  //   this.setState({
  //     message: "Goodbye!"
  //   })
  // }

  clickHandler = () => {
    this.setState({
      message: "Goodbye!"
    })
  }

  render() {
    return(
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me!</button> */}
        {/* <button onClick={() => this.clickHandler()}>Click me!</button> */}
        <button onClick={this.clickHandler}>Click me!</button>
      </div>
    )
  }
}

export default EventBind;