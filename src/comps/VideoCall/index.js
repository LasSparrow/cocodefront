import React , { useEffect , useState } from 'react'
import styled from "styled-components"
import Button from '../Button'
import { useSocket } from '../../hooks/useSocket'


export default function VideoCall(props){

    const [emit , on] = useSocket()

    const Webcam1 = styled.div``;

    const Webcam2 = styled.div``;

    const Webcams = styled.div`
    width:100%;
    height:150px;
    display:flex;
    justify-content:center;
    align-items:center;
    `  

    useEffect(() => {
        emit('room' , { message : 'hello'})
    } , [emit , on])

    return (
        <Webcams>
            <Webcam1>
            <video id="local-video" height="190" width="300"/>
            </Webcam1>
            <Webcam2>
            <video height="190px" />
            </Webcam2>
            <Button text="Start Call" /> 
        </Webcams>
    )
    
}