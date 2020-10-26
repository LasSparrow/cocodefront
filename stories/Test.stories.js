import React from 'react';
import Sidebar from '../comps/Sidebar'; 
import EditItem from '../comps/EditItem';
import EditProfPic from '../comps/EditProfPic';

export default {
    title: 'Test', 
    component: Sidebar, EditItem, EditProfPic
}; 

export const SidebarComponent = () => <Sidebar />; 
export const EditItemComp = () => <EditItem />;
export const EditProfPicComp = () => <EditProfPic />;