import React, { useState } from 'react';
import './Style/Components.css';



function Footer() {
  return (


  <div className='Footer'>
<p>Thank you for visiting!
<a href="https://github.com/RCSchornick"><img src={require("./Style/img/github.png")} style={{ height: 45, width: 35, paddingBottom: 10 }} alt="GitHub" /></a>
<a href="https://www.linkedin.com/in/rachel-claire-schornick-b10039234"><img src={require("./Style/img/LinkedIn.png")} style={{ height: 38, width: 28, margin: 10, paddingBottom: 10 }} alt="LinkedIn" /></a>

</p>
</div>


  );
}
export default Footer;