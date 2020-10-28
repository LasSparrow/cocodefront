import React, {useState} from 'react'; 
import styled from 'styled-components';

const SessionBox = styled.div`
    border: 1px solid #7B7B7B;
    max-width: 970px;
    max-height: 60px;
    border-radius:20px;
    display:flex;
    align-items: center;
    div {
       margin-left: 10px;
       padding: 10px;
       }
`;

const Icon = styled.div`
    float: left;
    display: flex;
    img {
        width: 20px;
        height: 20px;
    }
`;

const SessionDes = styled.div`
    background-color: #D6D6D6;
    max-width: 940px;
    max-height: 200px; 
    border-radius:20px;
    margin-top:10px;
    padding: 20px;
`;

const Session = ({SessionName, text1, text2, text3}) => {
    return <div>
            <SessionBox>
                <div>{SessionName}</div>
                <Icon>
                    <img src="/trash-solid.svg" />
                    <img src="/chevron_right-24px.svg" />
                </Icon>
            </SessionBox>
            <SessionDes>
                <div><b>Tutor:</b>{text1}</div>
                <div><b>Schedule Time:</b>{text2}</div>
                <div><b>Status:</b>{text3}</div>
            </SessionDes>
    </div>
}
    
    

Session.defaultProps = {
    SessionName:"Session Name",
    text1:"Tutor name",
    text2:"Date",
    text3:"In Progress/Unconfirmed/Finished"
}

export default Session; 