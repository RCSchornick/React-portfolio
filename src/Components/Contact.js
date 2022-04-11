import React, { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Style/Components.css';
import {Parallax} from 'react-parallax';
import ReactTooltip from 'react-tooltip';


function Contact() {
  return (


  <div>
    <Parallax bgImage={require("./Style/img/photo.jpeg")} strength={500}>
    <div style={{ height: 2200 }}></div>


  <div>
  <img className="Resume" src={require("./Style/img/RCResume.png")} alt="Resume"/>
</div>

</Parallax>

</div>


  );
}

export default Contact;