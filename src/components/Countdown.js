import React, {Component} from 'react'

import Periodical from 'react-periodical';



export default class Countdown extends Component {
constructor(){
    super()

    this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            countDownActive: true

    }
  
    }

    count(){



         // Set the date we're counting down to
var countDownDate = new Date("Oct 16, 2017 10:00:00").getTime();

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"

  this.setState({days})
   this.setState({hours})
    this.setState({minutes})
     this.setState({seconds})


  // If the count down is finished, write some text 
  if (distance < 0) {
   this.setState({countDownActive: false})
   
  }
    }

    
render(){
       


  return(

  <div>
     
   
         <Periodical
                  f={() => this.count()}
                  period={1000}
                >
              
      <div className= { this.props.home ? 'countDownHome' : 'countDown'} >
          
      <div>  <h3>{this.state.days} </h3><p>  Days</p>  </div>
      <div>  <h3>{this.state.hours} </h3> <p>Hours </p></div>
       <div> <h3>{this.state.minutes} </h3> <p>Minutes</p> </div>
       <div>  <h3>{this.state.seconds} </h3> <p>Seconds</p>  </div>
          </div>
     
      </Periodical>

  </div>
)

}};