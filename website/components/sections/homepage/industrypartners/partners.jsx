// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
// use the next.js image element and link element. refer to next.js documentation. 


import Image from 'next/image'
import React from 'react'

export default function partners() {
  return (
    <div>
         {/* <!-- hey industry partners area --> */}
            <div id="partners" className="anchor container mb-5  d-flex flex-column sm-display-none">
              <h2 className="text-center TFont-h2">Hey industry partners</h2>
              <p className="mb-5 text-center TFont-p-24px center-p-w-700">
                The world can help aid us in our mission in many ways. Contact us to talk about how you`&quot;`d like to contribute to 
                Tech Fleet`&quot;`s success.
              </p>
              <h4 className="text-center mb-4">Our partners today:</h4>
              <div className="alumni-logo">
                {/* <!-- First row for partners --> */}
                <div className="row py-2">
                  <div className="col-12 col-md-4">
                    <Image src="/media/cf_logo_min_full 1.svg" alt="..." className="img-fluid"/>
                  </div>
                  <div className="col-12 col-md-4">
                    <Image src="/media/image2vector (1) 1.svg" alt="..." className="img-fluid"/>
                  </div>
                  <div className="col-12 col-md-4">
                    <Image src="/media/Group 365.svg" alt="..." className="img-fluid"/>
                  </div>
                </div>
                {/* <!-- Second row for partners --> */}
                <div className="row py-2">
                    <div className="col-12 col-md-4">
                      <Image src="/media/image2vector 1.svg" alt="..." className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-4">
                      <Image src="/media/zel-flux-logo-horizontal (1) 1.svg" alt="..." className="img-fluid"/>
                    </div>
                    <div className="col-12 col-md-4">
                      <Image src="/media/Logo.570508c7 1.svg" alt="..." className="img-fluid"/>
                    </div>
                </div>
               </div>
          </div>

          <div className="row my-2 sm-display-none">
            <div className="col-12 col-md-6 partner-items">
                <ul className="mb-5 TFont-p-16px center-p-w-700">
                    <li>Run apprenticeship for our students and alumni</li>
                    <li>Re-train your employees in Tech through Tech Fleet apprenticeship</li>
                    <li>Build job feeder programs to hire Tech Fleet alumni</li>
              </ul>
            </div>
            <div className="col-12 col-md-6 partner-items">
                <ul className="mb-5 TFont-p-16px center-p-w-700">
                    <li>Provide on-demand team building for your product team</li>
                    <li>Offer your product or service to our members</li>
                    <li>Whatever you can think of to help aid in each others`&quot;` mission together</li>
                </ul>
            </div>
          </div>
        
          <div className="container text-center mb-5">
            <button className="square bg-green mb-4 w-auto buttonTF">PARTNER WITH US</button>
          </div>
    </div>
  )
}
