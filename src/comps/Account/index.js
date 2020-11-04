import React, {useState} from 'react'; 
import styled from 'styled-components'; 


const AccountBoxMain = styled.div`
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;

const AccountBoxContainer = styled.div`
    max-width: 250px; 
    max-height: 56px;
    background-color: #FFFFFF;   
    font-size: 24px; 
    font-weight: 400; 
    color: #011F3B; 
    display: flex; 
    align-items: center; 
    justify-content: space-between; 
    img {
        cursor: pointer;
    }
`; 

const ExpandContainer = styled.div`
    max-width: 250px; 
    min-height: 56px; 
    background-color: #FFFFFF;
    font-size: 16px; 
    margin-top: 15px; 
    display:${props=>props.expanded ? "flex" : "none"};  
    flex-direction: column; 
    align-items: center; 
    border: 1px solid #EAEAEA; 
    box-sizing: border-box; 
    box-shadow: 5px 0px 18px rgba(0, 0, 0, 0, 0.08);
    a {
        margin: 10px 0; 
    }
    cursor: pointer; 

`; 


const AccountBox = () => {
    const[expanded, setExpanded] = useState(false)

    return <AccountBoxMain>
    <AccountBoxContainer>
        <img src="/Account Icon.png"></img>
        <p>Adam Jameson</p>
        <img src="/DropdownIcon.png" onClick={()=>{
            setExpanded(!expanded);
        }}></img> 
    </AccountBoxContainer>
    <ExpandContainer expanded={expanded}>
        <a>Account Settings</a>
        <a>Payment Information</a>
    </ExpandContainer>
</AccountBoxMain>
}

AccountBox.defaultProps = {

}

export default AccountBox; 