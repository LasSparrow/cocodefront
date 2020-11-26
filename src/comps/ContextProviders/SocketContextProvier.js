import React , {useState , useEffect} from 'react'
import  * as io from 'socket.io-client'
import {socketUrl} from '../../helpers/serverUrl'
import { useToken } from '../../hooks/useToken'
import socketContext from '../../contexts/socketContext'

export default function SocketContextProvider(props){

    const [socket , setSocket] = useState()

    useEffect(() => {
        // const serverUrl = 'ws://localhost:8080/'

        const newSocket = io(socketUrl, {
            secure: true,
            transports: ['websocket'],
          });

        setSocket(newSocket)
    }, [])

    return (
        <socketContext.Provider value={socket}>
            {props.children}
        </socketContext.Provider>   
    )
}