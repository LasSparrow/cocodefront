import React from 'react';
import SessionBox from '../comps/Session'; 
import Filter from '../comps/Filter';

export default {
    title: 'Dropdown', 
    component: SessionBox
}; 

export const BasicSessionBox = () => <SessionBox />;
export const RatingFilter = () => <Filter />