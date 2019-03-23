import React from 'react'
import Link from 'gatsby-link'

import {Background, ContentWrapper, Row, TextWrapper,  Column, Button} from '../components/Recomposse';
import Header from '../components/Header'
import SideBar from '../components/SideBar'



import ngigeBG from '../img/ngigeBG.jpg'
import nikeBG from '../img/nikeBG.png'
import kariBG from '../img/kariBG.jpg'
import anebiBG from '../img/anebiBG.jpg'
import otisBG from '../img/otisBG.jpg'
import michael from '../img/michael.jpg'

import ambode from '../img/ambode.jpg'
import windele from '../img/windele.jpg'
import hakeem from '../img/hakeem.jpg'
import oluseye from '../img/oluseye.jpg'


const Profile = () => (
  <div>
      <Header active='about'/>
   <ContentWrapper bgColor='#fff' height='auto' paddingTop='150px' >
    <Row>
      <Column className='fireSafety event' textAlign='left'  width='75%' widthMobile='100%' height='300px' bgColor='#F3F3F3' >
      <ul>
        <Link to="/about"><li >About LSFSC</li></Link>
        <Link to="/Profile"><li className='active'> Event Speakers</li></Link>
        <Link to="/Event"><li > Event details and Registration info</li></Link>
      
      </ul>
     
      </Column>
<SideBar />
     <Column className= 'profiles' width='75%' textAlign='center' margin= '0'  widthMobile='100%'  marginBottomMobile='50px' >
     <Button width='80%' padding='10px 0px' bgColor='#ccc' color='#000'  marginTop='30px'  marginBottom='10px'  > Guest Speakers</Button>
    <Column  textAlign='left'  > 
              
        <img  className='' src={ngigeBG} alt="Logo"/>
        <h4> Dr.Chris Ngige</h4>
        <h6>Minister of Labour and Employment </h6>
        </Column>
           
           <Column className= '' > 
        <img  className='' src={kariBG} alt="Logo"/>
        <h4> Alhaji Mohammed Kari ACII,AIIN                 </h4>
        <h6>Commissioner for Insurance                         </h6>
        </Column>
           <Column className= '' > 
        <img  className='' src={anebiBG} alt="Logo"/>
        <h4> Engr.Anebi Joseph</h4>
        <h6> Controller, federal fire service</h6>
        </Column>                                                    

           <Column className= '' > 
        <img  className='' src={otisBG} alt="Logo"/>
        <h4> Engr.Otis O.Anyaeji                                               </h4>
        <h6>President Nigeria Society of Engineers</h6>
        </Column>
         <Column className= '' > 
        <img  className='' src={michael} alt="Logo"/>
        <h4> Micheal T. Greiner (USA)</h4>
        <h6>President Hazard Control Technologies Inc                      </h6>
        </Column>
     </Column>
                                                                
           
                 
                              

     <Column className= 'profiles hosts' width='75%' textAlign='center' margin= '0'  marginBottomMobile='150px'   >
     <Button width='80%' padding='10px 0px' bgColor='#ccc' color='#000'  marginTop='30px'  marginBottom='10px'  >Hosts</Button>
    <Column  textAlign='left' > 
              
        <img  className='' src={ambode} alt="Logo"/>
        <h4>Akinwumi Ambode </h4>
        <h6>Governor Lagos State</h6>
        </Column>
           <Column className= '' > 
        <img  className='' src={oluseye} alt="Logo"/>
        <h4> Mr. Oluseye Oladejo</h4>
        <h6>Commissioner for Special Duties, Lagos State</h6>
        </Column>
           <Column className= '' > 
        <img  className='' src={hakeem} alt="Logo"/>
        <h4> Hon. Hakeem Dickson                  </h4>
        <h6>DG, Lagos State Safety Commission                       </h6>
        </Column>
           <Column className= '' > 
        <img  className='' src={windele} alt="Logo"/>
        <h4> Mrs. Debbie Windele</h4>
        <h6> Fire Safety Administrator, Lagos State Safety Commission</h6>
        </Column>                                                    

         
     </Column>
    </Row>
    <TextWrapper>

    </TextWrapper>

   </ContentWrapper>
  </div>
)

export default Profile
