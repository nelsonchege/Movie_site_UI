import React from 'react'
import '../MainContent.css'
import {BsPlusLg} from 'react-icons/bs'
import OverLayedCircles from '../../GlobalComponents/OverLayedCircles'

export default function MainSectonContent() {
  return (
    <div className="mainSectonContent-banner">
        <div className="mainSectonContent-banner-top">
            <div>
            <div className="mainSectonContent-banner-quality">1080</div>
            </div>
            <OverLayedCircles/>
            <div>
            <span>+ people are currently watching</span>
            </div>
        </div>
        <div className="mainSectonContent-banner-bottom">
            <div className="mainSectonContent-banner-bottom-left">
                <h2>Blade runner 2049</h2>
                <div>81% fresh</div>
                <div className="mainSectonContent-actionBar">
                    <div className="mainSectonContent-actionBar-watch">Watch</div>
                    <div className="mainSectonContent-actionBar-action"><BsPlusLg/></div>
                </div>
            </div>
            <div className="mainSectonContent-banner-bottom-right">
                <div className='mainSectonContent-corasel'>
                    <div className='mainSectonContent-corasel-img' style={{ width:'80px', backgroundImage: `url(https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}} />
                    <div className='mainSectonContent-corasel-img' style={{ width:'80px', backgroundImage: `url(https://images.unsplash.com/photo-1511875762315-c773eb98eec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover",boxShadow: "rgba(255, 255, 255,0.4) 0px 2px 4px 0px, rgba(255, 255, 255, 0.51) 0px 2px 16px 0px"}} />
                    <div className='mainSectonContent-corasel-img' style={{ width:'80px', backgroundImage: `url(https://images.unsplash.com/photo-1512113569142-8a60fccc7caa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80)`,backgroundPosition: "center",backgroundRepeat: "no-repeat",backgroundSize: "cover"}} />
                </div>
            </div>
        </div>
    </div>
  )
}
