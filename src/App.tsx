import React, { useState } from 'react'
import logo from './assets/logo.svg'
import './styles/App.css'
import { Container } from './components/container'
import { ButtonCountClick } from './components/ButtonCountClick'

function App() {
  const [count, SetCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello word</h2>
        <ButtonCountClick Function={() => SetCount(count + 1)} />
        <Container children={count} />
      </header>
    </div>
  )
}

export default App
