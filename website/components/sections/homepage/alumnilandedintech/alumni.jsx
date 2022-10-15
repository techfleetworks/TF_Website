


import React from 'react'
import Image from 'next/image'
export default function alumni() {
  return (
    <div>
        

        <div id="success-stories" class="anchor">
            <h4 class="text-center TFont-h2">our alumni have landed in Tech</h4>
            <p class="mb-5 text-center TFont-p-24px center-p-w-700 container">
              Tech Fleet alumni have become job-ready for some of the best in-house and client-facing companies out there.
            </p>

            <div class="hire-section d-none">
              <Image src="media/Frame 1046.png" alt=""/>
              <Image src="media/Frame 1045.png" alt=""/>
              <Image src="media/Frame 1047.png" alt=""/>
              <p class="mt-3 text-center TFont-p-24px">Hired by</p>
            </div>

            {/* <!--logos area--> */}
            <div class="alumni-logo">
              {/* <!-- First row  --> */}
              <div class="row py-2" id="sm-display-grid">
                <div class="col-12 col-md-3">
                  <Image src="/media/State_Farm_logo 1.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-3">
                  <Image src="/media/Group 113.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-3">
                  <Image src="./media/Group 373.svg" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-3">
                  <Image src="./media/Meta_Platforms_Inc._logo 1.svg" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
              </div>
              </div>
              {/* <!-- Second row --> */}
              <div class="row py-2" id="sm-display-grid">
                <div class="col-12 col-md-2">
                  <Image src="/media/Group 339.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-2">
                  <Image src="/media/Group 337.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-2">
                  <Image src="/media/Group 338.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-2">
                  <Image src="/media/cox-auto-2 1.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-2">
                  <Image src="/media/FareHarbor_BlackTicket_CutOut 1.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
                <div class="col-12 col-md-2">
                  <Image src="/media/Charles_Schwab_Corporation_logo 1.png" alt="" class="mx-4 my-2 img-fluid"/>
                </div>
              </div>
          </div>

                {/* <!-- Testimonial area --> */}
            <div class="container mb-5 sm-display-none" id="testimimonial-section">
              <div class="d-flex flex-row flex-wrap justify-content-center gap-4 my-5 py-5">
              {/* <!-- First row --> */}
              <div class="testimonial-card">
                <div class="d-flex flex-column">
                  <Image src="./media/David Headshot 300.jpg" alt="David" class="img-fluid img-headshot"/>
                  <h4 class="sm-center-text mt-2">David</h4>
                  <h5 class="sm-center-text">UX Researcher, Cox Automotive</h5>
                  <p>
                    “My Tech Fleet experience wasabsolutely critical...in <strong>having abase knowledge of UX teomsand research processes</strong>
                    to workfrom. My future team was highlyimpressed with my Tech Fleet storiesand it definitely helped me get myfirst 
                    full time job in UX. It completelychanged my life and career."
                  </p>
                </div>
              </div>

              <div class="testimonial-card">
                <div class="d-flex flex-column">
                  <Image src="./media/Ashley Headshot 300.jpg" alt="Ashley" />



                  <h4 class="sm-center-text mt-2">Ashley</h4>
                  <h5 class="sm-center-text">UX Designer, Phase 2</h5>

                  
                  <p>
                    "One of my goals was to get a job within3 months after graduating from my UXBootcamp...after my first 
                    job applicationsprint, I didn't know if I could make ithappen, I am absolutely positive that <strong>the real 
                    world experience I had withTech Fleet made me standout</strong> within osea of applicants to reach my goal.Transitioning 
                    to UX design is socompetitive and having opportunities toget those real world projects is what we all crave and need."
                  </p>
                </div>

              </div>

              <div class="testimonial-card">
                <div class="d-flex flex-column">
                  <Image src="./media/Helen Headshot 300.jpg" alt="Helen"/>


                  <h4 class="sm-center-text mt-2">Helen</h4>
                  <h5 class="sm-center-text">UX Researcher, AnswerLab</h5>
                  <p>
                    "The [job] interview process involved conducting a mock usability study.I am convinced it was my performance
                    that secured me the role. I know, 100% <strong>without [my Tech Fleet] experience prepping for and moderating
                    usability test, i wouldn't have been as prepred</strong>."
                  </p>
                </div>


              </div>
                
              <div class="testimonial-card">
                <div class="d-flex flex-column">
                    <Image src="./media/Teri Headshot 300.jpg" alt="Ashley" class=""/>

                    <h4 class="sm-center-text mt-2">Teri</h4>
                    <h5 class="sm-center-text">Lead UX Designer, Mindgrub</h5>
                    <p>
                      "Tech Fleet has given me the <strong>in-depth start-to-finish UX and agile project experience</strong> that i 
                      seriously needed. It built up my knowledge, my portfolio, and my confidence."
                    </p>
                </div>
              </div>
              
              <div class="testimonial-card">
                <div class="d-flex flex-column">
                  <Image src="./media/Andrew Headshot 300.jpg" alt="Helen" class="img-fluid img-headshot"/>



                  <h4 class="sm-center-text mt-2">Andrew</h4>
                  <h5 class="sm-center-text">Principal UX Researcher, Think</h5>
                  <p>
                    "I know the challenge of getting that first UX job can seem insurmountable atimes...
                     communities like <strong>Tech Fleet can be a springboard for you and your career.</strong> Not only do you get a
                     chance to work on real tangible projects, but you also have an amazing community of people that want to see everyone thrive."
                  </p>
                </div>

              </div>
              
               </div>
            </div>
                {/* <!-- Testimonial area ends here --> */}

    </div>
  )
}
