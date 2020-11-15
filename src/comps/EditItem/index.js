import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";

const Title = styled.div`
    margin-right: 10px;
    font-weight: bold;
`;

const Desc = styled.div`
    margin-bottom: 30px;
    text-align: start;
`;

const Section = styled.div`
    display: flex;
    margin-bottom: 10px;
`;

const Content = styled.div`
    
`;

const Pencil = styled.img`
    cursor: pointer;
    max-height: 15px;
    max-width: 15px;
`;

const EditItemContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
`;

const EditItem = ({desc, title}) => {

    return <EditItemContainer>
        <Content>
            <Section>
                <Title>{title}</Title>
                <Pencil src="/pencil.svg"></Pencil>
            </Section>
            <Desc>{desc}</Desc>
        </Content>
    </EditItemContainer>
}

EditItem.defaultProps = {
    desc: "Description",
    title: "Title"
}

export default EditItem;