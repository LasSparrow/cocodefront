import React, {useState, useEffect} from 'react'; 
import styled from "styled-components";
import Button from '../Button';
import LangTags from '../LangTags';
import tutorimage from '../../public/guy.jpg'; 

const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 150px;
    justify-content: center;
`;

const LangBox = styled.div``;

const TutorCompContainer = styled.div`
    padding: 10px;
    border-radius: 10px;
    background: white;
    box-shadow: 5px 5px 5px #888888;
    margin-top: 40px;
`;

const ProfileImg = styled.img`
    width: 175px;
    height: 200px;  
    margin: 10px;  
    object-fit: cover;
`;

const Name = styled.h2``;

const Blurb = styled.div``;

const Top = styled.div`
    display: flex;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`;

const TutorComp = ({text, name}) => {

    return <TutorCompContainer>
        <Top>
            <ProfileImg src={tutorimage}/>
            <Info>
                <Name>{name}</Name>
                <Blurb>{text}</Blurb>
            </Info>
            <ButtonBox>
                <Button text="Profile"/>
                <Button text="Book"/>
            </ButtonBox>
        </Top>
        <LangBox>
            <LangTags text="ReactJS"/>
            <LangTags text="JavaScript"/>
            <LangTags text="Java"/>
        </LangBox>
    </TutorCompContainer>
}

TutorComp.defaultProps = {
    name: "Jorge Canton",
    text: "Minions ipsum wiiiii bee do bee do bee do chasy tatata bala tu butt bananaaaa jeje uuuhhh aaaaaah. Potatoooo la bodaaa baboiii tatata bala tu potatoooo chasy bappleees poopayee tank yuuu! Bappleees tatata bala tu pepete tank yuuu! Ti aamoo! Tank yuuu..."
}

export default TutorComp; 