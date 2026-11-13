//import { useState } from 'react'
import './App.css'
import Products from './components/Products'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <header>FakeStore</header>
        <article>
          <Products />
        </article>
      <footer>Készítette: Szuda Tibor Szilveszter</footer>
    </>
  )
}

export default App
