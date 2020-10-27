import React from 'react';
import EditItem from '../comps/EditItem'; 
import EditProfPic from '../comps/EditProfPic'; 
import ListLine from '../comps/ListLine';
import List from '../comps/List';

export default {
    title: 'Account', 
    component: EditItem, EditProfPic, ListLine, List
}; 

export const EditItemComp = () => <EditItem />;
export const BasicPicComp = () => <EditProfPic />;
export const ProfPicComp = () => <EditProfPic picture="/guy.jpg" />;
export const ListLineComp = () => <ListLine />;
export const ListComp = () => <List />;