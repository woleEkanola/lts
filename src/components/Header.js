import React from 'react'
import Link from 'gatsby-link'

import bg from '../img/bg.jpg'
import blurBG from '../img/blurBg.png'
import lsfsc from '../img/lsfsc.png'
import ngige from '../img/ngige.png'
import nike from '../img/nike.png'
import kari from '../img/kari.png'
import anebi from '../img/anebi.png'
import otis from '../img/otis.png'
import ig from '../img/ig.png'
import twitter from '../img/twitter.png'
import fb from '../img/fb.png'
import {Background, ContentWrapper, Row, Column, Avatar} from '../components/Recomposse';


import Periodical from 'react-periodical';

const Header = (props) =>{
    return (
   <div className= 'bgHeader'>
      <div className='logoDivHeader'>
        <Link to="/">  <img  className='' src={lsfsc} alt="Logo"/></Link>

      </div>
      <div className= 'menuHeader'>
        <ul>
         <Link to="/about"> <li className= { props.active==='about'  ? 'active' : ''} >About LSFSC</li></Link>
         <Link to="/sponsorship"> <li className= { props.active==='sponsorship'  ? 'active' : ''}>Sponsorship</li></Link>
         <Link to="/exhibition"> <li className= { props.active==='exhibition'  ? 'active' : ''}>Exhibition</li></Link>
        <Link to="/contact"> <li className= { props.active==='contact'  ? 'active' : ''}>Contact Us</li></Link>     
         
        </ul>

        <div className='socialDiv' >
       <img src={fb} alt="Logo"/>
       <img src={twitter} alt="Logo"/>
       <img src={ig} alt="Logo"/>
      </div>
      </div>
   
  </div>
)
};
export default Header
