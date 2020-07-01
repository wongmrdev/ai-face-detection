import React, { useEffect } from 'react'


const App = () => {
  
  useEffect( () => {
    return () => {
      const test = document.getElementById('test')
      test.style.backgroundImage = url('66221.jpg')
    };
  },)

  return (
    <>
      <header className="pv5 bg-gold black-80">
        <h1 className="mt0 mb1 tc">Create New App</h1>
        <div className="tc ttc">by the Qodesmith</div>
      </header>
      <div className="pt4 pb1 tc">Go save the world with JavaScript</div>
      <div className="tc">and edit <code>src/components/<span className="b">App.jsx</span></code>!</div>
      <video id="video" width='720px' height="560 px" autoPlay muted></video>
      <div id='test'><span>Hello World</span></div>
    </>

  )
}

export default App
