import React, { useState } from 'react'
import { useEffect } from 'react';

const Contador = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Você clicou ${count} vezes!`
  })

  return (
    <>
      <h2>You clicked:</h2>
      <h3>{count} times</h3>
      <button onClick={handleClick => setCount(count + 1)}>Click</button>
    </>
  );
}

// class Contador extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   componentDidMount() {
//     document.title = `Você clicou ${this.state.count} vezes`
//   }

//   componentDidUpdate() {
//     document.title = `Clicou ${this.state.count} vezes!`
//   }

//   render(){
//     return (
//       <>
//         <h2>You clicked {this.state.count} times!</h2>
//         <button onClick={handleClick => this.setState({count: this.state.count + 1})}>Click</button>
//       </>
//     )
//   }
// }

export default Contador;