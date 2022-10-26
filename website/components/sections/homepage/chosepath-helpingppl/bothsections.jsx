// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
// use the next.js image element and link element. refer to next.js documentation. 


import React from 'react'
import Image from 'next/image'
export default function bothsections() {
  return (
    <div>
        
{/* <!-- Choose your path to the real world --> */}
<div className="container d-flex flex-column">
          <h2 className="TFont-h2 text-white text-center">Choose your path to the Real World</h2>
          <p className="new-grads-txt mb-5 TFont-p-24px text-black center-p-w-700 text-white">Learn on the job and build experience while working with real clients. Learn the ways
             of UX and Product and Development from industry vets. Join a global community of aspiring Techies 
             supporting each other’s growth. 
          </p>
          <Image className="mobile-toggle" src="/media/set-your-path-group.png" alt="Set your path" />
          <Image className="mobile-hidden hidden mb-5" src="/media/Space-path-mobile.png" alt="Set your path" />
          {/* <!-- image section for the apprenbticeshhip mission and freelancemission,  social activites, leadership mission, the real world --> */}
          <div className="text-center">
            <button type="button" className="buttonTF2 see-our-work">How it works</button>
          </div>

</div>


{/* <!-- helping people learn by doing section --> */}
  <div className="container d-flex flex-column">
          <h2 className="TFont-h2 text-white text-center">Helping people learn by doing since 2020</h2>
          <p className="mb-5 TFont-p-24px text-black center-p-w-700 text-white">Only jobs teach you some of the hard and soft skills you need to succeed in UX, Product, or 
            Development. We teach them in Tech Fleet.
          </p>
      <div id="index-table" className="">
          <div className="row ">
              <div className="col col-md-6 d-flex flex-column align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Agile Methods</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Lean UX</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Developer Collab</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Cross-functional Work</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Continuous Discovery</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Strategy and Ideation</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>Product Planning</p>
              </div>
              <div className="col col-md-6 d-flex flex-column  align-items-center">
                  <Image src="" alt="img here"/>
                  <p>UX/Product Operations</p>
              </div>
          </div>

      </div>
            <div className=" w-100 d-flex justify-content-center">
            <button type="button" className="btn btn-success ">Learn about us</button>
            </div>
  

  </div>
    </div>
  )
}
