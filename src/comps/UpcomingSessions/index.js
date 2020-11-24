import React  , {useEffect , useState} from 'react'; 
import styled from 'styled-components'; 
import SingleSession from './SingleSession'
import { useToken } from '../../hooks/useToken'
import getUserAttend from '../../api/attend/getUserAttend'

const USTabMain = styled.div`
    max-width: 246px; 
    max-height: 176px; 
    display: flex; 
    flex-direction: column; 

    @media (max-width: 1024px) {
        margin-right: 20px;
    }   
`;

const USText = styled.div`
    max-width: 200px; 
    max-height: 22px; 
    text-align: start;
    padding-left: 5px;
    font-size: 18px; 
    font-weight: 600; 
    color: #011F3B; 
    margin-bottom: 15px; 
    cursor: pointer;

    @media (max-width: 1024px) {
        margin-bottom: 0;
    }   
`; 

const DDIcon = styled.img`
    max-height: 20px;
    max-width: 20px;
    align-self: center;
    display: none;
    margin-left: 10px;

    @media (max-width: 1024px) {
        display: inline-flex;
    }   
`;

const USTab = () => {

    
    const [sessions , setSessions] = useState([])

    const [token] = useToken()

    useEffect(() => {
        const fetch = async () => {
            const sessionsData = await getUserAttend(token)
            setSessions(sessionsData)
        }
        fetch()
    } , [token])

    return (
        <USTabMain>

            <USText>Upcoming Sessions
                <DDIcon src="/DropdownIcon.png"/>
            </USText>
            
            <SingleSession />
            

        </USTabMain>
    )
}

USTab.defaultProps = {
}

export default USTab; 