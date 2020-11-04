import React, {useState} from 'react'; 
import styled from 'styled-components';

const SessionBox = styled.div`
    border: 1px solid #7B7B7B;
    width: 820px;
    max-height: 60px;
    border-radius:20px;
    display:flex;
    align-items: center;
    cursor:pointer;
    background-color: #FFFFFF;
    div {
       margin-left: 10px;
       padding: 5px;
       flex-grow:1;
    }
`;

const Icon = styled.div`
    display: flex;
    text-align:right;
    img {
        width: 20px;
        height: 20px;
    }
`;

const SessionDes = styled.div`
    background-color: #D6D6D6;
    max-width: 790px;
    border-radius:20px;
    margin-top:10px;
    padding: 20px;
    display:${props=>props.expanded ? "block" : "hidden"};
    opacity:${props=>props.expanded ? 1 : 0};
    height:${props=>props.expanded ? "auto" : "0px"};
    transition:opacity 0.3s;
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.5s;
`;

const Session = ({SessionName, text1, text2, text3}) => {

    const [expanded, setExpanded] = useState(false);

    return <div>
            <SessionBox onClick={()=>{setExpanded(!expanded);}}>
                <div>{SessionName}</div>
                <Icon>
                    <div><img src="/trash-solid.svg" /></div>
                    <div><RotateImg expanded={expanded} src="/chevron_right-24px.svg" /></div>
                </Icon>
            </SessionBox>
            <SessionDes expanded={expanded}>
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
    text3:"In Progress/Unconfirmed/Finished",
    expand: false
}

export default Session; 