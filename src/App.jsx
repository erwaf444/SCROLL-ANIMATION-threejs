import { useState } from 'react'
import './App.css'
import {Canvas} from '@react-three/fiber'
import {Experience} from "./componenets/Experience";

function App() {
  return (
    <Canvas camera={{
      fov:54,
      position:[2.3,1.5,2.3],
    }}>
      <Experience/>
    </Canvas>
  )
}

export default App
