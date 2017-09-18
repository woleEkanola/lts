import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Countdown from '../components/Countdown'
import fireSafety from '../img/fireSafety.jpg'

const Sponsorship = () => (
  <div>
    <Header active='sponsorship'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='150px' >
    <Row>
   
<SideBar />
      <TextWrapper width='75%' marginMobile= '70px 0 100px 0' >
   <h3>Why sponsor Lagos State Fire Safety Conference 2017?</h3>

<p>Conference sponsorship can improve your brand&rsquo;s visibility and reputation among business owners and professionals. </p>

<h4>Why Lagos State Fire Safety Conference 2017?</h4>

<p>The Lagos State Fire safety conference would be attracting over 1000+ attendees from across the state and from every industry sector; it is the first of its kind nationwide. Valuable new knowledge and skills would be passed on during the conference, which is transferable to your jobs.</p>

<h4>Who should attend Lagos State Fire Safety Conference 2017?</h4>

<p>Expected delegates are MDs and CEOs, Directors, Managers, Business Owners,  Professionals from every business sectors in Nigeria.</p>

<p>Interested in sponsoring Lagos State Fire Safety Conference 2017? </p><hr/>
        <h3>Contact</h3>
        <p>Mrs. Debbie Windele (Fire Safety Administrator Lagos State Safety Commission) 0703 035 0432 </p>
       
       <button>View and download Sponsorship Details</button>
        <Countdown />
 </TextWrapper>
    </Row>

   </ContentWrapper>
  </div>
)

export default Sponsorship
