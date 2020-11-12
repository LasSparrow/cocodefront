import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import cameraimg from '../../public/camera.svg';
import picture from '../../public/user.svg';

const EditProfPicContainer = styled.div`        
    border-radius: 150px;
    display: flex;
    position: relative;
    z-index: 1;
`;

const UserImg = styled.img`
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 300px;    
    object-fit: cover;
    border-radius: 150px;
    background: white;
`;

const Edit = styled.div`
    transform: ${props=>props.highlight ? "scale(1.1)" : "scale(1)"};
    transition: 0.5s;
    width: 50px;
    height: 50px;
    background-color: #D6D6D6;
    border-radius: 150px;
    padding: 5px 7px;
    left: -60px;
    top: 210px;
    cursor: pointer;
    position: relative;
`;

const Camera = styled.img`
    width: 40px;
    height: 40px;
    padding-top: 4px;
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