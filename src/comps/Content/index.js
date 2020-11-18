import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const Text = styled.div`
    display: inline-flex;
    flex-direction: column;
    position: relative;
    padding: 60px 0px 30px 0px;
    left: 100px;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 500px; 
    min-height: 300px; 
    background-color: #FFFFFF;
    box-shadow: 5px 10px 10px #888888;
    border-radius: 30px;
    position: relative;
    z-index: 0;
    top: -80px;
`;

const Content = () => {

    return <ContentContainer>
        <Text>
            Hello
        </Text>
    </ContentContainer>
}

Content.defaultProps = {
}

export default Content; 