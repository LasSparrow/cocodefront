import React , { useEffect , useState } from 'react'
import styled from "styled-components"
import Button from '../Button'
import { useSocket } from '../../hooks/useSocket'
import bootstrapRTC from '../../helpers/webRTC'
import { getUserMedia , setMedia } from '../../helpers/webRTC/userMedia'


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
    


    const localVideoElement = document.querySelector('#local-video')
    const remoteVideoElement = document.querySelector('#remote-video')

    const setLocalMedia = (stream) => {
        setMedia(localVideoElement , stream)
    }
    
    const setRemoteMedia = (stream) => {
        setMedia(remoteVideoElement , stream)
    }

    
    const rtcConfig =  {
        getUserMedia,
        setLocalMedia,
        setRemoteMedia,
        socket : { emit , on },
        uuid : props.uuid
    }
    const {makeOffer} = bootstrapRTC(rtcConfig)

    
    useEffect(() => {
        emit('room' , { uuid : props.uuid})    
    } , [emit , on , props.uuid])

    // props.uuid , emit , on
    return (
        <Webcams>
            <Webcam1>
            <video id="local-video" height="190" width="300"/>
            </Webcam1>
            <Webcam2>
            <video id="remote-video" height="190" width="300" />
            </Webcam2>
            <Button text="Start Call" onClick={async e => await makeOffer()} /> 
        </Webcams>
    )
    
}