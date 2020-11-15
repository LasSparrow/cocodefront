import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const LangTagsContainer = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    max-width: 100px; 
    max-height: 10px; 
    background-color: ${props=>props.selected ? "#173F5F" : "#018EA2"};
    border-radius: 10px;
    padding: 5px 10px;
    margin: 5px;
    color: white;
    cursor: ${props=>props.select ? "default" : "pointer"};
    user-select: none; 
`;

const LangTags = ({text, select}) => {
    const[selected, setSelected] = useState(true);

    useEffect(()=>{
        setSelected(select);
    },[select])

    return <LangTagsContainer selected={selected} onClick={()=>{
        setSelected(!selected);
    }}> 
        {text}
    </LangTagsContainer>
}

LangTags.defaultProps = {
    text: "JavaScript",
    select: true
}

export default LangTags; 