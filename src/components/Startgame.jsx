import React from 'react'
import styled from 'styled-components'
import { Button } from '../styled/Button'
import dices from '../assets/dices.png'
const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
            {/* <img src='/images/dices.png'/> */}
            <img src={dices}/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default Startgame

const Container = styled.div`
    /* background-color: red; */
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
    
        h1{
            font-size: 96px;
            white-space: nowrap;
        }
    }

`
