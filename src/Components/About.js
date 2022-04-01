import React, { useState } from 'react';
import {Parallax} from 'react-parallax';
import {Row, Col} from "reactstrap";
import "./Components.css";



function About() {
  return (


  <div>
<Parallax bgImage={require("./wood.jpg")} strength={500}>
            <div style={{ height: 800 }}>
            </div>
            <p>About </p>
        </Parallax>

        <Parallax bgImage={require("./sky.jpg")} strength={500}>
            <div style={{ height: 500 }}>
            </div>
            <p></p>
        </Parallax>

</div>


  );
}
export default About;