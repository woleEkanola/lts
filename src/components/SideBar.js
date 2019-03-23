import React from 'react'
import Link from 'gatsby-link'


import bg from '../img/bg.jpg'
import safetyCom from '../img/safetyCom.jpg'
import SafetyEx from '../img/SafetyEx.jpg'
import lcci from '../img/lcci.jpg'


import Periodical from 'react-periodical';

const SideBar = (props) =>{
    return (
   <div >

 <div className= 'sidebar'>
     <p>This event is brought to you by:</p>
     <img src={safetyCom} alt=""/>
      <img src={SafetyEx} alt=""/>
 
         <img src={lcci} alt=""/>
 </div>
  </div>
)
};
export default SideBar
