import React, { Component } from 'react';
import cover0 from '../Images/cover0.jpg';
// import cover1 from '../Images/cover1.jpg';
// import cover2 from '../Images/cover2.jpg';
// import cover3 from '../Images/cover3.jpg';

class Home extends Component {
  render(){
    return(
      <div className="home">
        <div id="slider-container">
          <div className="slide"><img id="slide_1" src={cover0} alt="cover0"/></div>
    {/*      <div className="slide"><img id="slide_2" src={cover1} alt="cover1"/></div>
          <div className="slide"><img id="slide_3" src={cover2} alt="cover2"/></div>
          <div className="slide"><img id="slide_4" src={cover3} alt="cover3"/></div>
*/}        </div>

        <ol>
          <li id="circle1"></li>
          <li id="circle2"></li>
          <li id="circle3"></li>
          <li id="circle4"></li>
        </ol>
      {/*  <img src={headshot} alt="headshot"/>*/}
        <div className="home-intro">
          <p>"Hi, my name is Sophia. I live in Austin, TX and work as a Front-End Web Developer."</p>
          <p>"In my free time, I love to cook, draw, play ukulele, and spend my time in nature."</p>
        </div>
      </div>
      )
  }
}

export default Home;
