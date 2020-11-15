import React, {useState} from 'react'; 
import styled from "styled-components";

const ProfileCon = styled.div`

`;

const TitleName = styled.div`
    border-bottom: 1px solid black;
    display:flex;
    width:370px;
    height:42px;
    font-size:20px; 
    align-items: center;
    div {
        margin-top:19px;
        text-align:center;
        flex-grow:1;
        box-shadow: ${props=>props.clicked ?  "none" : "0 10px 8px -8px black"};
        border-right:${props=>props.clicked ?  "none" : "1px solid black"};
        height:22px;
        box-sizing:border-box;
        align-items: center;
        cursor:pointer;
    }
    div:hover {
        box-shadow:0 10px 8px -8px black;
    }
`;

const Details = styled.div`

`;

const UserProfile = ({}) => {
    const[clicked, setClicked] = useState(1);

    return <ProfileCon>
        <TitleName>
            <div clicked={clicked === 1} onClick={() => {
                setClicked(1);
            }}>
                Education
            </div>
            <div clicked={clicked === 2} onClick={() => {
                setClicked(2);
            }}>
                Experience
            </div>
            <div clicked={clicked === 3} onClick={() => {
                setClicked(3);
            }}>
                Reviews
            </div>
        </TitleName>
        <Details>

        </Details>
    </ProfileCon>   
}

UserProfile.defaultProps = {
    
}

export default UserProfile; 
