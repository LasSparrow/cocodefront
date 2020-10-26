import React, {useState, useEffect} from 'react'; 
import styled from "styled-components"

const Edit = styled.div`
    transform: ${props=>props.highlight ? "scale(1.1)" : "scale(1)"};
    min-width: 20px;
    min-height: 20px;
    background-color: #D6D6D6;
    border-radius: 100px;
    padding: 5px 7px;
    position: absolute;
    left: 125px;
    top: 125px;
    cursor: pointer;
`;

const Camera = styled.img`
`;

const EditProfPicContainer = styled.div`        
    max-width: 150px; 
    max-height: 150px;
    border-radius: 100px;
`;

const UserImg = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;    
    object-fit: cover;
    border-radius: 100px;
`;

const EditProfPic = ({picture}) => {
    const[highlight, setHighlight] = useState(false);

    return <EditProfPicContainer>
        <UserImg src={picture}></UserImg>
        <Edit highlight={highlight} onMouseOver={()=>{
        setHighlight(true);
    }} onMouseLeave={()=>{
        setHighlight(false);
    }}>
            <Camera src="/camera.svg"></Camera>
        </Edit>
    </EditProfPicContainer>
}

EditProfPic.defaultProps = {
    text: "Home",
    picture: "/user.svg"
}

export default EditProfPic; 