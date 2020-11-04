import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const FilterBox = styled.div`
    width: 155px;
    max-height: 39px;
    display:inline-flex;
    justify-content:center;
    align-items: center;
    cursor:pointer;
    background-color: #D6D6D6;
    div {
       padding: 5px;
       flex-grow:1;
    }
`;

const Dropdown = styled.div`
    background-color: #FFFF;
    border: 1px solid #D6D6D6;
    box-sizing:border-box;
    max-width: 155px;
    margin-top: 10px;
    display:${props=>props.expanded ? "binline-flex" : "hidden"};
    opacity:${props=>props.expanded ? 1 : 0};
    height:${props=>props.expanded ? "auto" : "0px"};
    flex-direction:column;
    transition:opacity 0.3s;
    div{
        padding: 10px;
        cursor:pointer;
    }
    div:hover {
        background-color:#D6D6D6;
    }
`;

const RotateImg = styled.img`
    transform:${props=>props.expanded ? "rotate(90deg)" : "rotate(0deg)"};
    transition: 0.5s;
    width: 20px;
    height: 20px;
    margin-left: 3em;;
`;

const Filter = ({FilterName, text1, text2, text3, text4}) => {

    const [expanded, setExpanded] = useState(false);

    return <div>
            <FilterBox onClick={()=>{setExpanded(!expanded);}}>
                <div>{FilterName}</div>
                <div><RotateImg expanded={expanded} src="/chevron_right-24px.svg" /></div>
            </FilterBox>
            <Dropdown expanded={expanded}>
                <div>{text1}</div>
                <div>{text2}</div>
                <div>{text3}</div>
                <div>{text4}</div>
            </Dropdown>
    </div>
}
    
    

Filter.defaultProps = {
    FilterName:"Rating",
    text1:"5 Stars",
    text2:"4 Stars",
    text3:"3 Stars",
    text4:"2 Stars",
    expand: false
}

export default Filter; 