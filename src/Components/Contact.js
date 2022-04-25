// import React, { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Style/Components.css';
import {Parallax} from 'react-parallax';
import ReactTooltip from 'react-tooltip';


function Contact() {
  return (


  <div>
    <Parallax bgImage={require("./Style/img/photo.jpeg")} strength={500}>
    <div style={{ height: 650 }}></div>


  <div className='Contact'>
  <p>Please click the github icon to preview my profile -<a href="https://github.com/RCSchornick"><img src={require("./Style/img/github.png")} style={{ height: 75, width: 65, paddingBottom: 10 }} alt="GitHub" /></a></p>
<p>Please click the LinkedIn icon to preview my profile -<a href="https://www.linkedin.com/in/rachel-claire-schornick-b10039234"><img src={require("./Style/img/LinkedIn.png")} style={{ height: 68, width: 58, margin: 10, paddingBottom: 10 }} alt="LinkedIn" /></a></p>
<p>Please email me at - rcschornick@gmail.com </p>

</div>



</Parallax>

</div>


  );
}

export default Contact;