import React, { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Components.css';
import {Parallax} from 'react-parallax';
import ReactTooltip from 'react-tooltip';


function Portfolio() {
  return (


  <div>
    <Parallax bgImage={require("./wood.jpg")} strength={500}>
    <div style={{ height: 900 }}>


<Container>
    <Row>
        <Col md="4">
          <a data-tip="Book-it Group Project #2" href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
        </Col>
        <Col md="4">
        <a href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
          </Col>
        <Col md="4">
        <a href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
        </Col>
        <Col md="4">
          <a href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
        </Col>
        <Col md="4">
        <a href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
          </Col>
        <Col md="4">
        <a href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image-1" src={require("./Bookit.png")} alt="Bookit"/>
          </a>
        </Col>
    </Row>
    <ReactTooltip place="top" type="dark" effect="float" />
</Container>
</div>
</Parallax>

</div>


  );
}
export default Portfolio;