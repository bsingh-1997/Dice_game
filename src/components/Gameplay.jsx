import React, { useState } from 'react'
import Totalscore from './Totalscore'
import Numberselector from './Numberselector'
import styled from 'styled-components'
import Rolldice from './Rolldice'
import { Button } from '../styled/Button'
import Rules from './Rules'

const Gameplay = () => {
    const [score,setScore]= useState(0)
    const [selected, setSelected] = useState()
    const [currentdice,setcurrentdice]= useState(1);
    const[error,seterror]= useState("")
    const[rule,setrule]=useState(false)
    const ruletoggle =()=>{
        // setrule(true)
        setrule(prev=>!prev)
    }
    const generateRandomnumber = (min,max)=>{
        console.log(Math.floor(Math.random() * (max - min + 1)) + min)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const reset =()=>{
        setScore(0)
    }

    const roleDice = () =>{
        if(!selected){
        seterror("Please select a number")
         return;
        }
        // seterror("")
        const randomnumber = generateRandomnumber(1,6);
        setcurrentdice((prev)=>randomnumber)


        if(selected == randomnumber){
            setScore(prev=>prev+randomnumber)
        }else{
            setScore((prev)=>prev-2)
        }
        setSelected(undefined)

    }


  return (
    <MainContainer>
        <div className='top_section'>

       <Totalscore score={score}/>
       <Numberselector error={error} seterror={seterror} selected={selected} setSelected={setSelected}/>
        </div>
        <Rolldice currentdice={currentdice} roleDice={roleDice}/>
        <div className="btns">
            <Button onClick={reset}>Reset</Button>
            {/* <Button onClick={ruletoggle}>Show Rules</Button> */}
            <Button onClick={ruletoggle}>{rule?"Hide":"Show"} Rules</Button>
        </div>
        {/* {rule==true?<Rules/>:""} */}
        {rule && <Rules/>}
        {/* <Rules/> */}
    </MainContainer>
  )
}

export default Gameplay

const MainContainer = styled.div`
    .top_section{
        display: flex;
        justify-content: space-around;
        padding-top: 70px;
        /* align-items: center; */
    }
    .btns{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* max-width: 220px; */
        align-items: center;
        gap: 10px;
}
`