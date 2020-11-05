import React, {useState} from 'react';
import Sidebar from '../../comps/Sidebar';
import EditProfPic from '../../comps/EditProfPic';
import AccountEdit from '../../comps/AccountEdit';

export default function MyAccount() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <div className="home">
    <Sidebar />
    <EditProfPic />
    <AccountEdit />
  </div>
}