function FunctionClick() {

  const clickHandler = () => {
    console.log("Button clicked.")
  }

  return(
    <div>
      <button onClick={clickHandler}>Click me!</button>
    </div>
  )
}

export default FunctionClick;