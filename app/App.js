import React from 'react'
import './index.scss'
import '@babel/polyfill'
import ComponentLibrary from './components/_componentLibrary'

function App() {
  return (
    <>
      <h1>Should I Ask For Gender</h1>
      <ComponentLibrary />
    </>
  )
}

export default App
