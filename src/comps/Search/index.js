import React, {useState} from 'react'; 
import styled from 'styled-components';

const InputComp = styled.div`
    display: flex;
`;

const InputContainer = styled.input`
    padding-left: 10px;
    min-width: 176px; 
    min-height: 48px; 
    background-color: #FFFFFF;
    border: 1px solid #B8CAE8;
    border-radius: 10px; 
    outline: none; 
    margin-top: 15px; 
    &::placeholder {
        color: #D6D6D6; 
    }
`;

const SearchIcon = styled.img`
    width: 25px;
    height: 25px;
    margin-left: -40px;
    margin-top: 28px;
`;

const Search = () => {
    return <InputComp>
    <InputContainer placeholder="Search"/>
    <SearchIcon src="/SearchIcon.png"/>
    </InputComp>
}

Search.defaultProps = {

}

export default Search; 