import React from 'react';
import Sidebar from '../comps/Sidebar'; 
import ExploreBox from '../comps/Explore';
import Search from '../comps/Search'; 
import EditItem from '../comps/EditItem';
import EditProfPic from '../comps/EditProfPic';

export default {
    title: 'Test', 
    component: Sidebar, EditItem, EditProfPic, Search, ExploreBox
}; 

export const SidebarComponent = () => <Sidebar />; 
export const ExploreBoxComponent = () => <ExploreBox />; 
export const SearchComponent = () => <Search />; 
export const EditItemComp = () => <EditItem />;
export const EditProfPicComp = () => <EditProfPic />;
