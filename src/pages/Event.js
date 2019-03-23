import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'



const Event = () => (
  <div>
      <Header active='about'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='200px' >
    <Row>
      <Column className='fireSafety event' textAlign='left'  width='75%' height='300px' bgColor='#F3F3F3' >
      <ul>
        <Link to="/about"><li >About LSFSC</li></Link>
        <Link to="/Profile"><li > Event Speakers</li></Link>
        <Link to="/Event"><li className='active'> Event details and Registration info</li></Link>
      
      </ul>
     
      </Column>
<SideBar />
      <TextWrapper width='75%'  marginMobile= '20px 0 100px 0'>
        <p>Date</p>
        <h1>
         16th - 18th October 2017  </h1>
<hr/>
           <p  >Venue</p>
         <h1>LCCI (Lagos Chambers for Commerce & Industry)        </h1><hr/>
        <h3>Attendance and registration enquiries</h3>
         <p>Mrs. Debbie Windele (Fire Safety Administrator Lagos State Safety Commission) 0703 035 0432 </p>
       <p>Ms Ifeyemi Odusanya (Lagos State Safety Commission) -  0802 875 9558
</p>

        </TextWrapper>
    </Row>

   </ContentWrapper>
  </div>
)

export default Event
