import React from 'react';
import Sidebar from '../src/comps/Sidebar'; 
import ExploreBox from '../src/comps/Explore';
import Search from '../src/comps/Search'; 

export default {
    title: 'Test', 
    component: Sidebar, Search, ExploreBox
}; 

export const SidebarComponent = () => <Sidebar />; 
export const ExploreBoxComponent = () => <ExploreBox />; 
export const SearchComponent = () => <Search />;
