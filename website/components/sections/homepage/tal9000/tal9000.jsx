

import React from 'react'
import Image from 'next/image'


export default function tal9000() {
  return (
    <div>
         <div>
      <div className="container">
        <div className="row">
          <h4 className="text-center">the TAL 9000 is here to help</h4>
          <div className="col-12 col-lg-3">
              <Image src="/media/redbutton3x.jpg" alt="" className="img-fluid"/>

          </div>

          <div className="col-12 col-lg-9"  id="bg-tal9000">
            <div >
              <div  className="row">
                  <div id="left-9000" className="col-12 col-lg-6">
                    <div className="">

                      <div className="row">
                        <div className="d-flex flex-row justify-content-between">
                          <Image src="/media/nails.svg" alt=""/>
                          <Image src="/media/nails.svg" alt=""/>
                        </div>
                      </div>

                      <div className="row px-5">
                        <h5 className="text-center mb-3 text-dark">QUICK LINKS</h5>
                        <div className="col d-flex flex-column justify-content-between">

                          <button className="buttonTF  bg-lightyellow mb-4 "> READ LITEPAPER</button>
                          <button className="buttonTF  bg-lightyellow mb-4 ">VIEW WEB CALENDAR</button>
                          <button className="buttonTF  bg-lightyellow mb-4 ">VIEW LINK REPO</button>
              

                          
                        </div>
                      
                      </div>

                      <div className="row">
                        <div className="d-flex flex-row justify-content-between">
                          <Image src="/media/nails.svg" alt=""/>
                          <Image src="/media/nails.svg" alt=""/>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div id="right-9000" className="col-12 col-lg-6 " >
                    <div className="h-100 d-flex flex-column justify-content-between">

                      <div>
                        <div className="row">
                          <div className="d-flex flex-row justify-content-between">
                            <Image src="/media/nails.svg" alt=""/>
                            <Image src="/media/nails.svg" alt=""/>
                          </div>
                        </div>
                    
                      

                      <div>
                        <div className="d-flex flex-column  align-items-center">
                          <h5 className="text-black text-center mb-4">social media</h5>
                              <div className=" d-flex flex-row flex-wrap justify-content-center" >
                                <div className="col-6  d-flex justify-content-center"> <Image src="/media/slack (2).svg" alt="" className="  p-4 square mb-5 " /> </div>
                                <div className="col-6  d-flex justify-content-center"> <Image src="/media/Group 280 (1).svg" alt="" className="  p-4 square " /> </div>
                                <div className="col-6  d-flex justify-content-center"> <Image src="/media/Group 276.svg" alt="" className=" p-4 square " /> </div>
                                <div className="col-6  d-flex justify-content-center"> <Image src="/media/Group 279 (1).svg" alt="" className=" p-4 square " /> </div>
                                
                              
                                </div>
                          </div>
                      </div>

                      
                      </div>
                      

          
                      <div className="">
                        <div className="d-flex flex-row justify-content-between">
                          <Image src="/media/nails.svg" alt=""/>
                          <Image src="/media/nails.svg" alt=""/>
                        </div>
                      </div>
                    

                    </div>
                  </div>


              </div>
            </div>
          </div>
{/*            <!-- column ends for the 9column part --> */}
        </div>
        {/* <!-- row ends here --> */}
      </div> 
      {/* <!-- container ends here --> */}
    </div> 
    </div>
  )
}
