import React, {useState} from 'react';
import Menu from "../comps/Box";

export default function Home() {
  const HandleBoxClick = (str)=>{
    alert(str);
  }

  return <div className="home">
    <div className="row">
      <div className="col">
        <Menu 
          dim={300}
          title="This is my app!"
          onH1Click={HandleBoxClick}
          >
            Hi
            <hr/>
            This is a description
          </Menu>
      </div>
    </div>
  </div>
}