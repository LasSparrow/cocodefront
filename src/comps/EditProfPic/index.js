import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import cameraimg from '../../public/camera.svg';
import picture from '../../public/user.svg';

const Edit = styled.div`
    transform: ${props=>props.highlight ? "scale(1.1)" : "scale(1)"};
    width: 20px;
    height: 20px;
    background-color: #D6D6D6;
    border-radius: 100px;
    padding: 5px 7px;
    left: -30px;
    top: 110px;
    cursor: pointer;
    position: relative;
`;

const Camera = styled.img`
    width: 20px;
    height: 20px;
    fill: #018EA2;
`;

const EditProfPicContainer = styled.div`        
    max-width: 150px; 
    max-height: 150px;
    border-radius: 100px;
    display: flex;
`;

const UserImg = styled.img`
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;    
    object-fit: cover;
    border-radius: 100px;
`;

const EditProfPic = () => {
    const[highlight, setHighlight] = useState(false);

    return <EditProfPicContainer>
        <UserImg src={picture}></UserImg>
        <Edit highlight={highlight} onMouseOver={()=>{
        setHighlight(true);
    }} onMouseLeave={()=>{
        setHighlight(false);
    }}>
            <Camera src={cameraimg}></Camera>
        </Edit>
    </EditProfPicContainer>
}

EditProfPic.defaultProps = {
    text: "Home"
}

export default EditProfPic; 