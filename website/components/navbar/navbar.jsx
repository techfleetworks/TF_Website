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
       <nav class="sticky-top TFont-navbar navbar-section navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <Image class="nav-logo-img" src="./media/Tech Fleet Logo_black.png" alt="Tech Fleet logo" />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="nav-middle-section collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active TFont-navbar-active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#how-it-works">How it Works</a>
                </li>
              <li class="nav-item">
                <a class="nav-link" href="#hire-us"> Hire Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#apply">Apply</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#livemissions-section">Currrent Work</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Previous Work
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#previous-work">See All</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#success-stories">Success Stories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#partners">Partners</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li> 
            </ul>
           <button type="button" class="buttonTF2 nav-btn">Handbook</button>
          </div>
        </div>
        
    </nav>
    
    </div>
  )
}
