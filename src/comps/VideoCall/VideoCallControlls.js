import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhone , faPhoneSlash } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const ButtonsContainer = styled.div`
    button{
        width:50px;
        height:50px;
        border:none;
        border-radius:50%;
        color:white;
        transition:all 0.4s;
        cursor:pointer;
    }
    button:hover{
        transform: scale(1.3);
    }
    .start{
        background-color:#6AA694;
    }
    .stop{
        background-color:#D81E5B;
    }
`

export default function VideoCallControlls(props){
    return props.callStarted 
    ? <ButtonsContainer> <button className="stop" onClick={props.handleStopCall}> <FontAwesomeIcon icon={faPhoneSlash} /> </button> </ButtonsContainer> 
    : <ButtonsContainer> <button className="start" onClick={props.handleCall}> <FontAwesomeIcon icon={faPhone} /> </button> </ButtonsContainer>
}