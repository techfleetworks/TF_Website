//import the css styling from the scss file. reference next.js module documentation 
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className
//note that some things might not work (rare)and might need to use the react bootstrap components
//use image and link element from next.js framework, refer to documentation.
import React from 'react'
import Image from 'next/image'

export default function bothsections() {
  return (
    <div>
      
{/* <!-- new grads and career transitioners section - also includes You need 0 experience --> */}
      <div id="how-it-works" className="anchor row justify-content-center">
        <div className="col-md-12 col-10 new-grads-container text-center">
          <h2 className="TFont-h2">New grads and career transitioners: feeling<br/> lost in space? </h2>
        </div>
          <div className="col-10 new-grads-txt">
            <p className="mb-5 TFont-p-24px">They say you can’t get a job without experience, and you can’t get experience without a job.</p>
          </div>
          
          {/* <!-- is there a better way to make svg responsive? this is just a placeholder for now --> */}
        <div className="col-md-12 col-8 text-center">
          <Image src="/media/astronaut5.svg" alt="astronaut" className="img-fluid rotate astronaut-mobile" />
        </div>
      </div>
        
{/* <!-- You need 0 experience --> */}
      <div className="row">
        <h2 className="TFont-h2 text-white text-center">You need 0 experience to blast off with Tech Fleet</h2>
        <div className="d-flex flex-column">
          <p className="new-grads-txt mb-5 TFont-p-24px text-black center-p-w-700 text-white">
            We offer real-world learning opportunities whether you have experience or not. You can learn the ropes of product life while getting on-the-job training and mentorship from leads. And it’s free to you!
          </p>

        {/* <!-- section for images. make them responsive. colum 6 and stack on smaller screen.--> */}
          <div className="row text-center justify-content-center">
            <div className="col-11 col-md-6">
              <Image src="/media/Discover 1.svg" alt="Dicover"  width="100%\9" className="img-fluid "/>
            </div>
            <div className="col-11 col-md-6">
                <Image src="/media/Frame919.jpg" alt="Zoom call"  width="100%\9" className="img-fluid "/>
            </div>
            <div>
              <button type="button" className="buttonTF2 see-our-work">How it works</button>
            </div>
          </div>
        </div>
      </div>


{/* <!-- End of section --> */}
    </div>
  )
}
