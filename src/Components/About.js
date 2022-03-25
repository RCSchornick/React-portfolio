import React, { useState } from 'react';
import {Parallax} from 'react-parallax';



function About() {
  return (


  <div>
<Parallax bgImage={require("../photo.jpeg")} strength={500}>
            <div style={{ height: 500 }}>
            </div>
            <p>About Me</p>
        </Parallax>
</div>


  );
}
export default About;