import React from 'react'
import styled from "styled-components"
import Sidebar from '../../comps/Sidebar'
import RightSidebar from '../../comps/RightSidebar'
import ExploreCategory from '../../comps/ExploreCategory'
import Authenticate from '../../comps/Authenticate/Authenticate'
import SocketContextProvier from '../../comps/ContextProviders/SocketContextProvier'


const ExplorePageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background: #F5F5FB;
  padding-bottom: 10px; 
`;

const Content = styled.div`
  width: calc(100vw - 600px); 
  display: flex;
  margin-left: 250px;
  flex-wrap:wrap;
  justify-content: space-evenly;
`;


export default function ExplorePage() {

  return (
    <Authenticate>
      <SocketContextProvier>
        <ExplorePageContainer>
          <Sidebar />
          <Content>
              <ExploreCategory text="html" tutors="12" students="34" image={'/WebDevImage.png'} />
              <ExploreCategory text="JavaScript" tutors="8" students="13" image={'/JavaScriptImage.png'} />
              <ExploreCategory text="CSS" tutors="17" students="41" image={'/CSSImage.png'} /> 
              <ExploreCategory  text="Python" tutors="4" students="2" image={'/PythonImage.jpg'} />
          </Content>
          <RightSidebar/>
        </ExplorePageContainer>
      </SocketContextProvier>
    </Authenticate>
    
  )
}
