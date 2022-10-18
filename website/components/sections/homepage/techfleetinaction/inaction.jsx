// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
// use the next.js image element and link element. refer to next.js documentation. 




import React from 'react'
import Image from 'next/image'

export default function inaction() {
  return (
    <div>
                
        <div id="livemissions-section" class="anchor">
        <div className="row">
            <div className="d-flex flex-row justify-content-between">
            <Image src="./media/nails.svg" alt=""/>
            <Image src="./media/nails.svg" alt=""/>
            </div>
        </div>
        <div  className="container d-flex flex-column">


        <h2 className="TFont-h2 text-black">See Tech Fleet in action</h2>
        <p  className="mb-5 TFont-p-24px text-black center-p-w-700">Wondering what it’s like in the Fleet? Anyone can join Tech Fleet meetings to shadow and observe teams. Check 
            out our live apprenticeships and watch the magic happen. </p>

            <h3   id="live-mission-text" className="text-center mb-5 mt-3">LIVE MISSIONS</h3>

      <div className="row">

          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">EARTH HERO MOBILE APP FEATURES</p>
              <Image src="/media/Frame940.jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
                  <button type="button" className="buttonTF2 mb-2">PROJECT LEAD</button>
                  <button type="button" className="buttonTF2 mb-2">SLACK CHANNEL</button>
              </div>
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">RUMINATE “FEEDBACK” PLATFORM APP</p>
              <Image src="/media/Frame 940 (1).jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
                  <button type="button" className="buttonTF2 mb-2">PROJECT LEAD</button>
                  <button type="button" className="buttonTF2 mb-2">SLACK CHANNEL</button>
              </div>
          </div>



          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">THE SERIOUS TYPE SOCIAL MEDIA APP</p>
              <Image src="/media/Frame 940 (2).jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
                  <button type="button" className="buttonTF2 mb-2">PROJECT LEAD</button>
                  <button type="button" className="buttonTF2 mb-2">SLACK CHANNEL</button>
              </div>
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">TECH FLEET’S “KADET WALLET”</p>
              <Image src="/media/Frame 940 (3).jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2s">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
                  <button type="button" className="buttonTF2 mb-2">PROJECT LEAD</button>
                  <button type="button" className="buttonTF2 mb-2">SLACK CHANNEL</button>
              </div>
          </div>

          <h4>UP NEXT</h4>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">INCLUSIVE</p>
              <Image src="/media/Frame 912.jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
              </div>
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mb-5">
              <p className="mission-titles">INCLUSIVE</p>
              <Image src="/media/Frame 912 (1).jpg" alt=""  className="img-fluid "/>
              <div className="d-flex flex-row align-items-start flex-wrap justify-content-between buttonTF2-group gap-2">
                  <button type="button" className="buttonTF2 mb-2">MISSION DETAILS</button>
                  <button type="button" className="buttonTF2 mb-2">CLIENT WEBSITE</button>
              </div>
          </div>

      </div>
</div>
  </div>
{/* <!-- see tech fleet in action live mission section ENDS --> */}

    </div>
  )
}
