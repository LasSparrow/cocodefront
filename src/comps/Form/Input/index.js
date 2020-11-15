import React, {useState, useEffect} from 'react'; 
import styled, {css} from "styled-components";

const InputCon = styled.div`
    display:flex;
    flex-direction:column;
    outline: none;
    margin-left: 10px;
    margin-right: 10px;
    width: ${props=>props.width};
`;

const Label = styled.label`
    margin-left: -10px;
    font-size: ${props=>props.fontSize};
    font-weight: ${props=>props.fontWeight};
`;

const EnterInfo = styled.input`
    margin-top:10px;
    background-color:#D6D6D6;
    width: ${props=>props.width};
    height: ${props=>props.height};
    border:hidden;
    border-radius: 5px;
    margin-bottom: 15px;
    margin-left: -10px;
    padding-left: 10px;
    outline: none;
`;

const InPut = ({fontSize, fontWeight, label, type, ph, width, height}) => {
    return <InputCon>
        <Label fontSize={fontSize} fontWeight={fontWeight}>{label}</Label>
        <EnterInfo height={height} width={width} type={type} placeholder={ph}></EnterInfo>
    </InputCon>   
}

InPut.defaultProps = {
    label:"Username",
    type:"text",
    ph:"Username",
    height: "50px",
    width: "384px",
    fontSize: "13pt",
    fontWeight: "400"
}

export default InPut; 
