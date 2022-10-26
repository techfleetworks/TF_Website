import React from 'react'
import Image from "next/image"
import Link from "next/link"

export default function footer() {
  return (
    <div>
        <div className="container-fluid mt-5" id="footerDiv">
  <div className="row">
    <div className="col-12 col-md-4">
      <ul className="footer-item01">
        <li className="mb-4 all-shadow">
          <a href="#"><Image width={20} height={100} src="media/send.png" alt="send-icon"  className="all-shadow" style="margin-right: 10px;"/>info@techfleet.org</a>
        </li>
        <li className="d-flex">
          <Image width={20} height={20} src="media/heart.png" alt="heart-icon"  className="all-shadow" style="margin-right: 10px; margin-top: 7px; height: 20px;"/>
          <p>Created and maintained with love by Tech Fleet community DAO contributors.</p>
        </li>
        <li className="d-flex">
          <Image width={20} height={20}  src="media/copyright-symbol.png" alt="copy right symbol" className="all-shadow" style="margin-right: 10px; margin-top: 7px; height: 20px;"/>
          <p>Copyright 2022 Tech Fleet community DAO</p>
        </li>
        <li className="my-4">Tech Fleet is planning on incorporating as a DAO to better serve our members globally.</li>
        <li className="info"><Image  width={50} height={20}  src="media/Flux white-blue.png" alt="flux white logo"  style="margin-right: 10px"/><a href="#">Hosted on Flux Network</a></li>
      </ul>
    </div>
    <div className="col-12 col-md-4 text-center">
      <ul className="footer-item02">
        <li className="mb-2"><Image  width={160} height={20}  src="media/Frame 238.png" alt="Tech fleet logo" /></li>
        <li className="mb-2"><a href="#">How it works</a></li>
        <li className="mb-2"><a href="#">Hire us</a></li>
        <li className="mb-2"><a href="#">Apply</a></li>
        <li className="mb-2"><a href="#">Current work</a></li>
        <li className="mb-2"><a href="#">Previous works</a></li>
        <li className="mb-2"><a href="#">Success stories</a></li>
        <li className="mb-2"><a href="#">Industry partners</a></li>
        <li className="mb-2"><a href="#">About</a></li>
        <li className="mb-2"><a href="#">Contact us</a></li>
      </ul>
    </div>
    <div className="col-12 col-md-4 d-flex flex-column align-items-center">
      <button className="btn-footer">PROJECT BACKLOG</button>
      <button className="btn-footer">LITEPAPER</button>
      <button className="btn-footer">VIEW WEB CALENDAR</button>
      <button className="btn-footer">TECH FLEET HANDBOOK</button>
      <div className="d-flex justify-content-between my-4 all-shadow">
        <Link href="#" className="mx-2"><Image  width={50} height={20}  src="/media/Group.png" alt="group01" /></Link>
        <Link href="#" className="mx-2"><Image width={50} height={20}  src="media/Group 280.png" alt="group02"/></Link>
        <Link href="#" className="mx-2"><Image width={50} height={20}  src="media/Group 281.png" alt="group03" /></Link>
        <Link href="#" className="mx-2"><Image width={50} height={20}  src="media/Group 279.png" alt="group04" /></Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
