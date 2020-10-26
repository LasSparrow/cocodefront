import React from 'react';
import Sidebar from '../comps/Sidebar'; 
import ExploreBox from '../comps/Explore';
import Search from '../comps/Search'; 

export default {
    title: 'Test', 
    component: Sidebar 
}; 

export const SidebarComponent = () => <Sidebar />; 
export const ExploreBoxComponent = () => <ExploreBox />; 
export const SearchComponent = () => <Search />; 