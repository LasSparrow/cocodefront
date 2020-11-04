import React, {useState} from 'react'; 
import styled from 'styled-components';

const InputContainer = styled.input`
    min-width: 192px; 
    min-height: 56px; 
    background-color: #FFFFFF;
    border: 1px solid #B8CAE8;
    border-radius: 10px; 
    outline: none; 

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