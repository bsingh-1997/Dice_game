import React from 'react'
import styled from 'styled-components'


export const Button = styled.button`

color: aliceblue;
min-width: 220px;
height: 44px;
border: none;
border-radius: 5px;
padding-top: 10px;
padding-right: 18px;
padding-bottom: 10px;
padding-left: 18px;
background: rgba(0, 0, 0, 1);
border: 1px solid transparent ;
font-size: 16px;
transition: 0.4s background ease-in ;
cursor: pointer;
&:hover{
    background-color: white;
    border: 1px solid black ;
    color: black;
    transition: 0.3s background ease-in ;

}
`