import React, { useState } from 'react'
import styled from 'styled-components'

import dice1 from '../assets/dice/dice_1.png';
import dice2 from '../assets/dice/dice_2.png';
import dice3 from '../assets/dice/dice_3.png';
import dice4 from '../assets/dice/dice_4.png';
import dice5 from '../assets/dice/dice_5.png';
import dice6 from '../assets/dice/dice_6.png';

const diceImages = {
    1: dice1,
    2: dice2,
    3: dice3,
    4: dice4,
    5: dice5,
    6: dice6,
  };

const Rolldice = ({roleDice,currentdice}) => {
   

  


  return (
    <Dicecontainer>
      <div className='dice' onClick={roleDice}>
        {/* <img src={`/images/dice/dice_${currentdice}.png`}/> */}
        {/* <img src={`dice${currentdice}`}/> */}
        <img src={diceImages[currentdice]} alt={`Dice ${currentdice}`} />

        {/* <img src={dice{currentdice}}/> */}
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