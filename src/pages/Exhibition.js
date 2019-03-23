import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'

import exhibition from '../img/exhibition.pdf'
import fireSafety from '../img/fireSafety.jpg'

const Exhibition = () => (
  <div>
    <Header active='exhibition'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='150px' >
    <Row>
   
<SideBar />
      <TextWrapper width='75%' marginMobile= '70px 0 100px 0' >
         <h3>Why exhibit at Lagos State Fire Safety Conference 2017?</h3>

<p>We&rsquo;re delighted to have a supporting exhibition at the Lagos State Fire safety Conference 2017. Exhibit at Lagos State Fire safety Conference 2017 to: </p>

<p>align your organisation with Lagos State Safety Commission and its statutory laws showcase your services and products to other professionals and business leaders raise your brand awareness and profile with a range of sectors and industries network with high-quality industry professionals.</p>

<p>We have limited stands available.</p>

<p>We&rsquo;re expecting 1000+ delegates this year.</p>

<p>The spacious exhibition hall is situated alongside conference registration and close to the main conference auditorium. Delegate refreshment breaks, lunch and a designated time during the conference would be allocated for exhibition.</p>
<hr/>
        <h3>Contact</h3>
        <p>Mrs. Debbie Windele (Fire Safety Administrator Lagos State Safety Commission) - +234(0)703 035 0432 </p>
          <p>Ms Ifeyemi Odusanya (Lagos State Safety Commission) -   +234(0)802 875 9558
</p>
  <a href={exhibition} target="_blank">   <button >View and download Exhibition Details</button> </a> 
   
 </TextWrapper>
    </Row>

   </ContentWrapper>
  </div>
)

export default Exhibition
