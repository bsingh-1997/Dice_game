import styled from 'styled-components'
import Startgame from './components/Startgame'
import { useState } from 'react'
import Gameplay from './components/Gameplay'

const Button = styled.button`
background-color:black;
color: white;
padding:10px;
`

function App() {
  const[isGamestarted,setIsgamestarted] = useState(false)
  const toggleGameplay=()=>{
    setIsgamestarted((prev)=> !prev);
  }
  return (
    <>
      {
        isGamestarted ? <Gameplay/>:<Startgame toggle={toggleGameplay}/>
      }
      

    </>
  )
}

export default App
