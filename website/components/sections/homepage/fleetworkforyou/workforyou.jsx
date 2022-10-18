// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className

import React from 'react'

export default function workforyou() {
  return (
    <div>
        <div id="hire-us" className="anchor container d-flex flex-column">
            <h2 className="TFont-h2 text-white text-center">Let the Fleet work for you</h2>
            <p className="mb-5 TFont-p-24px text-black center-p-w-700 text-white">Whether you’re a company or startup, for-profit or nonprofit, we offer services to help you accomplish your 
            business goals. We offer pro bono services for nonprofits. We’ll work for tokens or equity. By being our client you’re 
            helping aid in our mission to provide equal access to Tech.
            </p>


            <div className="row">
            <div className="col col-md-6">

            </div>
            <div className="col col-md-6">
                <h4>We can help you</h4>
                <ul>
                    <li>launch a new idea from conception</li>
                    <li>find your product-market fit</li>
                    <li>develip a web or mobile product</li>
                    <li>re-envision an existing product or service</li>
                    <li>Test new business ideas with users</li>
                    <li>Increase engagement with your user base</li>
                    <li>Curious whether we offer a service you don’t see? Let’s talk! </li>
                </ul>
            </div>
            </div>
                <button type="button" className="btn btn-success">Learn about us</button>

        </div>
    </div>
  )
}
