import { Component } from 'react';

class ClassClick extends Component {

  clickHandler() {
    console.log("Clicked the button. Class.")
  }

  render() {
    return(
      <div>
        <button onClick={this.clickHandler}>Click me! (class)</button>
      </div>
    )
  }
}

export default ClassClick;