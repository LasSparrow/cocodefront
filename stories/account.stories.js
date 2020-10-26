import React from 'react';
import EditItem from '../comps/EditItem'; 
import EditProfPic from '../comps/EditProfPic'; 

export default {
    title: 'Account', 
    component: EditItem, EditProfPic
}; 

export const EditItemComp = () => <EditItem />;
export const BasicPicComp = () => <EditProfPic />;
export const ProfPicComp = () => <EditProfPic picture="/guy.jpg" />;
