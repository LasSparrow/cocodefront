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
    const [localStream , setLocalStream] = useState(new MediaStream())
    const [remoteStream , setRemoteStream] = useState(new MediaStream())

    useEffect(() => {
        document.querySelector('#local-video').srcObject = localStream || new MediaStream()
        document.querySelector('#remote-video').srcObject = remoteStream || new MediaStream()

    } , [localStream , setLocalStream , remoteStream , setRemoteStream])

    const handleCall = async (e) => {
        await makeOffer()
        // setLocalStream(await navigator.mediaDevices.getUserMedia({video : true}))
    }    

    const localVideoElement = document.querySelector('#local-video')
    const remoteVideoElement = document.querySelector('#remote-video')

    const setLocalMedia = (stream) => {
        setLocalStream(stream)
    }
    
    const setRemoteMedia = (stream) => {
        setRemoteStream(stream)
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

    return (
        <Webcams>
            <Webcam1>
            <video id="local-video" autoPlay preload="auto" playsInline> Start streaming </video>
            </Webcam1>
            <Webcam2>
            <video id="remote-video" autoPlay  preload="auto" playsInline></video>
            </Webcam2>
            <Button text="Start Call" onClick={handleCall} /> 
        </Webcams>
    )
    
}