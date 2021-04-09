import CharacterEditor from './components/CharacterEditor'
import Footer from './components/Footer'
import React from 'react'

function App() {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          height: '40%',
          backgroundColor: 'hsl(195deg, 20%, 86%)',
        }}
      ></div>
      <CharacterEditor />
      <Footer />
    </>
  )
}

export default App
