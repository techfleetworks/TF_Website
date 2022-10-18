// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components

import React from 'react'
import Image from 'next/image'


export default function banner() {
  return (
    <div>
        <div id="index-hero-section" className="container-fluid text-center d-flex flex-column align-items-center mb-5">
      {/* <!-- TOP SECTION -->
      <!-- Icons --> */}
    <div className="container-fluid">
      <div className="row">
        <div className="col icons-top d-flex justify-content-end all-shadow">
          <a href="#"><Image className="icon-styles" src="media/Group.png" alt="group01" width="24px"/></a>
          <a href="#"><Image className="icon-styles" src="media/Subtract.svg" alt="group06" width="24px"/></a>
          <a href="#"><Image className="icon-styles" src="media/Group 280.png" alt="group02" width="24px"/></a>
          <a href="#"><Image className="icon-styles" src="media/Group 281.png" alt="group03" width="24px"/></a>
          <a href="#"><Image className="icon-styles" src="media/Group 279.png" alt="group04" width="24px"/></a>
        </div>
      </div>
    </div>
      <div className="row hero-section-above">
        <div className="col-sm-12">
          <h1 className="TFont-h1 align-items-center">Tech Fleet Community DAO</h1>
          <div className="TFont-p-24px">
            <Image src="./media/kadena-kda-logo 1.svg" alt="kadena logo" />
            <span className="highlight-txt">Powered by Kadena</span>
          </div>
        </div>
      </div>
        
      {/* <!-- realtech experience--> */}
      <div className="row hero-section-below justify-content-center">
        <div className="col-md-12 col-10">
            <h5 className="TFont-h3">Real tech experience for anyone, anywhere</h5>
        </div> 
        <div className="col-md-2 col-sm-4 icons-container icons-list text">
          <div className="TFont-p-20px">
              <p className="p-index-icons">Community Tech Apprenticeships</p>
              <Image src="./media/Vector.svg" width="100px" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 icons-container icons-list">
          <div className="TFont-p-20px">
              <p className="p-index-icons">Community Web2 and Web3 agency</p>
              <Image src="./media/sketch 1.svg" width="100px" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 icons-container icons-list">
          <div className="TFont-p-20px">
              <p className="p-index-icons">Community startup accelerator</p>
              <Image src="./media/rocket (1) 1.svg" width="100px" />
          </div>
        </div>
        <div className="col-md-2 col-sm-4 icons-container icons-list">
          <div className="TFont-p-20px">
              <p className="p-index-icons">Community product incubator</p>
              <Image src="./media/astronaut 6.svg" width="100px" />
          </div>
        </div>
      </div>

      {/* <!-- buttons --> */}
      <div className="row mb-5">
        <div className="d-flex flex-column mb-5">
         <button type="button" className="buttonTF2 nav-btn see-our-work">See our work</button>
          <button type="button" className="buttonTF hire-us">Hire us</button>
        </div>
      </div>
    </div>
    </div>
  )
}
