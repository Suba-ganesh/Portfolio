import React, { useState } from 'react';
import './Nav.css';
import underline from '../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Nav = () => {

  const [menu,setmenu] = useState("home");


  return (
    <div className='nav'>
   
        <ul className="nav-menu">
            <li > <AnchorLink className='anchor-link' offset={50} href='#home'> <p onClick={()=>setmenu("home")} >Home</p></AnchorLink>{menu==="home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setmenu("about")}>About Me</p></AnchorLink>{menu==="about"?<img src={underline} alt=''/>:<></>}</li>
            {/* <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setmenu("services")}>Services</p></AnchorLink>{menu==="services"?<img src={underline} alt=''/>:<></>}</li> */}
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setmenu("work")}>Portfolio</p></AnchorLink>{menu==="work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setmenu("contact")}>Contact</p></AnchorLink>{menu==="contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>

        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With me</AnchorLink></div>
    </div>
  )
}

export default Nav;