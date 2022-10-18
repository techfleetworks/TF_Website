import React from 'react'
import Image from 'next/image'
//need to import the navbar css from the navbar.scss file
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components.
// anchor tags need to be replaced with the Link tag from next.js documentation

export default function navbar() {
  return (
    <div>
       <nav className="sticky-top TFont-navbar navbar-section navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Image width={100} height={100} className="nav-logo-img" src="/media/Tech Fleet Logo_black.png" alt="Tech Fleet logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav-middle-section collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active TFont-navbar-active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#how-it-works">How it Works</a>
                </li>
              <li className="nav-item">
                <a className="nav-link" href="#hire-us"> Hire Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#apply">Apply</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#livemissions-section">Currrent Work</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Previous Work
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#previous-work">See All</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#success-stories">Success Stories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#partners">Partners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li> 
            </ul>
           <button type="button" className="buttonTF2 nav-btn">Handbook</button>
          </div>
        </div>
        
    </nav>
    
    </div>
  )
}
