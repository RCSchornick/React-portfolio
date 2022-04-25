// import React, { useState } from 'react';
import {Row, Col, Container} from 'reactstrap';
import './Style/Components.css';
import {Parallax} from 'react-parallax';
import ReactTooltip from 'react-tooltip';


function Portfolio() {
  return (


  <div>
    <Parallax bgImage={require("./Style/img/photo.jpeg")} strength={500}>
    <div style={{ height: 650 }}>


<Container>
    <Row>
        <Col md="4">
          <a data-tip="Book-it SMU Group Project #2" href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image" src={require("./Style/img/Bookit.png")} alt="Bookit"/>
          </a>
        </Col>
        <Col md="4">
        <a data-tip="Zappy SMU Group Project #1" href="https://github.com/Jsalas603/Zappy.git">  
          <img className="Project-Image" src={require("./Style/img/Zappy.png")} alt="Zappy"/>
          </a>
          </Col>
        <Col md="4">
        <a data-tip="SMU Node Challenge" href="https://github.com/RCSchornick/Note-Taker.git">  
          <img className="Project-Image" src={require("./Style/img/NoteTaker.PNG")} alt="NoteTaker"/>
          </a>
        </Col>
        <Col md="4">
          <a data-tip="SMU CSS Challenge" href="hhttps://github.com/RCSchornick/RCSchornick-Projects.git">  
          <img className="Project-Image" src={require("./Style/img/CSSPortfolio.png")} alt="CSS Challenge"/>
          </a>
        </Col>
        <Col md="4">
        <a data-tip="SMU Javascript Challenge" href="https://github.com/RCSchornick/Coding-Quiz.git">  
          <img className="Project-Image" src={require("./Style/img/CodeQuiz.PNG")} alt="Code Quiz"/>
          </a>
          </Col>
        <Col md="4">
        <a data-tip="New Projects Coming Soon" href="https://github.com/Auzz24/Book-it.git">  
          <img className="Project-Image" src={require("./Style/img/ComingSoon.jpg")} alt="Coming Soon"/>
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