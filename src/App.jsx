import { useState } from 'react'
import Description from './components/Description'
import Hobbies from './components/Hobbies'
import NetworksBar from './components/NetworksBar'
import Experience from './components/Experience'
import AboutCryto from './components/AboutCryto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NetworksBar />
      <Description />
      <Experience/>
      <Hobbies />
      <AboutCryto/>
    </>
  )
}

export default App
