import React, { useState } from 'react';
import {Parallax} from 'react-parallax';
import {Row, Col} from "reactstrap";
import "./Style/Components.css";
// import Reveal from "react-reveal/fadeIn";
import {TextContainer} from "./Style/TextContainers.js";

function About() {
  return (


  <div>
<Parallax bgImage={require("./Style/img/wood.jpg")} strength={500}>
            <div style={{ height: 685 }}>
            </div>
            <p className="Introduction"> Hi, I'm Rachel-Claire!
            </p>
            <div className='IntroPic'>
            <img className="Intro-Image" src={require("./Style/img/Rachel Schornick.jpg")} alt="Photo"/>

            </div>
            
        </Parallax>

        <Parallax bgImage={require("./Style/img/sky.jpg")} strength={500}>
            <div style={{ height: 500 }}>
            <div className='WhatIDo'>
                <p>I am a Full Stack Developer intent on creating practical solutions to front-end and back-end problems. My mission is to work with passionate individuals to tackle any challenge we may come across.</p>
                <p>I can build websites, or work behind the scenes assembling data. Whatever the obstacle, I'm on it.</p>
                <p>My goal is to create efficient applications that are visually pleasing. I love learning and am excited to jump into the next challenge.</p>
                <p>Let's work together!</p>

                </div>
            </div>
            <p></p>
        </Parallax>

</div>


  );
}
export default (About);
