import React, {useState} from 'react'; 
import styled from 'styled-components'; 

const AccountBoxMain = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const AccountBoxContainer = styled.div`
    max-width: 300px; 
    max-height: 56px; 
    font-size: 24px; 
    font-weight: 400; 
    color: #011F3B; 
    display: flex; 
    margin-left: -10px;
    cursor: pointer;
`; 

const Name = styled.h5`
    align-self: center;
    padding: 0px 10px;
`;

const ExpandContainer = styled.div`
    min-width: 250px; 
    min-height: 56px; 
    background-color: #FFFFFF;
    font-size: 16px; 
    margin-top: 10px; 
    z-index: 1;
    display:${props=>props.expanded ? "flex" : "none"};  
    flex-direction: column; 
    align-items: center; 
    position: fixed;
    border: 1px solid #EAEAEA; 
    box-sizing: border-box; 
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0, 0.08);
    cursor: pointer; 
    margin-left: -15px;
    a {
        margin: 10px 0; 
    }
`; 

const DDIcon = styled.img`
    max-height: 20px;
    max-width: 20px;
    align-self: center;
`;

const AccountBox = ({name,img}) => {
    const[expanded, setExpanded] = useState(false)

    return <AccountBoxMain>
    <AccountBoxContainer>
        <img src={img}></img>
        <Name>{name}</Name>
        <DDIcon src="/DropdownIcon.png" onClick={()=>{
            setExpanded(!expanded);
        }}></DDIcon> 
    </AccountBoxContainer>
    <ExpandContainer expanded={expanded}>
        <a>My Account</a>
        <a>Account Settings</a>
        <a>Payment Information</a>
    </ExpandContainer>
</AccountBoxMain>
}

AccountBox.defaultProps = {
    name: "Adam Jameson",
    img: "/Account Icon.png"
}

export default AccountBox; 