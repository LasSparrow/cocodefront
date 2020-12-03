import React , { useEffect } from 'react'
import getSesion from '../../api/session/getSession'
import { useToken } from '../../hooks/useToken'
import startSession from '../../api/session/startSession'
import Button from '../../comps/Button'



export default function SessionNotStarted(props){
    
    const [token,] = useToken()

    const startSessionHandler = async (e) => {
        e.preventDefault()
        await startSession(token , props.uuid)
    }


    useEffect(() => {
        const interval = setInterval(async() => {
            const data = await getSesion(token , props.uuid)
            if(data.isStarted){
              props.setSession(data)
            }
        } , 5000)
  
        return () => clearInterval(interval)
    } , [])

    if(props.session.isTutor){
        //Give the tutor the option to start the session
        return (
            <div>
                <Button onClick={startSessionHandler} text={"Start this session"}></Button>
            </div>
        )
    }else{
        //Let the student know that the session is not started yet
        return (
            <div>
                <h1>Hey student wait for the session</h1>
            </div>
        )
    }
}