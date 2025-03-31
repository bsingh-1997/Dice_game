import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <Rulescontainer>
    <h2>How to play dice game</h2>
    <p>Select any number</p>
    <p>Click on dice image</p>
    <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
    <p>If you get wrong guess then two points will be deducted</p>
    </Rulescontainer>
  )
}

export default Rules

const Rulescontainer = styled.div`
background-color: rgba(251, 241, 241, 1);
width: 800px;
display: flex;
flex-direction: column;
align-items: left;
/* justify-content: left; */
margin: auto;
margin-top: 100px;
margin-bottom: 100px;
padding: 16px;

p{
    margin: 5px;
}
h2{
    margin: 15px;
}
`
