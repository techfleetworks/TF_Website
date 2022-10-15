// create the react functional component
// import the styling sheet
//concatenate the styles object varialbes with the string "classnames" refer to how css modules work in next.js
// and needs to chance class to className


import React from 'react'

export default function calling() {
  return (
    <div>
        <div id="apply" class="anchor container d-flex flex-column">


        <h2  class="TFont-h2 text-white text-center">Calling all recruits</h2>
        <p class="mb-5 TFont-p-24px text-black center-p-w-700 text-white">Apprenticeship and leadership roles are open for limited time each time we open them up. Check out our current 
            project openings and apply to be a part of the Fleet. No experience required.
        </p>


        <img src="/media/Group369.jpg" alt=""  class="img-fluid" style="max-height: 500px; max-width: 500px;"/>
        <p>There are no projects to apply to right now. You can shadow the live projects listed below.</p>

        </div>
    
    </div>
  )
}
