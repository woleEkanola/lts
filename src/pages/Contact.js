import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Countdown from '../components/Countdown'
import fireSafety from '../img/fireSafety.jpg'

const Contact = () => (
  <div>
    <Header active='contact'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='150px' >
    <Row>
    <Column className='fireSafety event' textAlign='left'  width='75%' height='300px' bgColor='#F3F3F3' >
    </Column>
<SideBar />
      <TextWrapper width='75%'  marginMobile= '70px 0 100px 0'>
   Attendance and registration enquiries<br />
Exhibition and sponsorship enquires <br />
General Conference enquiries<br />

        <h3>Contact</h3>
        <p>Mrs. Debbie Windele (Fire Safety Administrator Lagos State Safety Commission) 0703 035 0432 </p>
       <p>Ms Ifeyemi Odusanya (Lagos State Safety Commission) -  0802 875 9558
</p>
 <Countdown />
 </TextWrapper>
    </Row>

   </ContentWrapper>
  </div>
)

export default Contact
