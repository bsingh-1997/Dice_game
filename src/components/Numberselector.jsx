import React, { useState } from 'react'
import styled from 'styled-components'

const Numberselector = ({selected,setSelected,error,seterror}) => {

    const arrnumber = [1,2,3,4,5,6]
    const numberselectorhandler=(value)=>{
        setSelected(value)
        seterror("")
    }
    
  return (
    <Numberselectorcontainer>
        <p className='err'>{error}</p>
    <div className='flex'>
        {
            arrnumber.map((value,i)=>(
                <Box isSelected={value==selected} key={i} onClick={()=>numberselectorhandler(value)}>{value}</Box>
            ))
        }
        
    </div>
    <p>Select Number</p>
        </Numberselectorcontainer>
  )
}

export default Numberselector

const Numberselectorcontainer = styled.div`
    /* background-color:red; */
    align-items: end;
    flex-direction: column;
    display: flex;
    .flex{
        display: flex;
        gap: 24px;
    }
    .p{
        font-size: 24px;
        font-weight: 700px;
    }
    .err{
        color: red;
        margin: 0;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border:1px solid black;
    display: grid;
    place-items:center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props=>(props.isSelected?"black":"white"))};
    color: ${(props=>(props.isSelected?"white":"black"))};
`