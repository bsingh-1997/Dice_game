import React, { useState } from 'react'
import styled from 'styled-components'

const Rolldice = ({roleDice,currentdice}) => {
   

  


  return (
    <Dicecontainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${currentdice}.png`}/>
      </div>
      <p>Click on dice to roll</p>
    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
    .p{
        font-size: 24px;

    }
    .dice{
        cursor: pointer;
    }
`