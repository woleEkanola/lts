import React, {Component} from 'react'
import Link from 'gatsby-link'
import bg from '../img/bg.jpg'
import blurBG from '../img/blurBg.png'
import lsfsc from '../img/lsfsc.png'
import ngige from '../img/ngige.png'
import nike from '../img/michael.png'
import kari from '../img/kari.png'
import anebi from '../img/anebi.png'
import otis from '../img/otis.png'
import ig from '../img/ig.png'
import twitter from '../img/twitter.png'
import fb from '../img/fb.png'
import {Background, ContentWrapper, Row, Column, TextWrapper} from '../components/Recomposse';
import './page.css'

import Periodical from 'react-periodical';



export default class IndexPage extends Component {
constructor(){
    super()

    this.state={
            slide: 1
    }
  
    }

    doIt(){
      var that = this
      var slide = this.state.slide
     
       
        if(slide < 3){
              that.setState({slide: slide + 1})
               console.log(slide)
        }else{ that.setState({slide: 1}) }
        
     
    }

render(){
  return(
  <div>
     
    <ContentWrapper     width='100%' padding= '0px'  >
    <div className= 'bg' width='100%' height='650px' margin='auto' bgPosition= 'top' bgPositionMobile= 'center' bgSizeMobile= '330%' >
      <div className='logoDiv'>
      <Link to="/">  <img  className='' src={lsfsc} alt="Logo"/></Link>

      </div>
      <div className= 'menu'>
        <ul>
         <Link to="/about"> <li>About LSFSC</li></Link>
         <Link to="/sponsorship"> <li>Sponsorship</li></Link>
         <Link to="/exhibition"> <li>Exhibition</li></Link>
          <Link to="/contact"> <li>Contact Us</li></Link>     
         
        </ul>
      </div>
         <Periodical
                  f={() => this.doIt()}
                  period={6500}
                >
      <div className= 'slider'>
        <Column className= 'slides' display= { this.state.slide == 1 ? '' : 'none'}> 
        <p className= 'theme'>theme:</p>
        <h1>
          The Economic Effect of <br/>
<span>Active and Passive </span><br/>
Fire Prevention in Lagos State.
        </h1>
        </Column>
           <Column className= 'slides'  display= { this.state.slide == 3 ? '' : 'none'}> 
        <p className= 'theme' >Date & Venue</p>
        <h1>
         16th - 18th October 2017 <br/>
         @ LCCI (Lagos Chambers of Commerce & Industry) <br/>
         Alausa, Ikeja, Lagos State
        </h1>
        </Column>
       
        <Column className= 'slides' display=  { this.state.slide == 2 ? '' : 'none'} > 
        <p>Guests:</p>
         <h1 className= 'noshow'> Click here to View Profile of Guest Speakers </h1>
         <div className= 'flex'>
        <Column className= 'guest' > 
       
        
        <img  className='' src={ngige} alt="Ngige"/>
  
        </Column>
           <Column className= 'guest' > 
        <img  className='' src={nike} alt="Logo"/>
    
        </Column>
           <Column className= 'guest' > 
        <img  className='' src={kari} alt="Logo"/>
     
        </Column>
           <Column className= 'guest' > 
        <img  className='' src={anebi} alt="Logo"/>
      
        </Column>
           <Column className= 'guest' > 
        <img  className='' src={otis} alt="Logo"/>
      
        </Column>
        </div>
        </Column>

        
      </div>
     
      </Periodical>
      <div className='socialDiv' >
       <img src={fb} alt="Logo"/>
       <img src={twitter} alt="Logo"/>
       <img src={ig} alt="Logo"/>
      </div>
    </div>
      
       
   
    
    </ContentWrapper>

  </div>
)

}};