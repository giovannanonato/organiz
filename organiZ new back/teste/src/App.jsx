import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Content from './components/Content'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Content />
      </BrowserRouter>
    </div>
  )
}

export default App;