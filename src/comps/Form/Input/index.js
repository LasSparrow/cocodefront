import React from 'react'; 
import styled, {css} from "styled-components";

const InputCon = styled.div`
    display:flex;
    flex-direction:column;
    outline: none;
    width:384px;
    font-size: 18px;
`;

const EnterInfo = styled.input`
    margin-top:10px;
    background-color:#D6D6D6;
    width:240px;
    height: 50px;
    border:hidden;
    ${props=>props.changeWidth === true && css`
        width:384px;
    `}
`;

const InPut = ({label, type, ph, changeWidth}) => {
    return <InputCon>
        <label>{label}</label>
        <EnterInfo changeWidth={changeWidth} type={type} placeholder={ph}></EnterInfo>
    </InputCon>   
}

InPut.defaultProps = {
    label:"Username",
    type:"text",
    ph:"Username",
    changeWidth:true
}

export default InPut; 
