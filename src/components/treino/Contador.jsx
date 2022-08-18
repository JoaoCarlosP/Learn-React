import React, { useState } from 'react'
import { useEffect } from 'react';

const Contador = (props) => {
  const [count, setCount] = useState(0)
  const width = useWidthSize()

  useEffect(() => {
    document.title = `Você clicou ${count} vezes!`
  })

  return (
    <>
      <h2>You clicked:</h2>
      <h3>{count} times</h3>
      <button onClick={handleClick => setCount(count + 1)}>Click</button><br />

      <input 
        label='Width'
        value={width} />
    </>
  );
}

function useWidthSize() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleWidth = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWidth)

    return () => window.removeEventListener('resize', handleWidth)
  }) 

  return width
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