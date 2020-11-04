import React from 'react';
import SessionBox from '../src/comps/Session'; 
import Filter from '../src/comps/Filter';

export default {
    title: 'Dropdown', 
    component: SessionBox
}; 

export const BasicSessionBox = () => <SessionBox />;
export const RatingFilter = () => <Filter />