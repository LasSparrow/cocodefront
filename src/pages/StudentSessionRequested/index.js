import React, {useState} from 'react';
import Calendar from '../../comps/Calendar'; 
import styled from 'styled-components'

const CalendarPageContainer = styled.div`
    min-width: 80vw;
    min-height: 90vh;
    display: flex;
    flex-wrap: wrap;
    background: #F5F5FB;
`;

const CalendarContainer = styled.div`

`;

export default function CalendarPage() {
    const HandleBoxClick = (str)=>{
      alert(str);
    }

return <CalendarPageContainer>
<CalendarContainer>
    <Calendar /> 
</CalendarContainer>
</CalendarPageContainer> 
}
