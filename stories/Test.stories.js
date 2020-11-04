import React from 'react';
import Sidebar from '../comps/Sidebar'; 
import ExploreBox from '../comps/Explore';
import Search from '../comps/Search'; 
import AccountBox from '../comps/Account'; 
import PRTab from '../comps/PendingRequests';
import USTab from '../comps/UpcomingSessions'; 
import FSTab from '../comps/FreeSession'; 

export default {
    title: 'Test', 
    component: Sidebar, Search, ExploreBox
}; 

export const SidebarComponent = () => <Sidebar />; 
export const ExploreBoxComponent = () => <ExploreBox />; 
export const SearchComponent = () => <Search />;
export const AccountBoxComponent = () => <AccountBox />; 
export const PRTabComponent = () => <PRTab />; 
export const USTabComponent = () => <USTab />; 
export const FSTabComponent = () => <FSTab />; 
