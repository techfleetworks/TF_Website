// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
// use the next.js image element and link element. refer to next.js documentation. 



import React from 'react'

export default function partners() {
  return (
    <div>
         {/* <!-- hey industry partners area --> */}
            <div id="partners" class="anchor container mb-5  d-flex flex-column sm-display-none">
              <h2 class="text-center TFont-h2">Hey industry partners</h2>
              <p class="mb-5 text-center TFont-p-24px center-p-w-700">
                The world can help aid us in our mission in many ways. Contact us to talk about how you'd like to contribute to 
                Tech Fleet's success.
              </p>
              <h4 class="text-center mb-4">Our partners today:</h4>
              <div class="alumni-logo">
                {/* <!-- First row for partners --> */}
                <div class="row py-2">
                  <div class="col-12 col-md-4">
                    <img src="./media/cf_logo_min_full 1.svg" alt="..." class="img-fluid"/>
                  </div>
                  <div class="col-12 col-md-4">
                    <img src="./media/image2vector (1) 1.svg" alt="..." class="img-fluid"/>
                  </div>
                  <div class="col-12 col-md-4">
                    <img src="./media/Group 365.svg" alt="..." class="img-fluid"/>
                  </div>
                </div>
                {/* <!-- Second row for partners --> */}
                <div class="row py-2">
                    <div class="col-12 col-md-4">
                      <img src="./media/image2vector 1.svg" alt="..." class="img-fluid"/>
                    </div>
                    <div class="col-12 col-md-4">
                      <img src="./media/zel-flux-logo-horizontal (1) 1.svg" alt="..." class="img-fluid"/>
                    </div>
                    <div class="col-12 col-md-4">
                      <img src="./media/Logo.570508c7 1.svg" alt="..." class="img-fluid"/>
                    </div>
                </div>
               </div>
          </div>

          <div class="row my-2 sm-display-none">
            <div class="col-12 col-md-6 partner-items">
                <ul class="mb-5 TFont-p-16px center-p-w-700">
                    <li>Run apprenticeship for our students and alumni</li>
                    <li>Re-train your employees in Tech through Tech Fleet apprenticeship</li>
                    <li>Build job feeder programs to hire Tech Fleet alumni</li>
              </ul>
            </div>
            <div class="col-12 col-md-6 partner-items">
                <ul class="mb-5 TFont-p-16px center-p-w-700">
                    <li>Provide on-demand team building for your product team</li>
                    <li>Offer your product or service to our members</li>
                    <li>Whatever you can think of to help aid in each others' mission together</li>
                </ul>
            </div>
          </div>
        
          <div class="container text-center mb-5">
            <button class="square bg-green mb-4 w-auto buttonTF">PARTNER WITH US</button>
          </div>
    </div>
  )
}
