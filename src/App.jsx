import { useState } from 'react'
import './App.css'
import { LeftBar,MainContent,SideBar} from './Components/index.js'

function App() {
  
  return (
    <div className="App">
      <SideBar/>
      <MainContent/>
      <LeftBar/>
    </div>
  )
}

export default App
