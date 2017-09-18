import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Countdown from '../components/Countdown'

import fireSafety from '../img/fireSafety.jpg'

const About = () => (
  <div>
    <Header active='about'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='150px' paddingTopMobile='200px' width='100%' >
    <Row>
      <Column className='fireSafety' textAlign='left'  width='75%' height='300px' bgColor='#F3F3F3' widthMobile='100%' >
      <ul>
        <Link to="/about/"><li className='active'>About LSFSC</li></Link>
        <Link to="/Profile/"><li> Event Speakers</li></Link>
        <Link to="/Event/"><li> Event details and Registration info</li></Link>
      
      </ul>
      <img  src={fireSafety} alt=""/>
      </Column>
<SideBar />
 
      <TextWrapper width='75%'  widthMobile= '100%' marginBottomMobile='150px' >
         <h1> About The Conference</h1>
<p>The Lagos State Fire Safety conference is aimed at fire safety for professionals and business leaders in every business sector nationwide</p>

<p>If you're a business leader, attending the conference will help you integrate Fire Safety into the fabric of your organisation. And by securing the buy-in of strategic decision-makers in your business and across your supply chain, you'll reap a broad range of financial and other benefits, such as enhancing your organisation's reputation and strengthening its long-term resilience, preventing it from fire disasters.</p>

<p>Regardless of which sector you work in, the size of your organisation or where you are in your career, the conference will give you and your organisation access to the most up-to-date information on fire safety and its statutory requirements by the Lagos State Safety Commission.</p>

<h3>Why attend Lagos State Fire Safety Conference 2017? </h3><p>Attending Lagos State Fire Safety Conference 2017 will provide you and your organisation with many benefits.</p>

<h4>Benefits for you:</h4><p> Learn something new! Attending the Lagos State Fire Safety Conference 2017 is an investment to you and your Organisation. Equips you with the proper knowledge on what you do when there is an emergency, particularly fire incidents.  Hearing and meeting a range of experts, speakers and influencers face to face will allow you to ask questions and seek advice. What you learn will be of immediate benefit and have a long-lasting impact.</p>

 <h4>Benefits for your organisation </h4> <p>Fresh learning and new ideas: Your attendance at the Lagos State Fire Safety Conference 2017 will provide a great return on investment. You'll come back to the workplace with fresh learning and new ideas that you can implement immediately.</p>

<h4>Make new contacts:</h4> <p>Lagos State Fire Safety Conference 2017 is an excellent platform for you to network, make professional connections and build enduring, mutually beneficial relationships with others. You'll have opportunities to share experiences, ask for advice and discuss issues with like-minded professionals who face the same day-to-day challenges as you. </p>
    <Countdown />
  
      </TextWrapper>
    </Row>

   </ContentWrapper>
  </div>
)

export default About
