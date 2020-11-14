import React, {useState} from 'react'; 
import styled from 'styled-components';

const InputContainer = styled.input`
    min-width: 186px; 
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

const Search = () => {
    return <InputContainer placeholder="Search">
    </InputContainer>
}

Search.defaultProps = {

}

export default Search; 