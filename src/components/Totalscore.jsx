import React from 'react'
import styled from 'styled-components'

const Totalscore = ({score}) => {
  return (
    <Scorecontainer>
       
        <h1>{score}</h1>
        <p>Total Score</p>
     
    </Scorecontainer>
  )
}

export default Totalscore

const Scorecontainer =  styled.div`
max-width: 200px;
/* background-color: aqua; */
text-align: center;
    h1{
        font-size: 100px;
        line-height: 100px;
        margin: 0%;
    }
    p{
        margin: 0%;
        font-size: 24px;
        font-weight: 500px;
    }
`