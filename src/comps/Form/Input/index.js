import React from 'react'; 
import styled, {css} from "styled-components";

const InputCon = styled.div`
    display:flex;
    flex-direction:column;
    outline: none;
    width:384px; 
`;

const Label = styled.label`
    font-size: 16pt;
`;

const EnterInfo = styled.input`
    margin-top:10px;
    background-color:#D6D6D6;
    width:240px;
    height: ${props=>props.height};
    border:hidden;
    margin-bottom: 15px;
    padding-left: 10px;
    ${props=>props.changeWidth === true && css`
        width:384px;
    `}
`;

const InPut = ({label, type, ph, changeWidth, height}) => {
    return <InputCon>
        <Label>{label}</Label>
        <EnterInfo height={height} changeWidth={changeWidth} type={type} placeholder={ph}></EnterInfo>
    </InputCon>   
}

InPut.defaultProps = {
    label:"Username",
    type:"text",
    ph:"Username",
    height: "50px",
    changeWidth:true
}

export default InPut; 
