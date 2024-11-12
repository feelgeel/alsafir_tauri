import React from 'react'
import img1 from "../img/nat-8.jpg"
import img2 from "../img/nat-7.jpg"
export default function Popups({children}) {
  return (
    <div className="popups" id="popup">
        <div className="popups-content">
          <a href="#" className="popups-close">&times;</a>
          {children}
            {/* <div className="popups-left">
                <img className="popups-img-1" src={img1} alt=""/>
                <img  className="popups-img-2" src={img2} alt=""/>
            </div>
            <div className="popups-right">
                    <h2 className="h-secondary">Start booking now</h2>
                    <h3 className="heading-tertiary">Important &ndash; Please read these terms before booking</h3>
                    <p className="popups-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Sed sed risus pretium quam. Aliquam sem et tortor consequat id. Volutpat odio facilisis mauris sit
                        amet massa vitae. Mi bibendum neque egestas congue. Placerat orci nulla pellentesque dignissim enim
                        sit. Vitae semper quis lectus nulla at volutpat diam ut venenatis. Malesuada pellentesque elit eget
                        gravida cum sociis natoque penatibus et. Proin fermentum leo vel orci porta non pulvinar neque laoreet.
                        Gravida neque convallis a cras semper. Molestie at elementum eu facilisis sed odio morbi quis. Faucibus                       
                    </p>
                    <a href="#" className="btn btn-green">Book now</a>
                </div> */}
        </div>
    
    </div>
  )
}
